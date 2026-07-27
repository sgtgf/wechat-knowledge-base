/**
 * WeChat Knowledge Base MCP Server
 *
 * 提供 MCP 协议接口，让 Claude Code 远程检索公众号知识库
 * 通过 GitHub API 读取公开仓库中的 .md 文件
 *
 * 部署：npm install -g wrangler && wrangler deploy
 */

const GITHUB_OWNER = 'sgtgf';
const GITHUB_REPO = 'wechat-knowledge-base';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;
const GITHUB_RAW = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/master`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // SSE 端点：建立 MCP 长连接
    if (url.pathname === '/sse') {
      return handleSSE(request, env, ctx, corsHeaders);
    }

    // Message 端点：接收 MCP JSON-RPC 消息
    if (url.pathname === '/message' && request.method === 'POST') {
      return handleMessage(request, env, ctx, corsHeaders);
    }

    // 根路径：信息页
    return new Response(JSON.stringify({
      name: 'WeChat Knowledge Base MCP',
      version: '1.0.0',
      repo: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      tools: ['search_kb', 'read_article', 'list_articles'],
      usage: '在 Claude Code 中配置 MCP 地址为本服务器 URL'
    }, null, 2), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
};

// ==================== SSE 连接管理 ====================

async function handleSSE(request, env, ctx, corsHeaders) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  // 发送 session ID 和 endpoint 信息
  const sessionId = crypto.randomUUID();
  writer.write(encoder.encode(`event: endpoint\ndata: /message\n\n`));
  writer.write(encoder.encode(`event: session_id\ndata: ${sessionId}\n\n`));

  // 心跳保活（每15秒）
  const heartbeat = setInterval(async () => {
    try {
      await writer.write(encoder.encode(`: heartbeat\n\n`));
    } catch {
      clearInterval(heartbeat);
    }
  }, 15000);

  // 客户端断开时清理
  request.signal.addEventListener('abort', () => {
    clearInterval(heartbeat);
    writer.close().catch(() => {});
  });

  ctx.waitUntil(new Promise(resolve => {
    request.signal.addEventListener('abort', resolve);
  }));

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      ...corsHeaders
    },
  });
}

// ==================== MCP 消息处理 ====================

async function handleMessage(request, env, ctx, corsHeaders) {
  try {
    const body = await request.json();
    const { id, method, params } = body;

    let result;
    switch (method) {
      case 'tools/list':
        result = { tools: getToolDefinitions() };
        break;

      case 'tools/call':
        result = await handleToolCall(params.name, params.arguments);
        break;

      case 'resources/list':
        result = { resources: await listResources() };
        break;

      default:
        return jsonRpcError(id, -32601, `Method not found: ${method}`, corsHeaders);
    }

    return Response.json({
      jsonrpc: '2.0',
      id,
      result
    }, { headers: { ...corsHeaders } });

  } catch (e) {
    return jsonRpcError(null, -32700, `Parse error: ${e.message}`, corsHeaders);
  }
}

// ==================== 工具定义 ====================

function getToolDefinitions() {
  return [
    {
      name: 'search_kb',
      description: '搜索公众号知识库中的文章内容，返回匹配的段落及文章路径',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: '搜索关键词，支持中文' }
        },
        required: ['query']
      }
    },
    {
      name: 'read_article',
      description: '读取指定文章的完整 Markdown 内容，包含公式和代码',
      inputSchema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: '文章路径，如 "PMSM无感启动系列/05讲_γ-δ坐标系/文章.md"' }
        },
        required: ['path']
      }
    },
    {
      name: 'list_articles',
      description: '列出知识库中所有已入库的文章目录结构',
      inputSchema: {
        type: 'object',
        properties: {
          topic: { type: 'string', description: '按主题筛选（可选），如 "PMSM无感启动系列"' }
        }
      }
    }
  ];
}

// ==================== 工具实现 ====================

async function handleToolCall(name, args) {
  switch (name) {
    case 'search_kb':
      return await searchArticles(args.query);
    case 'read_article':
      return await readArticle(args.path);
    case 'list_articles':
      return await listArticles(args.topic);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

/**
 * 搜索文章内容
 * 遍历仓库中所有 .md 文件，查找匹配关键词的段落
 */
async function searchArticles(query) {
  if (!query || query.trim() === '') {
    return {
      content: [{ type: 'text', text: '请输入搜索关键词' }],
      isError: true
    };
  }

  // 获取仓库文件树
  const files = await fetchGitHubTree();
  const mdFiles = files.filter(f => f.path.endsWith('.md') && f.path !== 'README.md');

  // 逐文件搜索
  const results = [];
  for (const file of mdFiles.slice(0, 30)) {  // 最多搜30个文件
    const content = await fetchRawFile(file.path);
    if (!content) continue;

    const lines = content.split('\n');
    const matches = [];
    let prevLine = '';

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(query.toLowerCase())) {
        matches.push({
          line: i + 1,
          context: prevLine.trim(),
          match: lines[i].trim()
        });
      }
      prevLine = lines[i];
    }

    if (matches.length > 0) {
      results.push({
        file: file.path,
        title: file.path.split('/').pop().replace('.md', ''),
        matches
      });
    }
  }

  if (results.length === 0) {
    return {
      content: [{ type: 'text', text: `未找到包含"${query}"的文章` }]
    };
  }

  // 格式化为可读文本
  let text = `## 搜索结果：${query}\n\n`;
  text += `共在 ${results.length} 篇文章中找到匹配：\n\n`;

  for (const r of results) {
    text += `### 📄 ${r.title}\n`;
    text += `路径：\`${r.file}\`\n\n`;
    for (const m of r.matches.slice(0, 5)) {  // 每篇最多显示5条
      if (m.context) text += `> ${m.context}\n`;
      text += `- **L${m.line}:** ${m.match}\n\n`;
    }
    if (r.matches.length > 5) {
      text += `*...还有 ${r.matches.length - 5} 处匹配*\n\n`;
    }
  }

  text += `---\n要读取某篇文章的完整内容，请使用 \`read_article\` 工具，path 参数填上面的路径。`;

  return {
    content: [{ type: 'text', text }]
  };
}

/**
 * 读取单篇文章完整内容
 */
async function readArticle(path) {
  if (!path) {
    return {
      content: [{ type: 'text', text: '请提供文章路径' }],
      isError: true
    };
  }

  const content = await fetchRawFile(path);
  if (!content) {
    return {
      content: [{ type: 'text', text: `未找到文件：${path}\n请先用 list_articles 查看可用路径` }],
      isError: true
    };
  }

  // 提取标题
  const titleLine = content.split('\n').find(l => l.startsWith('# '));
  const title = titleLine ? titleLine.replace('# ', '') : path.split('/').pop();

  return {
    content: [{ type: 'text', text: `# ${title}\n\n---\n\n${content}` }]
  };
}

/**
 * 列出所有文章
 */
async function listArticles(topic) {
  const files = await fetchGitHubTree();
  const folders = new Set();

  // 找出所有包含 .md 的文件夹
  for (const f of files) {
    if (f.path.endsWith('.md') && f.path !== 'README.md' && !f.path.startsWith('worker/')) {
      const parts = f.path.split('/');
      if (parts.length >= 2) {
        folders.add(parts[0]);  // 主题层
      }
    }
  }

  let text = `## 📚 公众号知识库\n\n`;
  text += `仓库：${GITHUB_OWNER}/${GITHUB_REPO}\n\n`;
  text += `共 ${folders.size} 个主题分类：\n\n`;

  for (const folder of [...folders].sort()) {
    if (topic && folder !== topic) continue;

    text += `### 📁 ${folder}\n`;

    // 找该主题下的文章
    const articles = files.filter(f =>
      f.path.startsWith(folder + '/') &&
      f.path.endsWith('.md') &&
      !f.path.endsWith('README.md')
    );

    for (const article of articles) {
      const name = article.path.split('/').pop().replace('.md', '');
      text += `- [${name}] - path: \`${article.path}\`\n`;
    }
    text += '\n';
  }

  text += `---\n`;
  text += `搜索文章内容：\`search_kb(query: "关键词")\`\n`;
  text += `读取全文：\`read_article(path: "主题/文章文件夹/文章名.md")\``;

  return {
    content: [{ type: 'text', text }]
  };
}

// ==================== GitHub API 工具函数 ====================

/**
 * 获取仓库文件树（Git Tree API）
 */
async function fetchGitHubTree() {
  const url = `${GITHUB_API}/git/trees/master?recursive=1`;
  const resp = await fetch(url, {
    headers: {
      'User-Agent': 'wechat-kb-mcp',
      'Accept': 'application/vnd.github.v3+json'
    }
  });

  if (!resp.ok) {
    throw new Error(`GitHub API error: ${resp.status}`);
  }

  const data = await resp.json();
  return (data.tree || []).filter(item => item.type === 'blob');
}

/**
 * 获取文件的原始内容
 */
async function fetchRawFile(path) {
  const url = `${GITHUB_RAW}/${encodeURIComponent(path)}`;
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'wechat-kb-mcp' }
  });

  if (!resp.ok) return null;
  return await resp.text();
}

// ==================== 工具函数 ====================

function jsonRpcError(id, code, message, corsHeaders) {
  return Response.json({
    jsonrpc: '2.0',
    id,
    error: { code, message }
  }, {
    status: 200,
    headers: { 'Content-Type': 'application/json', ...corsHeaders }
  });
}

// 公众号知识库 MCP 服务器
// 部署到 Cloudflare Workers
// 源码：https://github.com/sgtgf/wechat-knowledge-base

const GITHUB_OWNER = 'sgtgf';
const GITHUB_REPO = 'wechat-knowledge-base';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;
const GITHUB_RAW = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/master`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    // SSE 端点
    if (url.pathname === '/sse') return handleSSE(request, ctx, cors);
    // 消息端点
    if (url.pathname === '/message' && request.method === 'POST') return handleMessage(request, cors);
    // 首页
    return new Response('✅ WeChat Knowledge Base MCP Server', { headers: cors });
  }
};

async function handleSSE(request, ctx, cors) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const enc = new TextEncoder();
  writer.write(enc.encode('event: endpoint\ndata: /message\n\n'));
  const hb = setInterval(() => writer.write(enc.encode(': hb\n\n')).catch(() => clearInterval(hb)), 15000);
  request.signal.addEventListener('abort', () => { clearInterval(hb); writer.close().catch(() => {}); });
  ctx.waitUntil(new Promise(r => request.signal.addEventListener('abort', r)));
  return new Response(readable, { headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', ...cors } });
}

async function handleMessage(request, cors) {
  try {
    const body = await request.json();
    const { id, method, params } = body;
    let result;
    if (method === 'tools/list') {
      result = { tools: [
        { name: 'search_kb', description: '搜索知识库文章，返回匹配段落', inputSchema: { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] } },
        { name: 'read_article', description: '读取文章完整内容', inputSchema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
        { name: 'list_articles', description: '列出知识库所有文章', inputSchema: { type: 'object', properties: { topic: { type: 'string' } } } }
      ]};
    } else if (method === 'tools/call') {
      result = await callTool(params.name, params.arguments);
    } else {
      return jsonErr(id, -32601, '未知方法', cors);
    }
    return Response.json({ jsonrpc: '2.0', id, result }, { headers: { 'Content-Type': 'application/json', ...cors } });
  } catch (e) {
    return jsonErr(null, -32700, e.message, cors);
  }
}

async function callTool(name, args) {
  if (name === 'search_kb') return await search(args.query);
  if (name === 'read_article') return await readArticle(args.path);
  if (name === 'list_articles') return await listArticles(args.topic);
  return { content: [{ type: 'text', text: `未知工具: ${name}` }], isError: true };
}

async function search(query) {
  const files = await getFiles();
  const mdFiles = files.filter(f => f.path.endsWith('.md') && !f.path.startsWith('worker/') && f.path !== 'README.md');
  let results = [];
  for (const f of mdFiles.slice(0, 30)) {
    const content = await getRaw(f.path);
    if (!content) continue;
    const lines = content.split('\n');
    let matches = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().includes(query.toLowerCase())) {
        matches.push(`L${i+1}: ${lines[i].trim()}`);
      }
    }
    if (matches.length) results.push({ file: f.path, title: f.path.split('/').pop().replace('.md',''), matches: matches.slice(0,5) });
  }
  if (!results.length) return { content: [{ type: 'text', text: `未找到"${query}"` }] };
  let text = `搜索 "${query}" 找到 ${results.length} 篇文章：\n\n`;
  for (const r of results) {
    text += `**${r.title}** (\`${r.file}\`)\n`;
    r.matches.forEach(m => text += `> ${m}\n`);
    text += '\n';
  }
  text += '---\n用 read_article(path: "文件路径") 阅读全文';
  return { content: [{ type: 'text', text }] };
}

async function readArticle(path) {
  const content = await getRaw(path);
  if (!content) return { content: [{ type: 'text', text: `未找到: ${path}` }], isError: true };
  return { content: [{ type: 'text', text: content }] };
}

async function listArticles(topic) {
  const files = await getFiles();
  const folders = new Set();
  const articles = {};
  for (const f of files) {
    if (f.path.endsWith('.md') && !f.path.startsWith('worker/') && f.path !== 'README.md') {
      const parts = f.path.split('/');
      if (parts.length >= 2) {
        folders.add(parts[0]);
        if (!articles[parts[0]]) articles[parts[0]] = [];
        articles[parts[0]].push(f.path);
      }
    }
  }
  let text = '# 公众号知识库\n\n';
  for (const folder of [...folders].sort()) {
    if (topic && folder !== topic) continue;
    text += `## ${folder}\n`;
    for (const a of articles[folder] || []) {
      text += `- \`${a}\`\n`;
    }
    text += '\n';
  }
  text += '---\n用 read_article(path) 阅读全文 | search_kb(query) 搜索';
  return { content: [{ type: 'text', text }] };
}

async function getFiles() {
  const r = await fetch(`${GITHUB_API}/git/trees/master?recursive=1`, { headers: { 'User-Agent': 'mcp' } });
  const d = await r.json();
  return (d.tree || []).filter(i => i.type === 'blob');
}

async function getRaw(path) {
  const r = await fetch(`${GITHUB_RAW}/${encodeURIComponent(path)}`, { headers: { 'User-Agent': 'mcp' } });
  return r.ok ? await r.text() : null;
}

function jsonErr(id, code, msg, cors) {
  return Response.json({ jsonrpc: '2.0', id, error: { code, message: msg } }, { headers: { 'Content-Type': 'application/json', ...cors } });
}

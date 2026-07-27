# 公众号知识库

微信公众号文章提取的电机控制知识库。

## 在线 MCP 服务器（推荐）

无需克隆仓库，在 Claude Code 的 `claude.json` 中配置：

```json
{
  "mcpServers": {
    "zhaodenan-kb": {
      "url": "https://wechat-kb-mcp.3198714805.workers.dev"
    }
  }
}
```

配置后，在 VS Code 的 Claude Code 中问问题，Claude **会自动检索**这个知识库：

- "PMSM 无感启动有哪些方法？"
- "γ-δ 坐标系和 d-q 坐标系什么关系？"
- "I/f 启动的负载角怎么算？"
- "查一下有没有讲 FOC 的文章"

## 本地克隆 + 技能（高级）

```bash
git clone https://github.com/sgtgf/wechat-knowledge-base.git
cd wechat-knowledge-base
claude code
```

仓库内置了 `.claude/skills/kb-query` 技能，会自动加载，用本地 Grep/Read 检索文章。

## 目录结构

```
├── KNOWLEDGE_MAP.md            ← 索引表
├── PMSM无感启动系列/            ← 按主题分类
│   └── 05讲_γ-δ坐标系/
│       ├── 文章.md
│       └── 配图
├── .claude/skills/kb-query/    ← 检索技能
└── worker/                     ← MCP 服务器源码
```

## 共享给其他人

别人只需要在你的 `claude.json` 中配上面的 MCP 地址，就能在 Claude Code 中提问时自动检索你的知识库。

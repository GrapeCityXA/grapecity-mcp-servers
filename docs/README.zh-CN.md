# GrapeCity MCP 仓库说明

这是葡萄城官方 MCP 远程服务的公开目录与集成文档仓库，不包含
SpreadJS 或 GcExcel 的产品实现代码。

当前包含两个服务：

- `cn.com.grapecity/gcexcel`
- `cn.com.grapecity/spreadjs`

服务通过 Streamable HTTP 访问，并使用
`token: <MCP token>` 认证。机器可读的 Registry 元数据位于
`servers/*/server.json`，对外发布前运行：

```bash
npm run check
```

GitHub 仓库应创建在公司官方组织下，不应创建在个人账号下。发布与多平台
登记流程见 [release.md](release.md) 和 [marketplaces.md](marketplaces.md)。

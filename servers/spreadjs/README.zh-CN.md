# 葡萄城 SpreadJS MCP

<!-- mcp-name: cn.com.grapecity/spreadjs -->

葡萄城 SpreadJS MCP 面向 SpreadJS 开发者，提供产品文档、代码示例和
产品使用辅助能力。

## 服务信息

- Registry 名称：`cn.com.grapecity/spreadjs`
- 服务地址：`https://mcp.grapecity.com.cn/mcp/spreadjs`
- 传输协议：Streamable HTTP
- 认证方式：`Authorization: Bearer <你的 SpreadJS MCP Key>`

## 接入示例

```json
{
  "mcpServers": {
    "grapecity-spreadjs": {
      "type": "http",
      "url": "https://mcp.grapecity.com.cn/mcp/spreadjs",
      "headers": {
        "Authorization": "Bearer ${GRAPECITY_MCP_KEY}"
      }
    }
  }
}
```

请将 MCP Key 保存在 MCP 客户端的密钥管理功能或环境变量中，不要提交到
GitHub、公开文档、Issue、截图或聊天记录中。

机器可读的 Registry 元数据位于
[`server.json`](server.json)。

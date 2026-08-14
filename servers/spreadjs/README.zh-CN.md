# 葡萄城 SpreadJS MCP

<!-- mcp-name: cn.com.grapecity/spreadjs -->

葡萄城 SpreadJS MCP 面向 SpreadJS 开发者，提供产品文档、代码示例和
产品使用辅助能力。

## 适用场景

- 查找 SpreadJS API、配置项和产品文档
- 根据开发需求获取 JavaScript 代码示例
- 理解表格组件的配置方式和常见用法
- 排查使用 SpreadJS 时遇到的开发问题
- 让 AI 助手结合 SpreadJS 官方资料解释解决方案

该服务通过远程 MCP 接口提供能力，使用时不需要在本地安装完整的
SpreadJS 产品包。

## 服务信息

- Registry 名称：`cn.com.grapecity/spreadjs`
- 服务地址：`https://mcp.grapecity.com.cn/mcp/spreadjs`
- 传输协议：Streamable HTTP
- 认证方式：`token: <你的 SpreadJS MCP Token>`
- 当前版本：`1.0.0-beta.1`
- Token 获取：[葡萄城 MCP 门户](https://mcp.grapecity.com.cn/)

## 接入示例

```json
{
  "mcpServers": {
    "grapecity-spreadjs": {
      "type": "http",
      "url": "https://mcp.grapecity.com.cn/mcp/spreadjs",
      "headers": {
        "token": "${GRAPECITY_MCP_TOKEN}"
      }
    }
  }
}
```

配置完成后，在 MCP 客户端中重载或重启服务，然后直接提问与 SpreadJS
相关的问题。不同客户端对环境变量的展开方式可能不同；如果变量没有被
展开，请使用客户端提供的密钥或请求头配置功能。

## 常见问题

### 提示认证失败

请确认请求头名称是 `token`，并直接填写 MCP Token，不要添加
`Bearer` 前缀。

### 服务没有响应

请确认客户端支持 Streamable HTTP，并检查网络是否可以访问服务地址。
同时确认 MCP Token 没有过期或被撤销。

### 如何保护 Token

请将 MCP Token 保存在 MCP 客户端的密钥管理功能或环境变量中，不要提交
到 GitHub、公开文档、Issue、截图或聊天记录中。

机器可读的 Registry 元数据位于
[`server.json`](server.json)。

## 项目链接

- 官方 MCP 仓库：
  [grapecity-mcp-servers](https://github.com/GrapeCityXA/grapecity-mcp-servers)
- SpreadJS 机器可读元数据：[server.json](server.json)

# GrapeCity SpreadJS MCP

<!-- mcp-name: cn.com.grapecity/spreadjs -->

GrapeCity SpreadJS MCP provides SpreadJS documentation, examples, and
product assistance through a remote Streamable HTTP MCP server.

## Use cases

- Find SpreadJS APIs, configuration options, and product documentation.
- Get JavaScript examples for common development tasks.
- Understand table component configuration and usage patterns.
- Troubleshoot SpreadJS development questions with product references.

The service is provided through a remote MCP endpoint. A complete local
SpreadJS product installation is not required to use the service.

## Connection details

- Registry name: `cn.com.grapecity/spreadjs`
- URL: `https://mcp.grapecity.com.cn/mcp/spreadjs`
- Transport: Streamable HTTP
- Authentication: `token: <your-spreadjs-mcp-token>`
- Current version: `1.0.0-beta.1`

## Configuration

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

Reload or restart the MCP client after changing its configuration. If the
client does not expand environment variables, use its secret or custom
header management feature.

## Troubleshooting

For authentication errors, confirm that the header is named `token` and that
the value does not include a `Bearer` prefix. For connection errors, confirm
that the client supports Streamable HTTP and that the endpoint is reachable.

Keep the token in the MCP client's secret store or an environment variable.
Never commit it to a repository, issue, prompt, screenshot, or shared
configuration.

The canonical machine-readable metadata is in
[`server.json`](server.json).

## Links

- Official repository:
  [grapecity-mcp-servers](https://github.com/GrapeCityXA/grapecity-mcp-servers)
- Chinese guide: [README.zh-CN.md](README.zh-CN.md)

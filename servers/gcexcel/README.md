# GrapeCity GcExcel MCP

<!-- mcp-name: cn.com.grapecity/gcexcel -->

GrapeCity GcExcel MCP provides GcExcel documentation, examples, and
product assistance through a remote Streamable HTTP MCP server.

## Use cases

- Find GcExcel APIs, configuration options, and product documentation.
- Get Java or .NET examples for common development tasks.
- Understand spreadsheet processing and workbook-related features.
- Troubleshoot GcExcel development questions with product references.

The service is provided through a remote MCP endpoint. A complete local
GcExcel product installation is not required to use the service.

## Connection details

- Registry name: `cn.com.grapecity/gcexcel`
- URL: `https://mcp.grapecity.com.cn/mcp/gcexcel`
- Transport: Streamable HTTP
- Authentication: `token: <your-gcexcel-mcp-token>`
- Current version: `1.0.0-beta.1`
- Get a token: [GrapeCity MCP portal](https://mcp.grapecity.com.cn/)

## Configuration

```json
{
  "mcpServers": {
    "grapecity-gcexcel": {
      "type": "http",
      "url": "https://mcp.grapecity.com.cn/mcp/gcexcel",
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

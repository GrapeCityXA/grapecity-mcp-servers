# Client integration

The GrapeCity MCP servers are remote Streamable HTTP servers. The exact
configuration shape varies by client, but the important values are:

Get a GrapeCity MCP token from the
[GrapeCity MCP portal](https://mcp.grapecity.com.cn/) before configuring a
client.

| Server | URL |
| --- | --- |
| GcExcel | `https://mcp.grapecity.com.cn/mcp/gcexcel` |
| SpreadJS | `https://mcp.grapecity.com.cn/mcp/spreadjs` |

Each request must include:

```http
token: <your-grapecity-mcp-token>
```

## Generic MCP JSON

```json
{
  "mcpServers": {
    "grapecity-gcexcel": {
      "type": "http",
      "url": "https://mcp.grapecity.com.cn/mcp/gcexcel",
      "headers": {
        "token": "${GRAPECITY_MCP_TOKEN}"
      }
    },
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

Some clients do not expand environment variables inside JSON values. In
that case, use the client's secret or header management UI and keep the
token out of checked-in files.

## Client-specific submissions

When a client or marketplace requires a server URL, use the corresponding
`server.json` file as the source of truth. Do not create a second endpoint,
server name, or product description for the same server.

# Client integration

The GrapeCity MCP servers are remote Streamable HTTP servers. The exact
configuration shape varies by client, but the important values are:

| Server | URL |
| --- | --- |
| GcExcel | `https://mcp.grapecity.com.cn/mcp/gcexcel` |
| SpreadJS | `https://mcp.grapecity.com.cn/mcp/spreadjs` |

Each request must include:

```http
Authorization: Bearer <your-grapecity-mcp-key>
```

## Generic MCP JSON

```json
{
  "mcpServers": {
    "grapecity-gcexcel": {
      "type": "http",
      "url": "https://mcp.grapecity.com.cn/mcp/gcexcel",
      "headers": {
        "Authorization": "Bearer ${GRAPECITY_MCP_KEY}"
      }
    },
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

Some clients do not expand environment variables inside JSON values. In
that case, use the client's secret or header management UI and keep the
token out of checked-in files.

## Client-specific submissions

When a client or marketplace requires a server URL, use the corresponding
`server.json` file as the source of truth. Do not create a second endpoint,
server name, or product description for the same server.

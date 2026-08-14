# GrapeCity MCP

Official Model Context Protocol (MCP) servers from GrapeCity Software.

This repository is the public source of truth for GrapeCity MCP server
metadata, integration examples, and marketplace submission information.
The MCP servers are hosted by GrapeCity and are accessed over
Streamable HTTP; this repository does not contain proprietary product
implementations.

## Available servers

<!-- mcp-name: cn.com.grapecity/gcexcel -->

### GrapeCity GcExcel

Use GcExcel MCP for GcExcel documentation, examples, and product
assistance.

- Registry name: `cn.com.grapecity/gcexcel`
- Endpoint: `https://mcp.grapecity.com.cn/mcp/gcexcel`
- Transport: Streamable HTTP
- Authentication: GrapeCity MCP token sent in the `token` header

See [the GcExcel server guide](servers/gcexcel/README.md).

<!-- mcp-name: cn.com.grapecity/spreadjs -->

### GrapeCity SpreadJS

Use SpreadJS MCP for SpreadJS documentation, examples, and product
assistance.

- Registry name: `cn.com.grapecity/spreadjs`
- Endpoint: `https://mcp.grapecity.com.cn/mcp/spreadjs`
- Transport: Streamable HTTP
- Authentication: GrapeCity MCP token sent in the `token` header

See [the SpreadJS server guide](servers/spreadjs/README.md).

## Quick start

Add one or both servers to an MCP client that supports remote Streamable
HTTP servers. Use the following shape and replace the placeholder with your
GrapeCity MCP token:

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

Client-specific notes are in [docs/integration.md](docs/integration.md).

## Repository contents

- `servers/`: canonical server metadata and user-facing setup guides.
- `docs/`: architecture, integration, release, and marketplace notes.
- `scripts/`: dependency-free validation scripts used by CI.
- `.github/workflows/`: pull request and metadata validation workflows.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull
request. Security reports should follow [SECURITY.md](SECURITY.md).

## License

The repository metadata and documentation are licensed under the MIT License.
GrapeCity product names, documentation, hosted services, and trademarks
remain subject to their applicable GrapeCity terms.

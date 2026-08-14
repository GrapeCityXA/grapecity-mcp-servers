# Marketplace submission guide

The official MCP Registry entries already use these stable server names:

- `cn.com.grapecity/gcexcel`
- `cn.com.grapecity/spreadjs`

For marketplaces that accept a product-specific README, use:

- SpreadJS: `https://github.com/GrapeCityXA/grapecity-mcp-servers/blob/main/servers/spreadjs/README.md`
- GcExcel: `https://github.com/GrapeCityXA/grapecity-mcp-servers/blob/main/servers/gcexcel/README.md`

For Chinese-language marketplaces such as ModelScope, use the localized
README when the form accepts a full README URL:

- SpreadJS: `https://github.com/GrapeCityXA/grapecity-mcp-servers/blob/main/servers/spreadjs/README.zh-CN.md`
- GcExcel: `https://github.com/GrapeCityXA/grapecity-mcp-servers/blob/main/servers/gcexcel/README.zh-CN.md`

Use the repository metadata under `servers/` when submitting to another MCP
directory or client marketplace. The submission packet should contain:

1. The server's `name`, `title`, `description`, and current `version`.
2. The server URL from `server.json`.
3. The authentication requirement: `token: <MCP token>`.
4. A link to this repository and the server-specific README.
5. A support contact and a link to the security policy.

## Submission checklist

- [ ] Confirm the target marketplace supports remote Streamable HTTP servers.
- [ ] Confirm the marketplace accepts authenticated remote servers.
- [ ] Copy the exact Registry name from `server.json`.
- [ ] Copy the exact endpoint from `server.json`.
- [ ] Do not paste a real MCP key into a marketplace form unless the form
      explicitly documents secure secret handling.
- [ ] Add the marketplace listing URL to the release record.
- [ ] Test the published listing with a fresh client session.

## Keeping listings consistent

When a server endpoint, authentication method, description, or version
changes, update the corresponding `server.json` and README in the same pull
request. Re-submit or update every marketplace listing from that change.

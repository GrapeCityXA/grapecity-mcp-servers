# Release and ownership

## GitHub ownership

Create the repository inside the official GrapeCity organization, not from a
personal account. The intended repository URL for this project is:

`https://github.com/GrapeCityXA/grapecity-mcp-servers`

Before the first push, an organization administrator should:

- create the empty repository under the company organization;
- enable branch protection for `main`;
- require pull requests and the CI check before merging;
- assign at least two company maintainers;
- enable secret scanning and Dependabot alerts where available;
- configure the repository's security contact.

## Versioning

The Registry version is stored independently in each server's `server.json`.
Use a prerelease such as `1.0.0-beta.2` when changing an existing beta
listing. Use a stable version such as `1.0.0` only after the product and
support teams approve the public release.

## Publishing a metadata change

1. Update the relevant `server.json` and server README together.
2. Run `npm run check`.
3. Open a pull request against `main`.
4. Review endpoint, authentication, and customer-facing wording.
5. Merge after CI and company review pass.
6. Update the official MCP Registry and each external marketplace listing.
7. Record the published listing URLs in the pull request.

No API keys belong in GitHub Actions variables, committed files, examples, or
issue comments unless a platform explicitly provides a protected secret
field for them.

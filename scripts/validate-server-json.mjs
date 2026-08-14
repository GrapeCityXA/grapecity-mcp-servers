import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const serversRoot = path.join(root, "servers");
const expectedRepository = "https://github.com/GrapeCityXA/grapecity-mcp-servers";
const namePattern = /^cn\.com\.grapecity\/[a-z0-9-]+$/;
const versionPattern = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

function fail(message) {
  throw new Error(message);
}

const entries = (await fs.readdir(serversRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (entries.length === 0) {
  fail("No server directories found.");
}

const names = new Set();

for (const entry of entries) {
  const directory = path.join(serversRoot, entry);
  const metadataPath = path.join(directory, "server.json");
  const readmePath = path.join(directory, "README.md");
  const metadata = JSON.parse(await fs.readFile(metadataPath, "utf8"));
  const readme = await fs.readFile(readmePath, "utf8");

  for (const key of ["name", "title", "description", "version", "repository", "remotes"]) {
    if (!(key in metadata)) {
      fail(`${metadataPath} is missing "${key}".`);
    }
  }

  if (!namePattern.test(metadata.name)) {
    fail(`${metadataPath} has an invalid Registry name: ${metadata.name}`);
  }
  if (names.has(metadata.name)) {
    fail(`Duplicate Registry name: ${metadata.name}`);
  }
  names.add(metadata.name);

  if (!versionPattern.test(metadata.version)) {
    fail(`${metadataPath} has an invalid version: ${metadata.version}`);
  }
  if (
    metadata.repository.url !== expectedRepository ||
    metadata.repository.source !== "github" ||
    metadata.repository.subfolder !== `servers/${entry}`
  ) {
    fail(`${metadataPath} must point to the official GitHub repository.`);
  }
  if (!Array.isArray(metadata.remotes) || metadata.remotes.length !== 1) {
    fail(`${metadataPath} must define exactly one remote.`);
  }

  const [remote] = metadata.remotes;
  if (remote.type !== "streamable-http" || !remote.url.startsWith("https://mcp.grapecity.com.cn/mcp/")) {
    fail(`${metadataPath} must use a GrapeCity Streamable HTTP endpoint.`);
  }

  if (!readme.includes(`<!-- mcp-name: ${metadata.name} -->`)) {
    fail(`${readmePath} is missing its MCP Registry name comment.`);
  }

  console.log(`ok ${metadata.name} ${metadata.version}`);
}

console.log(`Validated ${entries.length} server metadata file(s).`);

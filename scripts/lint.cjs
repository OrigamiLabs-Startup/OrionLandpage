const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const requiredFiles = ["index.html", "styles.css", "script.js"];
const errors = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function assertFile(relativePath, source) {
  if (!exists(relativePath)) {
    errors.push(`${source} references missing file: ${relativePath}`);
  }
}

for (const file of requiredFiles) {
  assertFile(file, "project");
}

if (!errors.length) {
  execFileSync(process.execPath, ["--check", path.join(root, "script.js")], { stdio: "inherit" });

  const html = read("index.html");
  const css = read("styles.css");

  const openBraces = (css.match(/{/g) || []).length;
  const closeBraces = (css.match(/}/g) || []).length;
  if (openBraces !== closeBraces) {
    errors.push(`styles.css has unbalanced braces: ${openBraces} opening, ${closeBraces} closing`);
  }

  const importMapMatch = html.match(/<script\s+type="importmap">\s*([\s\S]*?)\s*<\/script>/i);
  if (importMapMatch) {
    try {
      JSON.parse(importMapMatch[1]);
    } catch (error) {
      errors.push(`index.html import map is invalid JSON: ${error.message}`);
    }
  }

  for (const match of html.matchAll(/<(?:script|link|img)\b[^>]*(?:src|href)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (/^(https?:|mailto:|#)/i.test(reference)) continue;
    if (reference === "styles.css" || reference === "script.js" || reference.startsWith("assets/")) {
      assertFile(reference, "index.html");
    }
  }

  for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/gi)) {
    const reference = match[1];
    if (/^(data:|https?:)/i.test(reference)) continue;
    assertFile(reference, "styles.css");
  }
}

if (errors.length) {
  console.error("Lint failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Lint passed.");

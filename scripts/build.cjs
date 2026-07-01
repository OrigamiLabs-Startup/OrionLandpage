const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist");
const files = ["index.html", "styles.css", "script.js"];
const assetDir = path.join(root, "assets");

function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(outDir, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

if (!outDir.startsWith(root)) {
  throw new Error(`Refusing to write outside project root: ${outDir}`);
}

execFileSync(process.execPath, [path.join(root, "scripts", "lint.cjs")], { cwd: root, stdio: "inherit" });

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  copyFile(file);
}

copyDir(assetDir, path.join(outDir, "assets"));

console.log(`Build complete: ${path.relative(root, outDir)}`);

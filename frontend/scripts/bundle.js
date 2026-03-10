const fs = require("fs");
const path = require("path");

const distDir = path.resolve(process.cwd(), "build");

// Java resources
copyToTarget(path.resolve(process.cwd(), "../core/src/main/resources/web"));
// Pumpkin resources
copyToTarget(path.resolve(process.cwd(), "../pumpkin/resources/web"));

function copyToTarget(targetDir) {
  fs.rmSync(targetDir, { recursive: true });
  fs.mkdirSync(targetDir);
  fs.cpSync(distDir, targetDir, { recursive: true });
}

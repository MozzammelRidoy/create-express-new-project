#!/usr/bin/env node
const { spawn } = require("child_process");

const args = process.argv.slice(2);

// Run express-project-builder directly
const child = spawn(
  "node",
  [require.resolve("express-project-builder/dist/bin/index.js"), ...args],
  {
    stdio: "inherit",
  }
);

child.on("exit", (code) => process.exit(code));
child.on("error", (err) => {
  console.error("❌ Failed to run express-project-builder:", err);
  process.exit(1);
});

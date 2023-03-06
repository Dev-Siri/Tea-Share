import { existsSync } from "node:fs";
import fs from "node:fs/promises";

const removePolyfills = async () => {
  const POLYFILLS_FILE = "polyfills-c67a75d1b6f99dc8.js";
  const POLYFILLS_PATH = `.next/static/chunks/${POLYFILLS_FILE}`;

  if (existsSync(POLYFILLS_PATH)) await fs.rm(POLYFILLS_PATH);

  console.log("✅ Removed Polyfills");
};

export default removePolyfills;

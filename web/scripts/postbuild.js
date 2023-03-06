import removePolyfills from "./remove-polyfills.js";

const postbuild = async () => {
  const startTime = new Date().getSeconds();

  await removePolyfills();

  const endTime = new Date().getSeconds();
  const buildTime = startTime - endTime;

  return buildTime;
};

try {
  console.log("🏗 Running PostBuild...\n");
  const buildTime = await postbuild();
  console.log(`\n✨ PostBuild done in ${buildTime}s.`);
} catch (error) {
  console.error(`❌ PostBuild failed with error:\n${error.message}`);
}

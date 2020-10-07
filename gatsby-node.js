exports.onPostBuild = () => {
    const cp = require("child_process");
    cp.execSync("npm run build-cv");
  };
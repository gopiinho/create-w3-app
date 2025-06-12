import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import { addPackageScript } from "~/utils/addPackageScript.js";

export const biomeInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["@biomejs/biome"],
    devMode: true,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");
  const biomeConfigSrc = path.join(extrasDir, "config/biome.jsonc");
  const biomeConfigDest = path.join(projectDir, "biome.jsonc");

  fs.copySync(biomeConfigSrc, biomeConfigDest);

  addPackageScript({
    projectDir,
    scripts: {
      "biome:unsafe": "biome check --write --unsafe .",
      "biome:write": "biome check --write .",
      biome: "biome check .",
    },
  });
};

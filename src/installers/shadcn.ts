import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const shadcnInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: [
      "class-variance-authority",
      "clsx",
      "lucide-react",
      "tailwind-merge",
    ],
    devMode: false,
  });

  addPackageDependency({
    projectDir,
    dependencies: ["tw-animate-css"],
    devMode: true,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const conponentsConfigSrc = path.join(extrasDir, "config/components.json");
  const conponentsConfigDest = path.join(projectDir, "components.json");

  const utilsSrc = path.join(extrasDir, "src/lib/utils.ts");
  const utilsDest = path.join(projectDir, "src/lib/utils.ts");

  const cssSrc = path.join(extrasDir, "src/styles/shadcn-globals.css");
  const cssDest = path.join(projectDir, "src/styles/globals.css");

  fs.copySync(conponentsConfigSrc, conponentsConfigDest);
  fs.copySync(utilsSrc, utilsDest);
  fs.copySync(cssSrc, cssDest);
};

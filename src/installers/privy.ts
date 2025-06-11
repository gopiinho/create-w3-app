import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const privyInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["@privy-io/react-auth"],
    devMode: false,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const providerSrc = path.join(extrasDir, "src/provider/privy-provider.tsx");
  const providerDest = path.join(
    projectDir,
    "src/components/provider/privy-provider.tsx"
  );

  fs.copySync(providerSrc, providerDest);
};

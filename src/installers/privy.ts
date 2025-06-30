import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const privyInstaller: Installer = ({ projectDir, packages }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["@privy-io/react-auth"],
    devMode: false,
  });

  const usingWagmi = packages?.wagmi?.inUse === true;

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const providerSrc = usingWagmi
    ? path.join(extrasDir, "src/provider/privy-wagmi-provider.tsx")
    : path.join(extrasDir, "src/provider/privy-provider.tsx");
  const providerDest = path.join(
    projectDir,
    "src/components/provider/privy-provider.tsx"
  );

  const privyConfigSrc = path.join(extrasDir, "config/privy.ts");
  const privyConfigDest = path.join(projectDir, "src/config/privy.ts");
  fs.copySync(privyConfigSrc, privyConfigDest);

  fs.copySync(providerSrc, providerDest);
};

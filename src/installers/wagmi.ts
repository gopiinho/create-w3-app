import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const wagmiInstaller: Installer = ({ projectDir, packages }) => {
  const usingPrivy = packages?.privy?.inUse === true;
  const usingRainbow = packages?.rainbow?.inUse === true;

  if (usingPrivy) {
    addPackageDependency({
      projectDir,
      dependencies: ["wagmi", "@privy-io/wagmi", "@tanstack/react-query"],
      devMode: false,
    });
  } else {
    addPackageDependency({
      projectDir,
      dependencies: ["viem", "wagmi", "@tanstack/react-query"],
      devMode: false,
    });
  }

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const wagmiConfigSrc = usingPrivy
    ? path.join(extrasDir, "config/wagmi-privy.ts")
    : path.join(extrasDir, "config/wagmi.ts");
  const wagmiConfigDest = path.join(projectDir, "src/config/wagmi.ts");

  const providerSrc = path.join(extrasDir, "src/provider/wagmi-provider.tsx");
  const providerDest = path.join(
    projectDir,
    "src/components/provider/wagmi-provider.tsx"
  );
  fs.copySync(providerSrc, providerDest);

  fs.copySync(wagmiConfigSrc, wagmiConfigDest);
  if (usingPrivy) {
    const wagmiConfigSrc = path.join(extrasDir, "config/wagmi-privy.ts");
    const wagmiConfigDest = path.join(projectDir, "src/config/wagmi.ts");
    fs.copySync(wagmiConfigSrc, wagmiConfigDest);
  }
  if (!usingRainbow && !usingPrivy) {
    const providerSrc = path.join(extrasDir, "src/provider/wagmi-provider.tsx");
    const providerDest = path.join(
      projectDir,
      "src/components/provider/wagmi-provider.tsx"
    );
    fs.copySync(providerSrc, providerDest);
  }
};

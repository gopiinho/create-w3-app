import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const rainbowInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: [
      "@rainbow-me/rainbowkit",
      "wagmi",
      "viem",
      "@tanstack/react-query",
    ],
    devMode: false,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const providerSrc = path.join(
    extrasDir,
    "src/components/provider/rainbow-provider.tsx"
  );
  const providerDest = path.join(
    projectDir,
    "src/components/provider/rainbow-provider.tsx"
  );

  const wagmiConfigSrc = path.join(extrasDir, "config/wagmi.ts");
  const wagmiConfigDest = path.join(projectDir, "wagmi.ts");

  fs.copySync(providerSrc, providerDest);
  fs.copySync(wagmiConfigSrc, wagmiConfigDest);
};

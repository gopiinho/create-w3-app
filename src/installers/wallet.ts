import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import type { AvailableDependencies } from "./dependencyVersionMap.js";

export const walletInstaller: Installer = ({ projectDir, packages }) => {
  const walletType = packages?.wallet?.type;

  if (!walletType || walletType === "none") return;

  const dependencies: AvailableDependencies[] = [];

  switch (walletType) {
    case "privy":
      dependencies.push("@privy-io/react-auth");
      break;
    case "rainbow":
      dependencies.push(
        "@rainbow-me/rainbowkit",
        "wagmi",
        "viem",
        "@tanstack/react-query"
      );
      break;
  }

  addPackageDependency({
    projectDir,
    dependencies,
    devMode: false,
  });

  // Copy wallet-specific configuration files
  const extrasDir = path.join(PKG_ROOT, "template/extras");
  const walletConfigSrc = path.join(
    extrasDir,
    `config/${walletType}.config.ts`
  );
  const walletConfigDest = path.join(
    projectDir,
    `src/config/${walletType}.config.ts`
  );

  // Copy wallet-specific provider components
  const walletProviderSrc = path.join(
    extrasDir,
    `components/${walletType}Provider.tsx`
  );
  const walletProviderDest = path.join(
    projectDir,
    `src/components/${walletType}Provider.tsx`
  );

  fs.copySync(walletConfigSrc, walletConfigDest);
  fs.copySync(walletProviderSrc, walletProviderDest);
};

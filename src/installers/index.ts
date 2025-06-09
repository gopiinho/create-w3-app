import { tailwindInstaller } from "~/installers/tailwind.js";
import { type PackageManager } from "~/utils/getUserPkgManager.js";
import { envVariablesInstaller } from "./envVars.js";
import { dynamicEslintInstaller } from "./eslint.js";
import { walletInstaller } from "./wallet.js";

// Turning this into a const allows the list to be iterated over for programmatically creating prompt options
// Should increase extensibility in the future
export const availablePackages = [
  "tailwind",
  "wallet",
  "envVariables",
  "eslint",
] as const;
export type AvailablePackages = (typeof availablePackages)[number];

export interface InstallerOptions {
  projectDir: string;
  pkgManager: PackageManager;
  noInstall: boolean;
  packages?: PkgInstallerMap;
  appRouter?: boolean;
  projectName: string;
  scopedAppName: string;
}

export type Installer = (opts: InstallerOptions) => void;

export type PkgInstallerMap = {
  tailwind: {
    inUse: boolean;
    installer: Installer;
  };
  wallet: {
    inUse: boolean;
    type: "privy" | "rainbow" | "none";
    installer: Installer;
  };
  envVariables: {
    inUse: boolean;
    installer: Installer;
  };
  eslint: {
    inUse: boolean;
    installer: Installer;
  };
};

export const buildPkgInstallerMap = (
  packages: AvailablePackages[]
): PkgInstallerMap => ({
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller,
  },
  wallet: {
    type: "none",
    inUse: packages.includes("wallet"),
    installer: walletInstaller,
  },
  envVariables: {
    inUse: true,
    installer: envVariablesInstaller,
  },
  eslint: {
    inUse: packages.includes("eslint"),
    installer: dynamicEslintInstaller,
  },
});

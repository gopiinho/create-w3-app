import { privyInstaller } from "~/installers/privy.js";
import { rainbowInstaller } from "~/installers/rainbow.js";
import { shadcnInstaller } from "~/installers/shadcn.js";
import { tailwindInstaller } from "~/installers/tailwind.js";
import { wagmiInstaller } from "~/installers/wagmi.js";
import { type PackageManager } from "~/utils/getUserPkgManager.js";
import { biomeInstaller } from "./biome.js";
import { envVariablesInstaller } from "./envVars.js";
import { dynamicEslintInstaller } from "./eslint.js";

// Turning this into a const allows the list to be iterated over for programmatically creating prompt options
// Should increase extensibility in the future
export const availablePackages = [
  "tailwind",
  "shadcn",
  "privy",
  "rainbow",
  "wagmi",
  "envVariables",
  "eslint",
  "biome",
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

export type PkgInstallerMap = Record<
  AvailablePackages,
  {
    inUse: boolean;
    installer: Installer;
  }
>;
export const buildPkgInstallerMap = (
  packages: AvailablePackages[]
): PkgInstallerMap => ({
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller,
  },
  shadcn: {
    inUse: packages.includes("shadcn"),
    installer: shadcnInstaller,
  },
  privy: {
    inUse: packages.includes("privy"),
    installer: privyInstaller,
  },
  rainbow: {
    inUse: packages.includes("rainbow"),
    installer: rainbowInstaller,
  },
  wagmi: {
    inUse: packages.includes("wagmi"),
    installer: wagmiInstaller,
  },
  envVariables: {
    inUse: true,
    installer: envVariablesInstaller,
  },
  eslint: {
    inUse: packages.includes("eslint"),
    installer: dynamicEslintInstaller,
  },
  biome: {
    inUse: packages.includes("biome"),
    installer: biomeInstaller,
  },
});

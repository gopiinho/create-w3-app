import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type InstallerOptions } from "~/installers/index.js";

type SelectBoilerplateProps = Required<
  Pick<InstallerOptions, "packages" | "projectDir">
>;
// This generates the _app.tsx file that is used to render the app
export const selectAppFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const appFileDir = path.join(PKG_ROOT, "template/extras/src/pages/_app");

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.wallet.type === "privy";
  const usingRainbow = packages.wallet.type === "rainbow";

  let appFile = "base.tsx";
  if (usingPrivy && usingTw) {
    appFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    appFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    appFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    appFile = "with-rbow.tsx";
  }

  const appSrc = path.join(appFileDir, appFile);
  const appDest = path.join(projectDir, "src/pages/_app.tsx");
  fs.copySync(appSrc, appDest);
};

// Similar to _app, but for app router
export const selectLayoutFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const layoutFileDir = path.join(PKG_ROOT, "template/extras/src/app/layout");

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.wallet.type === "privy";
  const usingRainbow = packages.wallet.type === "rainbow";

  let layoutFile = "base.tsx";
  if (usingPrivy && usingTw) {
    layoutFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    layoutFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    layoutFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    layoutFile = "with-rbow.tsx";
  }

  const appSrc = path.join(layoutFileDir, layoutFile);
  const appDest = path.join(projectDir, "src/app/layout.tsx");
  fs.copySync(appSrc, appDest);
};

// This selects the proper index.tsx to be used that showcases the chosen tech
export const selectIndexFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/extras/src/pages/index");

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.wallet.type === "privy";
  const usingRainbow = packages.wallet.type === "rainbow";

  let indexFile = "base.tsx";
  if (usingPrivy && usingTw) {
    indexFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    indexFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    indexFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    indexFile = "with-rbow.tsx";
  }

  const indexSrc = path.join(indexFileDir, indexFile);
  const indexDest = path.join(projectDir, "src/pages/index.tsx");
  fs.copySync(indexSrc, indexDest);
};

// Similar to index, but for app router
export const selectPageFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/extras/src/app/page");

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.wallet.type === "privy";
  const usingRainbow = packages.wallet.type === "rainbow";

  let indexFile = "base.tsx";
  if (usingPrivy && usingTw) {
    indexFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    indexFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    indexFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    indexFile = "with-rbow.tsx";
  }

  const indexSrc = path.join(indexFileDir, indexFile);
  const indexDest = path.join(projectDir, "src/app/page.tsx");
  fs.copySync(indexSrc, indexDest);
};

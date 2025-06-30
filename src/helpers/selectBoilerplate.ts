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
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let appFile = "base.tsx";
  if (usingPrivy && usingTw) {
    appFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    appFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    appFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    appFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    appFile = "with-tw.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow) {
    appFile = "with-wagmi.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow && !usingTw) {
    appFile = "with-wagmi.tsx";
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
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let layoutFile = "base.tsx";
  if (usingPrivy && usingTw) {
    layoutFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    layoutFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    layoutFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    layoutFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    layoutFile = "with-tw.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow) {
    layoutFile = "with-wagmi.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow && !usingTw) {
    layoutFile = "with-wagmi.tsx";
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
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let indexFile = "base.tsx";
  if (usingPrivy && usingTw) {
    indexFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    indexFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    indexFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    indexFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    indexFile = "with-tw.tsx";
  } else if (usingWagmi && usingTw && !usingPrivy && !usingRainbow) {
    indexFile = "with-wagmi-tw.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow && !usingTw) {
    indexFile = "with-wagmi.tsx";
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
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let pageFile = "base.tsx";
  if (usingPrivy && usingTw) {
    pageFile = "with-privy-tw.tsx";
  } else if (usingPrivy && !usingTw) {
    pageFile = "with-privy.tsx";
  } else if (usingRainbow && usingTw) {
    pageFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    pageFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    pageFile = "with-tw.tsx";
  } else if (usingWagmi && usingTw && !usingPrivy && !usingRainbow) {
    pageFile = "with-wagmi-tw.tsx";
  } else if (usingWagmi && !usingPrivy && !usingRainbow && !usingTw) {
    pageFile = "with-wagmi.tsx";
  }

  const indexSrc = path.join(indexFileDir, pageFile);
  const indexDest = path.join(projectDir, "src/app/page.tsx");
  fs.copySync(indexSrc, indexDest);
};

export const selectConnectComponentApp = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(
    PKG_ROOT,
    "template/extras/src/app/components"
  );

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let componentFile = "base.tsx";
  if (usingPrivy && usingTw) {
    componentFile = "with-privy-tw.tsx";
  } else if (usingPrivy && usingTw && usingWagmi) {
    componentFile = "with-privy-wagmi-tw.tsx";
  } else if (usingPrivy && usingWagmi) {
    componentFile = "with-privy-wagmi.tsx";
  } else if (usingRainbow && usingTw) {
    componentFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    componentFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    componentFile = "with-tw.tsx";
  }

  const indexSrc = path.join(indexFileDir, componentFile);
  const indexDest = path.join(projectDir, "src/components/connect.tsx");
  fs.copySync(indexSrc, indexDest);
};

export const selectConnectComponentPage = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(
    PKG_ROOT,
    "template/extras/src/pages/components"
  );

  const usingTw = packages.tailwind.inUse;
  const usingPrivy = packages.privy.inUse;
  const usingRainbow = packages.rainbow.inUse;
  const usingWagmi = packages.wagmi.inUse;

  let componentFile = "base.tsx";
  if (usingPrivy && usingTw) {
    componentFile = "with-privy-tw.tsx";
  } else if (usingPrivy && usingTw && usingWagmi) {
    componentFile = "with-privy-wagmi-tw.tsx";
  } else if (usingPrivy && usingWagmi) {
    componentFile = "with-privy-wagmi.tsx";
  } else if (usingRainbow && usingTw) {
    componentFile = "with-rbow-tw.tsx";
  } else if (usingRainbow && !usingTw) {
    componentFile = "with-rbow.tsx";
  } else if (usingTw && !usingPrivy && !usingRainbow) {
    componentFile = "with-tw.tsx";
  }

  const indexSrc = path.join(indexFileDir, componentFile);
  const indexDest = path.join(projectDir, "src/components/connect.tsx");
  fs.copySync(indexSrc, indexDest);
};

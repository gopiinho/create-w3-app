import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/constants.js";
import { type Installer } from "~/installers/index.js";

export const envVariablesInstaller: Installer = ({ projectDir, packages }) => {
  const usingPrivy = packages?.privy.inUse;
  const usingRainbow = packages?.rainbow.inUse;

  let envFile = "";
  if (usingPrivy) {
    envFile = "with-privy.js";
  } else if (usingRainbow) {
    envFile = "with-rbow.js";
  }

  if (envFile !== "") {
    const envSchemaSrc = path.join(
      PKG_ROOT,
      "template/extras/src/env",
      envFile
    );
    const envSchemaDest = path.join(projectDir, "src/env.js");
    fs.copyFileSync(envSchemaSrc, envSchemaDest);
  }

  const envDest = path.join(projectDir, ".env");
  const envExampleDest = path.join(projectDir, ".env.example");

  const envContent = getEnvContent(usingPrivy!, usingRainbow!);
  const exampleEnvContent = getExampleEnvContent();

  fs.writeFileSync(envDest, envContent, "utf-8");
  fs.writeFileSync(envExampleDest, exampleEnvContent, "utf-8");
};

const getEnvContent = (usingPrivy: boolean, usingRainbow: boolean) => {
  let content = `
# When adding additional environment variables, the schema in "/src/env.js"
# should be updated accordingly.
`
    .trim()
    .concat("\n\n");

  if (usingPrivy) {
    content += `# Privy Configuration
NEXT_PUBLIC_PRIVY_APP_ID=""

`;
  }

  if (usingRainbow) {
    content += `# Rainbow Kit Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=""

`;
  }

  if (!usingPrivy && !usingRainbow) {
    content += `# Example:
# SERVERVAR="foo"
# NEXT_PUBLIC_CLIENTVAR="bar"
`;
  }

  return content;
};

const getExampleEnvContent = () => {
  return `
# Since the ".env" file is gitignored, you can use the ".env.example" file to
# build a new ".env" file when you clone the repo. Keep this file up-to-date
# when you add new variables to \`.env\`.

# This file will be committed to version control, so make sure not to have any
# secrets in it. If you are cloning this repo, create a copy of this file named
# ".env" and populate it with your secrets.

# When adding additional environment variables, the schema in "/src/env.js"
# should be updated accordingly.

# Privy Configuration (if using Privy)
NEXT_PUBLIC_PRIVY_APP_ID=""
PRIVY_APP_SECRET=""

# Rainbow Kit Configuration (if using Rainbow)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=""
`
    .trim()
    .concat("\n");
};

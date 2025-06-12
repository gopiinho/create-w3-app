import path from "path";
import fs from "fs-extra";

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

  const envDest = path.join(projectDir, ".env");
  const envExampleDest = path.join(projectDir, ".env.example");

  const envContent = getEnvContent(usingPrivy!, usingRainbow!);
  const exampleEnvContent = getExampleEnvContent();

  fs.writeFileSync(envDest, envContent, "utf-8");
  fs.writeFileSync(envExampleDest, exampleEnvContent, "utf-8");
};

const getEnvContent = (usingPrivy: boolean, usingRainbow: boolean) => {
  let content = `
`
    .trim()
    .concat("\n\n");
  if (usingPrivy) {
    content += `# Privy Configuration
NODE_ENV=""
NEXT_PUBLIC_PRIVY_APP_ID=""

`;
  }
  if (usingRainbow) {
    content += `# Rainbow Kit Configuration
NODE_ENV=""
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=""

`;
  }
  if (!usingPrivy && !usingRainbow) {
    content += `# Example:
# NODE_ENV=""
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

NODE_ENV=""

# Privy Configuration (if using Privy)
NEXT_PUBLIC_PRIVY_APP_ID=""
PRIVY_APP_SECRET=""

# Rainbow Kit Configuration (if using Rainbow)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=""
`
    .trim()
    .concat("\n");
};

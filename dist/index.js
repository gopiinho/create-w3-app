#!/usr/bin/env node

// src/index.ts
import path14 from "path";
import { execa as execa4 } from "execa";
import fs13 from "fs-extra";

// src/cli/index.ts
import * as p from "@clack/prompts";
import chalk2 from "chalk";
import { Command } from "commander";

// src/constants.ts
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var distPath = path.dirname(__filename);
var PKG_ROOT = path.join(distPath, "../");
var TITLE_TEXT = `
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u2588\u2588\u2551    \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2551 \u2588\u2588\u2554\u255D\u2588\u2588\u2551\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D
\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2588\u2588\u2588\u2554\u255D    \u2588\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2551   \u2588\u2588\u2551   
\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u255D      \u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557 \u255A\u2550\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2554\u2550\u2588\u2588\u2557 \u2588\u2588\u2551   \u2588\u2588\u2551   
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D    \u2588\u2588\u2551  \u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551   
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D     \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D     \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D   \u255A\u2550\u255D   
                                                                                                               
`;
var DEFAULT_APP_NAME = "my-web3-kit";
var CREATE_WEB3_KIT = "create-web3-kit";

// src/utils/getKitVersion.ts
import path2 from "path";
import fs from "fs-extra";
var getVersion = () => {
  const packageJsonPath = path2.join(PKG_ROOT, "package.json");
  const packageJsonContent = fs.readJSONSync(packageJsonPath);
  return packageJsonContent.version ?? "1.0.0";
};

// src/utils/getUserPkgManager.ts
var getUserPkgManager = () => {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith("yarn")) {
      return "yarn";
    } else if (userAgent.startsWith("pnpm")) {
      return "pnpm";
    } else if (userAgent.startsWith("bun")) {
      return "bun";
    } else {
      return "npm";
    }
  } else {
    return "npm";
  }
};

// src/utils/isTTYError.ts
var IsTTYError = class extends Error {
  constructor(msg) {
    super(msg);
  }
};

// src/utils/logger.ts
import chalk from "chalk";
var logger = {
  error(...args) {
    console.log(chalk.red(...args));
  },
  warn(...args) {
    console.log(chalk.yellow(...args));
  },
  info(...args) {
    console.log(chalk.cyan(...args));
  },
  success(...args) {
    console.log(chalk.green(...args));
  }
};

// src/utils/removeTrailingSlash.ts.ts
var removeTrailingSlash = (input) => {
  if (input.length > 1 && input.endsWith("/")) {
    input = input.slice(0, -1);
  }
  return input;
};

// src/utils/validateAppName.ts
var validationRegExp = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
var validateAppName = (rawInput) => {
  const input = removeTrailingSlash(rawInput);
  const paths = input.split("/");
  const indexOfDelimiter = paths.findIndex((p4) => p4.startsWith("@"));
  let appName = paths[paths.length - 1];
  if (paths.findIndex((p4) => p4.startsWith("@")) !== -1) {
    appName = paths.slice(indexOfDelimiter).join("/");
  }
  if (input === "." || validationRegExp.test(appName ?? "")) {
    return;
  } else {
    return "App name must consist of only lowercase alphanumeric characters, '-', and '_'";
  }
};

// src/utils/validateImportAlias.ts
var validateImportAlias = (input) => {
  if (input.startsWith(".") || input.startsWith("/")) {
    return "Import alias can't start with '.' or '/'";
  }
  return;
};

// src/cli/index.ts
var defaultOptions = {
  appName: DEFAULT_APP_NAME,
  packages: ["tailwind", "eslint"],
  flags: {
    noGit: false,
    noInstall: false,
    default: false,
    CI: false,
    tailwind: false,
    importAlias: "~/",
    appRouter: false,
    eslint: false
  }
};
var runCli = async () => {
  const cliResults = defaultOptions;
  const program = new Command().name(CREATE_WEB3_KIT).description("A CLI for creating dApps with the web3-kit stack").argument(
    "[dir]",
    "The name of the application, as well as the name of the directory to create"
  ).option(
    "--noGit",
    "Explicitly tell the CLI to not initialize a new git repo in the project",
    false
  ).option(
    "--noInstall",
    "Explicitly tell the CLI to not run the package manager's install command",
    false
  ).option(
    "-y, --default",
    "Bypass the CLI and use all default options to bootstrap a new web3-kit app",
    false
  ).option("--CI", "Boolean value if we're running in CI", false).option(
    "--tailwind [boolean]",
    "Experimental: Boolean value if we should install Tailwind CSS. Must be used in conjunction with `--CI`.",
    (value) => !!value && value !== "false"
  ).option(
    "-i, --import-alias",
    "Explicitly tell the CLI to use a custom import alias",
    defaultOptions.flags.importAlias
  ).option(
    "--appRouter [boolean]",
    "Explicitly tell the CLI to use the new Next.js app router",
    (value) => !!value && value !== "false"
  ).option(
    "--eslint [boolean]",
    "Experimental: Boolean value if we should install eslint and prettier. Must be used in conjunction with `--CI`.",
    (value) => !!value && value !== "false"
  ).version(getVersion(), "-v, --version", "Display the version number").addHelpText(
    "afterAll",
    `
 The web3-kit stack was inspired by ${chalk2.hex("#E8DCFF").bold("create-web3-kit")}
      )} 
`
  ).parse(process.argv);
  if (process.env.npm_config_user_agent?.startsWith("yarn/3")) {
    logger.warn(`  WARNING: It looks like you are using Yarn 3. This is currently not supported,
    and likely to result in a crash. Please run create-web3-kit with another
    package manager such as pnpm, npm, or Yarn Classic.`);
  }
  const cliProvidedName = program.args[0];
  if (cliProvidedName) {
    cliResults.appName = cliProvidedName;
  }
  cliResults.flags = program.opts();
  if (cliResults.flags.CI) {
    cliResults.packages = [];
    if (cliResults.flags.tailwind)
      cliResults.packages.push("tailwind");
    if (cliResults.flags.eslint)
      cliResults.packages.push("eslint");
    if (cliResults.flags.default) {
      return cliResults;
    }
    try {
      if (process.env.TERM_PROGRAM?.toLowerCase().includes("mintty")) {
        logger.warn(`  WARNING: It looks like you are using MinTTY, which is non-interactive. This is most likely because you are
    using Git Bash. If that's that case, please use Git Bash from another terminal, such as Windows Terminal. Alternatively, you
    can provide the arguments from the CLI directly to skip the prompts.`);
        throw new IsTTYError("Non-interactive environment");
      }
      const pkgManager = getUserPkgManager();
      const project = await p.group(
        {
          ...!cliProvidedName && {
            name: () => p.text({
              message: "What will your project be called?",
              defaultValue: cliProvidedName,
              validate: validateAppName
            })
          },
          language: () => {
            return p.select({
              message: "Will you be using TypeScript or JavaScript?",
              options: [
                { value: "typescript", label: "TypeScript" },
                { value: "javascript", label: "JavaScript" }
              ],
              initialValue: "typescript"
            });
          },
          _: ({ results }) => results.language === "javascript" ? p.note(
            chalk2.redBright("Wrong answer, using TypeScript instead")
          ) : void 0,
          styling: () => {
            return p.confirm({
              message: "Will you be using Tailwind CSS for styling?"
            });
          },
          wallet: () => {
            return p.select({
              message: "Which wallet authentication solution would you like to use?",
              options: [
                { value: "none", label: "None" },
                { value: "privy", label: "Privy" },
                { value: "rainbow", label: "Rainbow Kit" }
              ],
              initialValue: "none"
            });
          },
          appRouter: () => {
            return p.confirm({
              message: "Would you like to use Next.js App Router?",
              initialValue: true
            });
          },
          linter: () => {
            return p.select({
              message: "Would you like to use ESLint and Prettier or Biome for linting and formatting?",
              options: [
                { value: "eslint", label: "ESLint/Prettier" },
                { value: "biome", label: "Biome" }
              ],
              initialValue: "eslint"
            });
          },
          ...!cliResults.flags.noGit && {
            git: () => {
              return p.confirm({
                message: "Should we initialize a Git repository and stage the changes?",
                initialValue: !defaultOptions.flags.noGit
              });
            }
          },
          ...!cliResults.flags.noInstall && {
            install: () => {
              return p.confirm({
                message: `Should we run '${pkgManager}` + (pkgManager === "yarn" ? `'?` : ` install' for you?`),
                initialValue: !defaultOptions.flags.noInstall
              });
            }
          },
          importAlias: () => {
            return p.text({
              message: "What import alias would you like to use?",
              defaultValue: defaultOptions.flags.importAlias,
              placeholder: defaultOptions.flags.importAlias,
              validate: validateImportAlias
            });
          }
        },
        {
          onCancel() {
            process.exit(1);
          }
        }
      );
      const packages = [];
      if (project.styling)
        packages.push("tailwind");
      if (project.linter === "eslint")
        packages.push("eslint");
      return {
        appName: project.name ?? cliResults.appName,
        packages,
        flags: {
          ...cliResults.flags,
          appRouter: project.appRouter ?? cliResults.flags.appRouter,
          noGit: !project.git || cliResults.flags.noGit,
          noInstall: !project.install || cliResults.flags.noInstall,
          importAlias: project.importAlias ?? cliResults.flags.importAlias
        }
      };
    } catch (err) {
      if (err instanceof IsTTYError) {
        logger.warn(`
    ${CREATE_WEB3_KIT} needs an interactive terminal to provide options`);
        const shouldContinue = await p.confirm({
          message: `Continue scaffolding a default web3-kit app?`,
          initialValue: true
        });
        if (!shouldContinue) {
          logger.info("Exiting...");
          process.exit(0);
        }
        logger.info(
          `Bootstrapping a default web3-kit app in ./${cliResults.appName}`
        );
        return cliResults;
      } else {
        throw err;
      }
    }
  }
  return cliResults;
};

// src/helpers/createProject.ts
import fs4 from "fs";
import path5 from "path";

// src/helpers/installPackages.ts
import chalk3 from "chalk";
import ora from "ora";
var installPackages = (options) => {
  const { packages } = options;
  logger.info("Adding boilerplate...");
  for (const [name, pkgOpts] of Object.entries(packages)) {
    if (pkgOpts.inUse) {
      const spinner = ora(`Boilerplating ${name}...`).start();
      pkgOpts.installer(options);
      spinner.succeed(
        chalk3.green(
          `Successfully setup boilerplate for ${chalk3.green.bold(name)}`
        )
      );
    }
  }
  logger.info("");
};

// src/helpers/scaffoldProject.ts
import path3 from "path";
import * as p2 from "@clack/prompts";
import chalk4 from "chalk";
import fs2 from "fs-extra";
import ora2 from "ora";
var scaffoldProject = async ({
  projectName,
  projectDir,
  pkgManager,
  noInstall
}) => {
  const srcDir = path3.join(PKG_ROOT, "template/base");
  if (!noInstall) {
    logger.info(`
Using: ${chalk4.cyan.bold(pkgManager)}
`);
  } else {
    logger.info("");
  }
  const spinner = ora2(`Scaffolding in: ${projectDir}...
`).start();
  if (fs2.existsSync(projectDir)) {
    if (fs2.readdirSync(projectDir).length === 0) {
      if (projectName !== ".")
        spinner.info(
          `${chalk4.cyan.bold(projectName)} exists but is empty, continuing...
`
        );
    } else {
      spinner.stopAndPersist();
      const overwriteDir = await p2.select({
        message: `${chalk4.redBright.bold("Warning:")} ${chalk4.cyan.bold(
          projectName
        )} already exists and isn't empty. How would you like to proceed?`,
        options: [
          {
            label: "Abort installation (recommended)",
            value: "abort"
          },
          {
            label: "Clear the directory and continue installation",
            value: "clear"
          },
          {
            label: "Continue installation and overwrite conflicting files",
            value: "overwrite"
          }
        ],
        initialValue: "abort"
      });
      if (p2.isCancel(overwriteDir) || overwriteDir === "abort") {
        spinner.fail("Aborting installation...");
        process.exit(1);
      }
      const confirmOverwriteDir = await p2.confirm({
        message: `Are you sure you want to ${overwriteDir === "clear" ? "clear the directory" : "overwrite conflicting files"}?`,
        initialValue: false
      });
      if (p2.isCancel(confirmOverwriteDir) || !confirmOverwriteDir) {
        spinner.fail("Aborting installation...");
        process.exit(1);
      }
      if (overwriteDir === "clear") {
        spinner.info(
          `Emptying ${chalk4.cyan.bold(projectName)} and creating web3-kit..
`
        );
        fs2.emptyDirSync(projectDir);
      }
    }
  }
  spinner.start();
  fs2.copySync(srcDir, projectDir);
  fs2.renameSync(
    path3.join(projectDir, "_gitignore"),
    path3.join(projectDir, ".gitignore")
  );
  const scaffoldedName = projectName === "." ? "App" : chalk4.cyan.bold(projectName);
  spinner.succeed(
    `${scaffoldedName} ${chalk4.green("scaffolded successfully!")}
`
  );
};

// src/helpers/selectBoilerplate.ts
import path4 from "path";
import fs3 from "fs-extra";
var selectAppFile = ({
  projectDir,
  packages
}) => {
  const appFileDir = path4.join(PKG_ROOT, "template/extras/src/pages/_app");
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
  const appSrc = path4.join(appFileDir, appFile);
  const appDest = path4.join(projectDir, "src/pages/_app.tsx");
  fs3.copySync(appSrc, appDest);
};
var selectLayoutFile = ({
  projectDir,
  packages
}) => {
  const layoutFileDir = path4.join(PKG_ROOT, "template/extras/src/app/layout");
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
  const appSrc = path4.join(layoutFileDir, layoutFile);
  const appDest = path4.join(projectDir, "src/app/layout.tsx");
  fs3.copySync(appSrc, appDest);
};
var selectIndexFile = ({
  projectDir,
  packages
}) => {
  const indexFileDir = path4.join(PKG_ROOT, "template/extras/src/pages/index");
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
  const indexSrc = path4.join(indexFileDir, indexFile);
  const indexDest = path4.join(projectDir, "src/pages/index.tsx");
  fs3.copySync(indexSrc, indexDest);
};
var selectPageFile = ({
  projectDir,
  packages
}) => {
  const indexFileDir = path4.join(PKG_ROOT, "template/extras/src/app/page");
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
  const indexSrc = path4.join(indexFileDir, indexFile);
  const indexDest = path4.join(projectDir, "src/app/page.tsx");
  fs3.copySync(indexSrc, indexDest);
};

// src/helpers/createProject.ts
var createProject = async ({
  projectName,
  scopedAppName,
  packages,
  noInstall,
  appRouter
}) => {
  const pkgManager = getUserPkgManager();
  const projectDir = path5.resolve(process.cwd(), projectName);
  await scaffoldProject({
    projectName,
    projectDir,
    pkgManager,
    scopedAppName,
    noInstall,
    appRouter
  });
  installPackages({
    projectName,
    scopedAppName,
    projectDir,
    pkgManager,
    packages,
    noInstall,
    appRouter
  });
  if (appRouter) {
    fs4.copyFileSync(
      path5.join(PKG_ROOT, "template/extras/config/next-config-appdir.js"),
      path5.join(projectDir, "next.config.js")
    );
    selectLayoutFile({ projectDir, packages });
    selectPageFile({ projectDir, packages });
  } else {
    selectAppFile({ projectDir, packages });
    selectIndexFile({ projectDir, packages });
  }
  if (!packages.tailwind.inUse) {
    const indexModuleCss = path5.join(
      PKG_ROOT,
      "template/extras/src/index.module.css"
    );
    const indexModuleCssDest = path5.join(
      projectDir,
      "src",
      appRouter ? "app" : "pages",
      "index.module.css"
    );
    fs4.copyFileSync(indexModuleCss, indexModuleCssDest);
  }
  return projectDir;
};

// src/helpers/git.ts
import { execSync } from "child_process";
import path6 from "path";
import * as p3 from "@clack/prompts";
import chalk5 from "chalk";
import { execa } from "execa";
import fs5 from "fs-extra";
import ora3 from "ora";
var isGitInstalled = (dir) => {
  try {
    execSync("git --version", { cwd: dir });
    return true;
  } catch {
    return false;
  }
};
var isRootGitRepo = (dir) => {
  return fs5.existsSync(path6.join(dir, ".git"));
};
var isInsideGitRepo = async (dir) => {
  try {
    await execa("git", ["rev-parse", "--is-inside-work-tree"], {
      cwd: dir,
      stdout: "ignore"
    });
    return true;
  } catch {
    return false;
  }
};
var getGitVersion = () => {
  const stdout = execSync("git --version").toString().trim();
  const gitVersionTag = stdout.split(" ")[2];
  const major = gitVersionTag?.split(".")[0];
  const minor = gitVersionTag?.split(".")[1];
  return { major: Number(major), minor: Number(minor) };
};
var getDefaultBranch = () => {
  const stdout = execSync("git config --global init.defaultBranch || echo main").toString().trim();
  return stdout;
};
var initializeGit = async (projectDir) => {
  logger.info("Initializing Git...");
  if (!isGitInstalled(projectDir)) {
    logger.warn("Git is not installed. Skipping Git initialization.");
    return;
  }
  const spinner = ora3("Creating a new git repo...\n").start();
  const isRoot = isRootGitRepo(projectDir);
  const isInside = await isInsideGitRepo(projectDir);
  const dirName = path6.parse(projectDir).name;
  if (isInside && isRoot) {
    spinner.stop();
    const overwriteGit = await p3.confirm({
      message: `${chalk5.redBright.bold(
        "Warning:"
      )} Git is already initialized in "${dirName}". Initializing a new git repository would delete the previous history. Would you like to continue anyways?`,
      initialValue: false
    });
    if (!overwriteGit) {
      spinner.info("Skipping Git initialization.");
      return;
    }
    fs5.removeSync(path6.join(projectDir, ".git"));
  } else if (isInside && !isRoot) {
    spinner.stop();
    const initializeChildGitRepo = await p3.confirm({
      message: `${chalk5.redBright.bold(
        "Warning:"
      )} "${dirName}" is already in a git worktree. Would you still like to initialize a new git repository in this directory?`,
      initialValue: false
    });
    if (!initializeChildGitRepo) {
      spinner.info("Skipping Git initialization.");
      return;
    }
  }
  try {
    const branchName = getDefaultBranch();
    const { major, minor } = getGitVersion();
    if (major < 2 || major == 2 && minor < 28) {
      await execa("git", ["init"], { cwd: projectDir });
      await execa("git", ["symbolic-ref", "HEAD", `refs/heads/${branchName}`], {
        cwd: projectDir
      });
    } else {
      await execa("git", ["init", `--initial-branch=${branchName}`], {
        cwd: projectDir
      });
    }
    await execa("git", ["add", "."], { cwd: projectDir });
    spinner.succeed(
      `${chalk5.green("Successfully initialized and staged")} ${chalk5.green.bold(
        "git"
      )}
`
    );
  } catch {
    spinner.fail(
      `${chalk5.bold.red(
        "Failed:"
      )} could not initialize git. Update git to the latest version!
`
    );
  }
};

// src/helpers/logNextSteps.ts
var logNextSteps = async ({
  projectName = DEFAULT_APP_NAME,
  packages,
  noInstall,
  projectDir
}) => {
  const pkgManager = getUserPkgManager();
  logger.info("Next steps:");
  if (projectName !== ".") {
    logger.info(`  cd ${projectName}`);
  }
  if (noInstall) {
    if (pkgManager === "yarn") {
      logger.info(`  ${pkgManager}`);
    } else {
      logger.info(`  ${pkgManager} install`);
    }
  }
  if (["npm", "bun"].includes(pkgManager)) {
    logger.info(`  ${pkgManager} run dev`);
  } else {
    logger.info(`  ${pkgManager} dev`);
  }
  if (!await isInsideGitRepo(projectDir) && !isRootGitRepo(projectDir)) {
    logger.info(`  git init`);
  }
  logger.info(`  git commit -m "initial commit"`);
};

// src/helpers/setImportAlias.ts
import fs6 from "fs";
import path7 from "path";
function replaceTextInFiles(directoryPath, search, replacement) {
  const files = fs6.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path7.join(directoryPath, file);
    if (fs6.statSync(filePath).isDirectory()) {
      replaceTextInFiles(filePath, search, replacement);
    } else {
      const data = fs6.readFileSync(filePath, "utf8");
      const updatedData = data.replace(new RegExp(search, "g"), replacement);
      fs6.writeFileSync(filePath, updatedData, "utf8");
    }
  });
}
var setImportAlias = (projectDir, importAlias) => {
  const normalizedImportAlias = importAlias.replace(/\*/g, "").replace(/[^/]$/, "$&/");
  replaceTextInFiles(projectDir, `~/`, normalizedImportAlias);
};

// src/installers/tailwind.ts
import path9 from "path";
import fs8 from "fs-extra";

// src/utils/addPackageDependency.ts
import path8 from "path";
import fs7 from "fs-extra";
import sortPackageJson from "sort-package-json";

// src/installers/dependencyVersionMap.ts
var dependencyVersionMap = {
  // TailwindCSS
  tailwindcss: "^4.0.15",
  postcss: "^8.5.3",
  "@tailwindcss/postcss": "^4.0.15",
  // eslint / prettier
  prettier: "^3.5.3",
  "@eslint/eslintrc": "^3.3.1",
  "prettier-plugin-tailwindcss": "^0.6.11",
  eslint: "^9.23.0",
  "eslint-config-next": "^15.2.3",
  "eslint-plugin-drizzle": "^0.2.3",
  "typescript-eslint": "^8.27.0",
  // Wallet packages
  "@privy-io/react-auth": "^2.4.14",
  "@rainbow-me/rainbowkit": "^2.2.6",
  "@tanstack/react-query": "^5.69.0",
  wagmi: "^2.15.6",
  viem: "^2.31.0"
};

// src/utils/addPackageDependency.ts
var addPackageDependency = (opts) => {
  const { dependencies, devMode, projectDir } = opts;
  const pkgJson = fs7.readJSONSync(
    path8.join(projectDir, "package.json")
  );
  dependencies.forEach((pkgName) => {
    const version = dependencyVersionMap[pkgName];
    if (devMode && pkgJson.devDependencies) {
      pkgJson.devDependencies[pkgName] = version;
    } else if (pkgJson.dependencies) {
      pkgJson.dependencies[pkgName] = version;
    }
  });
  const sortedPkgJson = sortPackageJson(pkgJson);
  fs7.writeJSONSync(path8.join(projectDir, "package.json"), sortedPkgJson, {
    spaces: 2
  });
};

// src/installers/tailwind.ts
var tailwindInstaller = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: ["tailwindcss", "postcss", "@tailwindcss/postcss"],
    devMode: true
  });
  const extrasDir = path9.join(PKG_ROOT, "template/extras");
  const postcssCfgSrc = path9.join(extrasDir, "config/postcss.config.js");
  const postcssCfgDest = path9.join(projectDir, "postcss.config.js");
  const cssSrc = path9.join(extrasDir, "src/styles/globals.css");
  const cssDest = path9.join(projectDir, "src/styles/globals.css");
  fs8.copySync(postcssCfgSrc, postcssCfgDest);
  fs8.copySync(cssSrc, cssDest);
};

// src/installers/envVars.ts
import crypto from "node:crypto";
import path10 from "path";
import fs9 from "fs-extra";
var envVariablesInstaller = ({ projectDir, packages }) => {
  const envContent = getEnvContent(packages?.wallet?.type);
  const envDest = path10.join(projectDir, ".env");
  const envExampleDest = path10.join(projectDir, ".env.example");
  const _exampleEnvContent = exampleEnvContent + envContent;
  const secret = Buffer.from(
    crypto.getRandomValues(new Uint8Array(32))
  ).toString("base64");
  const _envContent = envContent.replace(
    'AUTH_SECRET=""',
    `AUTH_SECRET="${secret}" # Generated by create-web3-kit.`
  );
  fs9.writeFileSync(envDest, _envContent, "utf-8");
  fs9.writeFileSync(envExampleDest, _exampleEnvContent, "utf-8");
};
var getEnvContent = (walletType) => {
  let content = `
# When adding additional environment variables, the schema in "/src/env.js"
# should be updated accordingly.
`.trim().concat("\n");
  if (walletType === "privy") {
    content += `
# Privy
NEXT_PUBLIC_PRIVY_APP_ID=""
PRIVY_APP_SECRET=""
`;
  } else if (walletType === "rainbow") {
    content += `
# Rainbow Kit
NEXT_PUBLIC_ALCHEMY_ID=""
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=""
`;
  }
  return content;
};
var exampleEnvContent = `
# Since the ".env" file is gitignored, you can use the ".env.example" file to
# build a new ".env" file when you clone the repo. Keep this file up-to-date
# when you add new variables to \`.env\`.

# This file will be committed to version control, so make sure not to have any
# secrets in it. If you are cloning this repo, create a copy of this file named
# ".env" and populate it with your secrets.
`.trim().concat("\n\n");

// src/installers/eslint.ts
import path12 from "path";
import fs11 from "fs-extra";

// src/utils/addPackageScript.ts
import path11 from "path";
import fs10 from "fs-extra";
import sortPackageJson2 from "sort-package-json";
var addPackageScript = (opts) => {
  const { scripts, projectDir } = opts;
  const packageJsonPath = path11.join(projectDir, "package.json");
  const packageJsonContent = fs10.readJSONSync(packageJsonPath);
  packageJsonContent.scripts = {
    ...packageJsonContent.scripts,
    ...scripts
  };
  const sortedPkgJson = sortPackageJson2(packageJsonContent);
  fs10.writeJSONSync(packageJsonPath, sortedPkgJson, {
    spaces: 2
  });
};

// src/installers/eslint.ts
var dynamicEslintInstaller = ({ projectDir, packages }) => {
  const devPackages = [
    "prettier",
    "eslint",
    "eslint-config-next",
    "typescript-eslint",
    "@eslint/eslintrc"
  ];
  if (packages?.tailwind.inUse) {
    devPackages.push("prettier-plugin-tailwindcss");
  }
  addPackageDependency({
    projectDir,
    dependencies: devPackages,
    devMode: true
  });
  const extrasDir = path12.join(PKG_ROOT, "template/extras");
  let prettierSrc;
  if (packages?.tailwind.inUse) {
    prettierSrc = path12.join(extrasDir, "config/_tailwind.prettier.config.js");
  } else {
    prettierSrc = path12.join(extrasDir, "config/_prettier.config.js");
  }
  const prettierDest = path12.join(projectDir, "prettier.config.js");
  fs11.copySync(prettierSrc, prettierDest);
  const pkgManager = getUserPkgManager();
  if (pkgManager === "pnpm") {
    const pnpmSrc = path12.join(extrasDir, "pnpm/_npmrc");
    fs11.copySync(pnpmSrc, path12.join(projectDir, ".npmrc"));
  }
  addPackageScript({
    projectDir,
    scripts: {
      lint: "next lint",
      "lint:fix": "next lint --fix",
      check: "next lint && tsc --noEmit",
      "format:write": 'prettier --write "**/*.{ts,tsx,js,jsx,mdx}" --cache',
      "format:check": 'prettier --check "**/*.{ts,tsx,js,jsx,mdx}" --cache'
    }
  });
  const eslintConfigSrc = path12.join(
    extrasDir
  );
  const eslintConfigDest = path12.join(projectDir, "eslint.config.js");
  fs11.copySync(eslintConfigSrc, eslintConfigDest);
};

// src/installers/wallet.ts
import path13 from "path";
import fs12 from "fs-extra";
var walletInstaller = ({ projectDir, packages }) => {
  const walletType = packages?.wallet?.type;
  if (!walletType || walletType === "none")
    return;
  const dependencies = [];
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
    devMode: false
  });
  const extrasDir = path13.join(PKG_ROOT, "template/extras");
  const walletConfigSrc = path13.join(
    extrasDir,
    `config/${walletType}.config.ts`
  );
  const walletConfigDest = path13.join(
    projectDir,
    `src/config/${walletType}.config.ts`
  );
  const walletProviderSrc = path13.join(
    extrasDir,
    `components/${walletType}Provider.tsx`
  );
  const walletProviderDest = path13.join(
    projectDir,
    `src/components/${walletType}Provider.tsx`
  );
  fs12.copySync(walletConfigSrc, walletConfigDest);
  fs12.copySync(walletProviderSrc, walletProviderDest);
};

// src/installers/index.ts
var buildPkgInstallerMap = (packages) => ({
  tailwind: {
    inUse: packages.includes("tailwind"),
    installer: tailwindInstaller
  },
  wallet: {
    type: "none",
    inUse: packages.includes("wallet"),
    installer: walletInstaller
  },
  envVariables: {
    inUse: true,
    installer: envVariablesInstaller
  },
  eslint: {
    inUse: packages.includes("eslint"),
    installer: dynamicEslintInstaller
  }
});

// src/utils/parseNameAndPath.ts
import pathModule from "path";
var parseNameAndPath = (rawInput) => {
  const input = removeTrailingSlash(rawInput);
  const paths = input.split("/");
  let appName = paths[paths.length - 1];
  if (appName === ".") {
    const parsedCwd = pathModule.resolve(process.cwd());
    appName = pathModule.basename(parsedCwd);
  }
  const indexOfDelimiter = paths.findIndex((p4) => p4.startsWith("@"));
  if (paths.findIndex((p4) => p4.startsWith("@")) !== -1) {
    appName = paths.slice(indexOfDelimiter).join("/");
  }
  const path15 = paths.filter((p4) => !p4.startsWith("@")).join("/");
  return [appName, path15];
};

// src/utils/renderTitle.ts
import gradient from "gradient-string";
var poimandresTheme = {
  blue: "#add7ff",
  cyan: "#89ddff",
  green: "#5de4c7",
  magenta: "#fae4fc",
  red: "#d0679d",
  yellow: "#fffac2"
};
var renderTitle = () => {
  const t3Gradient = gradient(Object.values(poimandresTheme));
  const pkgManager = getUserPkgManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(t3Gradient.multiline(TITLE_TEXT));
};

// src/helpers/format.ts
import chalk6 from "chalk";
import { execa as execa2 } from "execa";
import ora4 from "ora";
var formatProject = async ({
  pkgManager,
  projectDir,
  eslint
}) => {
  logger.info(`Formatting project with eslint...`);
  const spinner = ora4("Running format command\n").start();
  if (eslint) {
    await execa2(pkgManager, ["run", "format:write"], {
      cwd: projectDir
    });
  }
  spinner.succeed(`${chalk6.green("Successfully formatted project")}`);
};

// src/helpers/installDependencies.ts
import chalk7 from "chalk";
import { execa as execa3 } from "execa";
import ora5 from "ora";
var execWithSpinner = async (projectDir, pkgManager, options) => {
  const { onDataHandle, args = ["install"], stdout = "pipe" } = options;
  const spinner = ora5(`Running ${pkgManager} install...`).start();
  const subprocess = execa3(pkgManager, args, { cwd: projectDir, stdout });
  await new Promise((res, rej) => {
    if (onDataHandle) {
      subprocess.stdout?.on("data", onDataHandle(spinner));
    }
    void subprocess.on("error", (e) => rej(e));
    void subprocess.on("close", () => res());
  });
  return spinner;
};
var runInstallCommand = async (pkgManager, projectDir) => {
  switch (pkgManager) {
    case "npm":
      await execa3(pkgManager, ["install"], {
        cwd: projectDir,
        stderr: "inherit"
      });
      return null;
    case "pnpm":
      return execWithSpinner(projectDir, pkgManager, {
        onDataHandle: (spinner) => (data) => {
          const text2 = data.toString();
          if (text2.includes("Progress")) {
            spinner.text = text2.includes("|") ? text2.split(" | ")[1] ?? "" : text2;
          }
        }
      });
    case "yarn":
      return execWithSpinner(projectDir, pkgManager, {
        onDataHandle: (spinner) => (data) => {
          spinner.text = data.toString();
        }
      });
    case "bun":
      return execWithSpinner(projectDir, pkgManager, { stdout: "ignore" });
  }
};
var installDependencies = async ({
  projectDir
}) => {
  logger.info("Installing dependencies...");
  const pkgManager = getUserPkgManager();
  const installSpinner = await runInstallCommand(pkgManager, projectDir);
  (installSpinner ?? ora5()).succeed(
    chalk7.green("Successfully installed dependencies!\n")
  );
};

// src/utils/renderVersionWarning.ts
import { execSync as execSync2 } from "child_process";
import https from "https";
var renderVersionWarning = (npmVersion) => {
  const currentVersion = getVersion();
  if (currentVersion.includes("beta")) {
    logger.warn("  You are using a beta version of create-web3-kit.");
    logger.warn("  Please report any bugs you encounter.");
  } else if (currentVersion.includes("next")) {
    logger.warn(
      "  You are running create-web3-kit with the @next tag which is no longer maintained."
    );
    logger.warn("  Please run the CLI with @latest instead.");
  } else if (currentVersion !== npmVersion) {
    logger.warn("  You are using an outdated version of create-web3-kit.");
    logger.warn(
      "  Your version:",
      currentVersion + ".",
      "Latest version in the npm registry:",
      npmVersion
    );
    logger.warn("  Please run the CLI with @latest to get the latest updates.");
  }
  console.log("");
};
function checkForLatestVersion() {
  return new Promise((resolve, reject) => {
    https.get(
      "https://registry.npmjs.org/-/package/create-web3-kit/dist-tags",
      (res) => {
        if (res.statusCode === 200) {
          let body = "";
          res.on("data", (data) => body += data);
          res.on("end", () => {
            resolve(JSON.parse(body).latest);
          });
        } else {
          reject();
        }
      }
    ).on("error", () => {
      reject();
    });
  });
}
var getNpmVersion = () => (
  // `fetch` to the registry is faster than `npm view` so we try that first
  checkForLatestVersion().catch(() => {
    try {
      return execSync2("npm view create-web3-kit version").toString().trim();
    } catch {
      return null;
    }
  })
);

// src/index.ts
var main = async () => {
  const npmVersion = await getNpmVersion();
  const pkgManager = getUserPkgManager();
  renderTitle();
  if (npmVersion) {
    renderVersionWarning(npmVersion);
  }
  const {
    appName,
    packages,
    flags: { noGit, noInstall, importAlias, appRouter }
  } = await runCli();
  const usePackages = buildPkgInstallerMap(packages);
  const [scopedAppName, appDir] = parseNameAndPath(appName);
  const projectDir = await createProject({
    projectName: appDir,
    scopedAppName,
    packages: usePackages,
    importAlias,
    noInstall,
    appRouter
  });
  const pkgJson = fs13.readJSONSync(
    path14.join(projectDir, "package.json")
  );
  pkgJson.name = scopedAppName;
  pkgJson.cweb3aMetadata = { initVersion: getVersion() };
  if (pkgManager !== "bun") {
    const { stdout } = await execa4(pkgManager, ["-v"], {
      cwd: projectDir
    });
    pkgJson.packageManager = `${pkgManager}@${stdout.trim()}`;
  }
  fs13.writeJSONSync(path14.join(projectDir, "package.json"), pkgJson, {
    spaces: 2
  });
  if (importAlias !== "~/") {
    setImportAlias(projectDir, importAlias);
  }
  if (!noInstall) {
    await installDependencies({ projectDir });
    await formatProject({
      pkgManager,
      projectDir,
      eslint: packages.includes("eslint")
    });
  }
  if (!noGit) {
    await initializeGit(projectDir);
  }
  await logNextSteps({
    projectName: appDir,
    packages: usePackages,
    appRouter,
    noInstall,
    projectDir
  });
  process.exit(0);
};
main().catch((err) => {
  logger.error("Aborting installation...");
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});

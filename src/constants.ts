import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

export const TITLE_TEXT = `
 ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗    ██╗    ██╗██████╗      █████╗ ██████╗ ██████╗ 
██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝    ██║    ██║╚════██╗    ██╔══██╗██╔══██╗██╔══██╗
██║     ██████╔╝█████╗  ███████║   ██║   █████╗      ██║ █╗ ██║ █████╔╝    ███████║██████╔╝██████╔╝
██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝      ██║███╗██║ ╚═══██╗    ██╔══██║██╔═══╝ ██╔═══╝ 
╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗    ╚███╔███╔╝██████╔╝    ██║  ██║██║     ██║     
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝     ╚══╝╚══╝ ╚═════╝     ╚═╝  ╚═╝╚═╝     ╚═╝     
                                                                                                   
`;
export const DEFAULT_APP_NAME = "my-w3-app";
export const CREATE_W3_APP = "create-w3-app";

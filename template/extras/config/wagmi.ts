import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, mainnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Create Web3 Kit",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, base],
  ssr: true,
});

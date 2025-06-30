import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import styles from "../pages/index.module.css";

export default function ConnectRainbow() {
  const { address, isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <ConnectButton />
      {isConnected && <div className={styles.address}>{address}</div>}
    </div>
  );
}

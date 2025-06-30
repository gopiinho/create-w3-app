"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import styles from "../app/index.module.css";

export default function ConnectRainbow() {
  const { address, isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <ConnectButton />
      {isConnected && <div className={styles.address}>{address}</div>}
    </div>
  );
}

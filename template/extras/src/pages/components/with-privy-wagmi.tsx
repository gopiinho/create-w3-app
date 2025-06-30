import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

import styles from "../pages/index.module.css";

export default function Connect() {
  const { login, logout } = usePrivy();
  const { address, isConnected } = useAccount();

  const handleButton = () => {
    if (!isConnected) {
      login();
    } else {
      logout();
    }
  };

  const buttonText = isConnected ? "Disconnect" : "Connect";

  return (
    <div className={styles.connectContainer}>
      <button className={styles.connectButton} onClick={handleButton}>
        {buttonText}
      </button>
      <div className={styles.address}>{address}</div>
    </div>
  );
}

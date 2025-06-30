import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

import styles from "../pages/index.module.css";

export default function Connect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleButton = () => {
    if (!isConnected) {
      connect({ connector: injected() });
    } else {
      disconnect();
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

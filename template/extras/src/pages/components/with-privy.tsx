import { usePrivy } from "@privy-io/react-auth";

import styles from "../pages/index.module.css";

export default function Connect() {
  const { login, logout, user, authenticated } = usePrivy();

  const handleButton = () => {
    if (!authenticated) {
      login();
    } else {
      logout();
    }
  };

  const buttonText = authenticated ? "Disconnect" : "Connect";
  const walletAddress = user?.wallet?.address;

  return (
    <div className={styles.connectContainer}>
      <button className={styles.connectButton} onClick={handleButton}>
        {buttonText}
      </button>
      <div className={styles.address}>{walletAddress}</div>
    </div>
  );
}

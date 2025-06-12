import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>Web3</span> Kit
        </h1>
        <span className={styles.description}>Privy with App router</span>
      </div>
    </main>
  );
}

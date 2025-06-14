import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>W3</span> App
        </h1>
        <span className={styles.description}>Base with App router</span>
      </div>
    </main>
  );
}

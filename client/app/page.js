"use client";

import styles from "./page.module.css";

import NewsComponent from "./news/NewsComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <NewsComponent />
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}

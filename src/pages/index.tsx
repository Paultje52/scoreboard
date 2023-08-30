import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <div className={styles.score}>0</div>
        <div className={styles.score}>0</div>
      </div>
      <div className={styles.text}>
        <div>
          <a>Edit</a>
          <a>Reset</a>
        </div>
        <div>
          <a href="https://github.com/Paultje52/scoreboard" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

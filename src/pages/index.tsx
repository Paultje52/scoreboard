import useLocalStorageState from "@/components/useLocalStorageState";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [blueScore, setBlueScore] = useLocalStorageState(0, "blueScore");
  const [redScore, setRedScore] = useLocalStorageState(0, "redScore");

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <div
          className={styles.score}
          onClick={() => {
            setBlueScore(blueScore + 1);
          }}
        >
          {blueScore}
        </div>
        <div
          className={styles.score}
          onClick={() => {
            setRedScore(redScore + 1);
          }}
        >
          {redScore}
        </div>
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

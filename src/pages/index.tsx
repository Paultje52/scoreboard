import useLocalStorageState from "@/components/useLocalStorageState";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [blueScore, setBlueScore] = useLocalStorageState(0, "blueScore");
  const [redScore, setRedScore] = useLocalStorageState(0, "redScore");

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const addBlueScore = () => {
    if (isEditing || blueScore >= 99) return;
    setBlueScore(blueScore + 1);
  };
  const overrideBlueScore = (score: number) => {
    if (score < 0 || score >= 99) return;
    setBlueScore(score);
  };

  const addRedScore = () => {
    if (isEditing || redScore >= 99) return;
    setRedScore(redScore + 1);
  };
  const overrideRedScore = (score: number) => {
    if (score < 0 || score >= 99) return;
    setRedScore(score);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <div className={styles.score} onClick={addBlueScore}>
          {isEditing && (
            <span onClick={() => overrideBlueScore(blueScore + 1)}>+</span>
          )}
          <p>{blueScore}</p>
          {isEditing && (
            <span onClick={() => overrideBlueScore(blueScore - 1)}>-</span>
          )}
        </div>
        <div className={styles.score} onClick={addRedScore}>
          {isEditing && (
            <span onClick={() => overrideRedScore(redScore + 1)}>+</span>
          )}
          <p>{redScore}</p>
          {isEditing && (
            <span onClick={() => overrideRedScore(redScore - 1)}>-</span>
          )}
        </div>
      </div>
      <div className={styles.text}>
        <div>
          <a onClick={toggleEdit}>{isEditing ? "Done" : "Edit"}</a>
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

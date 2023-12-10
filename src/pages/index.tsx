import useLocalStorageState from "@/components/useLocalStorageState";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const MAX_SCORE = 99;

function useScore(initialScore = 0, key: string) {
  const [score, setScore] = useLocalStorageState(initialScore, key);

  const addScore = () => {
    if (score < MAX_SCORE) {
      setScore(score + 1);
    }
  };

  const overrideScore = (newScore: number) => {
    if (newScore >= 0 && newScore < MAX_SCORE) {
      setScore(newScore);
    }
  };

  return { score, addScore, overrideScore };
}

type ScoreParams = {
  score: number;
  addScore: () => void;
  overrideScore: (newScore: number) => void;
  isEditing: boolean;
};

function Score({ score, addScore, overrideScore, isEditing }: ScoreParams) {
  return (
    <div className={styles.score} onClick={() => !isEditing && addScore()}>
      {isEditing && <span onClick={() => overrideScore(score + 1)}>+</span>}
      <p>{score}</p>
      {isEditing && <span onClick={() => overrideScore(score - 1)}>-</span>}
    </div>
  );
}

export default function Home() {
  const {
    score: blueScore,
    addScore: addBlueScore,
    overrideScore: overrideBlueScore
  } = useScore(0, "blueScore");
  const {
    score: redScore,
    addScore: addRedScore,
    overrideScore: overrideRedScore
  } = useScore(0, "redScore");

  const [isEditing, setIsEditing] = useState(false);
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const [isResetting, setIsResetting] = useState(false);
  const toggleResetMode = () => {
    setIsResetting(!isResetting);
  };

  const onResetClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target !== event.currentTarget) return;

    const height = event.currentTarget.offsetHeight;
    if (event.clientY < height / 10) return;

    const width = event.currentTarget.offsetWidth;
    const colour = event.clientX < width / 2 ? "blue" : "red";

    if (colour === "blue") overrideBlueScore(0);
    else overrideRedScore(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scores}>
        <Score
          score={blueScore}
          addScore={addBlueScore}
          overrideScore={overrideBlueScore}
          isEditing={isEditing}
        />
        <Score
          score={redScore}
          addScore={addRedScore}
          overrideScore={overrideRedScore}
          isEditing={isEditing}
        />
      </div>
      <div className={styles.text}>
        <div>
          <a onClick={toggleEditMode}>{isEditing ? "Done" : "Edit"}</a>
          <a onClick={toggleResetMode}>Reset</a>
        </div>
        <div>
          <a href="https://github.com/Paultje52/scoreboard" target="_blank">
            GitHub
          </a>
        </div>
      </div>
      {isResetting && (
        <div className={styles.resetOverlay} onClick={onResetClick}>
          <span onClick={toggleResetMode}>X</span>
          <h1>Click a side to reset</h1>
        </div>
      )}
    </div>
  );
}

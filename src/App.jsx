import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [isGameStarted, SetIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    SetIsGameStarted((currState) => !currState);
  };
  return (
    <div className="select-none">
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

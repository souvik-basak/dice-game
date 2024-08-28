import NumberSelect from "./NumberSelect";
import RollDIce from "./RollDIce";
import Rules from "./Rules";
import TotalScore from "./TotalScore";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectValue, setSelectValue] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, SetShowRules] = useState(false)
  function getRandomArbitrary(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }
  const rollDice = () => {
    if (!selectValue) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const random = getRandomArbitrary(1, 7);
    setCurrDice((prev) => random);
    if (selectValue === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectValue(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-end pt-5 ">
        <TotalScore score={score} />
        <NumberSelect
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          error={error}
          setError={setError}
        />
      </div>
      <RollDIce currDice={currDice} rollDice={rollDice} />
      <div className="flex flex-col items-center gap-2 m-2 font-poppins">
        <button className="px-10 py-18 bg-black text-white font-semibold rounded-md gap-5 border-2 border-none hover:bg-black transition-all cursor-pointer text-lg" onClick={()=>setScore(0)}>
          Reset Score
        </button>
        <button className="px-10 py-18 text-black font-semibold rounded-md gap-5 border-2 border-black transition-all cursor-pointer text-lg" onClick={()=>SetShowRules((prev)=>!prev)}>
          {showRules?'Hide':'Show'} Rules
        </button>
      </div>
      {showRules && <Rules/>}
    </div>
  );
};

export default GamePlay;

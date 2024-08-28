import { useState } from "react";

function RollDIce({ currDice, setCurrDice, rollDice }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="cursor-pointer">
        <img
          src={`/images/dice_${currDice}.png`}
          alt={`dice ${currDice}`}
          onClick={rollDice}
          className="active:opacity-90"
        />
        <p className="text-xl font-bold font-poppins text-center">
          CLICK ON DICE TO ROLL
        </p>
      </div>
    </div>
  );
}

export default RollDIce;

import { useState } from "react";

function NumberSelect({ selectValue, setSelectValue, error, setError }) {
  const arr = [1, 2, 3, 4, 5, 6];
  const NumberSelectHandler = (val)=>{
    setSelectValue(val)
    setError("")
  }
  return (
    <div className="w-[552px] h-[138px] flex flex-col items-end mr-4">
      <p className="text-red-700 font-poppins font-medium">{error}</p>
      <div className="flex gap-6">
        {arr.map((val, ind) => (
          <div
            className={`${
              selectValue === val ? "bg-black text-white" : "text-black"
            } h-16 w-16 border border-black place-items-center grid text-2xl font-bold cursor-pointer`}
            key={ind}
            onClick={()=>NumberSelectHandler(val)}
          >
            {val}
          </div>
        ))}
      </div>
      <p className="text-black text-center align-bottom font-poppins font-semibold text-2xl mt-3">
        Select Number
      </p>
    </div>
  );
}

export default NumberSelect;

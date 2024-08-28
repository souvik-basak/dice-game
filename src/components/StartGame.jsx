const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="max-w-[1180px] flex items-center justify-center h-screen m-auto">
        <div>
          <img src="/images/dices.png" alt="dice image" />
        </div>
        <div>
          <h1 className="text-8xl font-poppins font-bold whitespace-nowrap">
            DICE GAME
          </h1>
          <button
            className="px-10 py-18 bg-black text-white font-semibold rounded-md gap-5 border-none hover:bg-slate-900 transition-all cursor-pointe0r text-lg"
            onClick={toggle}
          >
            Play!
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;

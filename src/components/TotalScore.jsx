function TotalScore({ score }) {
  return (
    <div className="w-36 h-40 ml-4">
      <h1 className="font-poppins font-medium text-8xl text-center">{score}</h1>
      <p className="font-poppins font-medium text-2xl text-center">
        Total Score
      </p>
    </div>
  );
}

export default TotalScore;

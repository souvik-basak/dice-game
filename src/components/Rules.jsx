const Rules = () => {
  return (
    <div className="w-max h-max p-3 rounded-lg flex flex-col bg-red-100 items-center m-auto">
      <h1 className="font-poppins font-bold text-2xl">How to play dice game</h1>
      <ol className="text-base font-poppins font-medium gap-6">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be deducted </li>
      </ol>
    </div>
  );
};

export default Rules;

const Section3 = () => {
  return (
    <div className="section3 relative px-8 text-white w-full h-[100vh] select-none z-20 flex items-center">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex flex-col gap-4">
        <div>
          <h2 className="uppercase text-gray-300 font-medium text-[3vw] tracking-tighter strokeText leading-[.75]">
            Knighthood in
          </h2>
          <span className="uppercase font-bold text-[6vw] tracking-tighter strokeText leading-[.75]">
            Battle
          </span>
        </div>
        <p className="text-[18px] text-gray-300">
          Experience the thunderous clash of steel and the roar of battle as knights jousted and
          fought for honor and glory. Explore the strategies and tactics employed by these valiant
          warriors on the battlefield.
        </p>
      </div>
    </div>
  );
};

export default Section3;

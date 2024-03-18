const Section4 = () => {
  return (
    <div className="section4 relative px-8 text-white w-full h-[100vh] select-none z-20 flex items-center">
      <div className="w-[50%] flex flex-col gap-4">
        <div>
          <h2 className="uppercase text-gray-300 font-medium text-[3vw] tracking-tighter strokeText leading-[.75]">
            Armor and
          </h2>
          <span className="uppercase font-bold text-[6vw] tracking-tighter strokeText leading-[.75]">
            Weapons
          </span>
        </div>
        <p className="text-[18px] text-gray-300">
          Marvel at the craftsmanship of medieval armor and weaponry. From gleaming suits of plate
          armor to mighty swords and lances, delve into the arsenal of the knights and learn about
          the tools of their trade.
        </p>
      </div>
      <div className="w-[50%]"></div>
    </div>
  );
};

export default Section4;

const LastSection = () => {
  return (
    <div className="lastSection relative text-white w-[100%] h-screen select-none flex flex-col justify-end">
      <span className="absolute opacity-90 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-[#c6d6e6] font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75] z-20">
        MEDIEVAL <br /> <span className="text-[19vw]">KNIGHT</span>
      </span>
      <span className="font-outline-2 absolute uppercase top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-transparent font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75] z-50 ">
        MEDIEVAL <br /> <span className="text-[19vw]">KNIGHT</span>
      </span>
      <div className="relative w-full h-12 text-sm bg-blue-600 text-white flex items-center justify-center z-50">
        Developed by STAN ©
      </div>
    </div>
  );
};

export default LastSection;

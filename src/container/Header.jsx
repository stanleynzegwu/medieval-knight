const Header = () => {
  return (
    // <div className=" text-white w-[100%] h-screen">
    //   <div className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-black text-9xl z-20">
    //     <span className="block m-0 p-0">medieval</span>
    //     <span className="block text-center m-0 p-0 text-[166px]">Knight</span>
    //   </div>
    //   <div className="font-outline-2 absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent font-black text-9xl z-50">
    //     <span className="block m-0 p-0">medieval</span>
    //     <span className="block text-center m-0 p-0 text-[166px]">Knight</span>
    //   </div>
    // </div>

    // <div className=" text-white w-[100%] h-screen">
    //   <span className="absolute uppercase top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white font-black text-9xl z-20 ">
    //     medieval
    //   </span>
    //   <span className="font-outline-2 absolute uppercase top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-transparent font-black text-9xl z-50">
    //     medieval
    //   </span>
    // </div>

    // <div className=" text-white w-[100%] h-screen select-none">
    //   <div className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-black text-9xl z-20">
    //     <div className="flex flex-col">
    //       <span className="m-0 p-0">medieval</span>
    //       <span className="m-0 p-0 text-center text-[166px]">Knight</span>
    //     </div>
    //   </div>
    //   <div className="font-outline-2 absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent font-black text-9xl z-50">
    //     <div className="flex flex-col items-center">
    //       <span className=" m-0 p-0">medieval</span>
    //       <span className=" text-center m-0 p-0 text-[166px]">Knight</span>
    //     </div>
    //   </div>
    // </div>

    <div className="header relative text-white w-[100%] h-screen select-none">
      <span className="absolute opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#c6d6e6] font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75] z-20">
        MEDIEVAL <br /> <span className="text-[19vw]">KNIGHT</span>
      </span>
      <span className="font-outline-2 absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent font-bold tracking-tighter text-[15vw] text-center strokeText leading-[.75] z-50 ">
        MEDIEVAL <br /> <span className="text-[19vw]">KNIGHT</span>
      </span>
    </div>
  );
};

export default Header;

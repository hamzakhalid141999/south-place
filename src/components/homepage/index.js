import React from "react";
import banner from "../../assets/homepage/banner.png";

function HomepageBanner() {
  return (
    <div className="w-full h-[100vh] relative">
      <img src={banner.src} className="absolute w-full h-full object-cover" />

      <div className="absolute w-[55%] left-[40px] bottom-[40px] p-[30px] bg-[#0000006b] banner_panel flex flex-col gap-y-[20px]">
        <h2 className="text-white text-[104px] leading-[100px] font-bold">
          South Place City Center
        </h2>
        <p className="text-[28px] text-white font-normal">
          A New Era of Retail & Residential Living
        </p>
        <p className="text-[20px] text-white leading-[30px] font-thin">
          Experience world-class shopping, living, and entertainment in the
          heart of Cutler Bay, FL.
        </p>

        <button className="bg-primaryblue px-[30px] py-[10px] w-fit rounded-[100px] text-white duration-200 ease-out hover:opacity-70">
          Discover Mode
        </button>
      </div>
    </div>
  );
}

export default HomepageBanner;

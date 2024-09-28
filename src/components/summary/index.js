import React from "react";
import summary_container from "../../assets/homepage/summary_container.png";
import summary_building from "../../assets/homepage/summary_building.png";

function Summary() {
  return (
    <div className="w-full h-[fit] flex flex-col items-center justify-start pt-[80px]">
      <div className="w-[85%] max_width_container relative h-fit mt-[40px]">
        <img src={summary_container.src} className="w-full" />


          <button className="bg-primaryblue absolute bottom-[20px] left-[30px] px-[30px] py-[10px] w-fit rounded-[100px] text-white duration-200 ease-out hover:opacity-70">
                Discover Mode
          </button>
      </div>
      <img src={summary_building.src} className="w-full building"/>
    </div>
  );
}

export default Summary;

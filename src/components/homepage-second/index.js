import React from "react";
import company1 from "../../assets/homepage/company_1.png";
import company2 from "../../assets/homepage/company_2.png";
import company3 from "../../assets/homepage/company_3.png";
import company4 from "../../assets/homepage/company_4.png";
import company5 from "../../assets/homepage/company_5.png";
import company6 from "../../assets/homepage/company_5.png";
import building1 from "../../assets/homepage/building_1.png";
import building2 from "../../assets/homepage/building_2.png";
import building3 from "../../assets/homepage/building_3.png";
import cloud1 from "../../assets/homepage/cloud_1.png";
import cloud2 from "../../assets/homepage/cloud_2.png";

function HomepageSecond() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center relative">
      <div className="h-[17vh] max_width_container w-full flex flex-row gap-x-[40px] items-center justify-center">
        <img src={company1.src} className="h-[40px]" />
        <img src={company2.src} className="h-[40px]" />
        <img src={company3.src} className="h-[40px]" />
        <img src={company4.src} className="h-[40px]" />
        <img src={company5.src} className="h-[40px]" />
        <img src={company6.src} className="h-[40px]" />
      </div>
      <div className="h-[53vh]  relative overflow-hidden flex flex-col items-center justify-center w-full bg-[#F7F8F8]">
        <img
          src={building1.src}
          className="absolute bottom-0 left-[15%] w-[10%]"
        />
        <img src={cloud1.src} className="absolute top-0 left-[20%] w-[20%]" />
        <img
          src={building2.src}
          className="absolute bottom-0 left-[40%] w-[10%]"
        />
        <img
          src={building1.src}
          className="absolute bottom-0 right-[15%] w-[7%]"
        />
        <img src={cloud2.src} className="absolute top-0 right-[10%] w-[15%]" />

        <div className="w-[80%] h-[80%] max_width_container flex flex-col gap-y-[20px] items-center justify-center text-[60px] z-[10000] mt-auto mb-auto top-0 right-0 left-0 bottom-0">
          <h2>Key Highlights</h2>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-col gap-y-2 text-center">
              <h2 className="text-[60px] text-[#1E77B8]">5,000</h2>
              <p className="text-[20px]">Residential Units</p>
            </div>

            <div className="h-full w-[1px] bg-black" />

            <div className="flex flex-col gap-y-2 text-center">
              <h2 className="text-[60px] text-[#1E77B8]">700,000+</h2>
              <p className="text-[20px]">Square Feet of Retail Space</p>
            </div>

            <div className="h-full w-[1px] bg-black" />

            <div className="flex flex-col gap-y-2 text-center">
              <h2 className="text-[60px] text-[#1E77B8]">150</h2>
              <p className="text-[20px]">Key Hotel</p>
            </div>

            <div className="h-full w-[1px] bg-black" />

            <div className="flex flex-col gap-y-2 text-center">
              <h2 className="text-[60px] text-[#1E77B8]">177,000</h2>
              <p className="text-[20px]">Square Feet of Medical Offices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageSecond;

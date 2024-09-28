import React from "react";
import logo from "../../../assets/footer/company_logo.svg";
import linkedin from "../../../assets/footer/linkedin.svg";
import facebook from "../../../assets/footer/facebook.svg";
import twitter from "../../../assets/footer/twitter.svg";
import demo from "../../../assets/footer/demo.svg";

function Footer() {
  return (
    <div className="w-full flex flex-col gap-y-2 pt-[40px] bg-black items-center justify-center">
      <div className="w-[85%] h-[75%] max_width_container bg-[#FFFFFF12] px-[30px] rounded-[30px] py-[40px]">
        <div className="grid grid-cols-[4fr,5fr] gap-[30px]">
          <div className="w-full h-full flex flex-col gap-y-[30px]">
            <img src={logo.src} className="w-[40%]" />

            <p className="text-[16px] text-white font-thin">
              South Place City Center (SCC) is an urban infill mixed-use
              development project. It re-envisions the Southland Mall, a 1.18
              million square foot regional enclosed shopping center, into a
              vibrant “live- work-play” destination and multifamily residential
              community.
            </p>

            <div className="flex flex-row items-center gap-x-[20px]">
              <img
                src={linkedin.src}
                className="w-[20px] duration-200 ease-out hover:opacity-50 hover:cursor-pointer"
              />
              <img
                src={facebook.src}
                className="w-[20px] duration-200 ease-out hover:opacity-50 hover:cursor-pointer"
              />
              <img
                src={twitter.src}
                className="w-[20px] duration-200 ease-out hover:opacity-50 hover:cursor-pointer"
              />
              <img
                src={demo.src}
                className="w-[20px] duration-200 ease-out hover:opacity-50 hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 pl-[40px] w-full h-full">
            <div className="flex flex-col gap-y-[20px]">
              <h2 className="text-white text-[20px] mb-[60px]">Services</h2>

              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
            </div>

            <div className="flex flex-col gap-y-[20px]">
              <h2 className="text-white text-[20px] mb-[60px]">Privacy Policy</h2>

              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
            </div>

            <div className="flex flex-col gap-y-[20px]">
              <h2 className="text-white text-[20px] mb-[60px]">Company</h2>

              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
              <p className="text-white text-[14px] font-thin">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white font-thin text-[10.5px] pb-[40px] pt-[30px]">© Copyright <span className="font-bold">southpalace</span>. All Rights Reserved </p>
    </div>
  );
}

export default Footer;

import React from 'react'
import banner from "../../../assets/development/banner.png";

function DevelopmentBanner() {
  return (
    <div className="w-full h-[75vh] relative flex flex-col items-center justify-center">
      <img src={banner.src} className="absolute w-full h-full object-cover" />

      <div className="w-[60%] h-[fit] py-[40px] bg-[#0000006b] banner_panel flex flex-col items-center justify-center gap-y-[20px]">
        <h2 className="text-white text-[48px] leading-[100px] font-bold">
          Development Overview
        </h2>
      </div>
    </div>
  )
}

export default DevelopmentBanner
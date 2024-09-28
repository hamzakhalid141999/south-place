import React from "react";
import banner from "../../../assets/retail/retail_bg.png";

function Retail() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <img src={banner.src} className="absolute w-full h-full object-cover" />
      <div className="w-[85%] max_width_container h-[80%] flex flex-col items-center justify-start gap-y-[50px]">
        <h2 className="text-[48px] font-regular">Master Development Plan</h2>
        
        <div className="absolute w-[60%] px-[40px] py-[30px] text-center bg-[#0000006B] retail rounded-[15px]">
            <h2 className="text-white text-[42px] font-bold">RETAIL & COMMERCIAL USES</h2>

            <p className="text-[14px] font-thin text-white opacity-70">The current property’s tenancy includes a strong retail core of national credit tenants with long average tenure, low occupancy cost, and strong in-place cashflow۔</p>
            <p className="text-[14px] font-thin text-white opacity-70">In addition to maintaining these tenants throughout the development of the master plan, the Sponsor and it’s partners are actively working to bring additional sought-after restaurants, entertainment, and high-end retailers to the project. As part of the broader development, the sponsor is working with several hospitality partners and medical office users to bring these uses to the property</p>
        </div>
      </div>
    </div>
  );
}

export default Retail;

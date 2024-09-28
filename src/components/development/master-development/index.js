import React from "react";
import pic from "../../../assets/development/master_development.png";

function MasterDevelopment() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[85%] max_width_container h-[80%] flex flex-col items-center justify-start gap-y-[50px]">
        <h2 className="text-[48px] font-regular">Master Development Plan</h2>

        <div className="grid w-full h-full grid-cols-2 gap-[40px]">
          <div className="flex flex-col gap-y-[10px] font-light">
            <h2 className="text-[29px] font-semibold text-primaryblue mb-[50px]">
              INFRASTRUCTURE DEVELOPMENT
            </h2>
            <p>
              The Sponsor plans to develop the horizontal infrastructure for the
              master development over a 2-year period, from 2024 to 2026.
            </p>

            <p> Infrastructure components include:</p>
            <p>•  Structured parking</p>
            <p>•  Internal roads</p>
            <p>•  Water, sewer, and stormwater drainage system</p>
            <p>•  Green spaces</p>

            <p>All elements of the Master Plan can be built “As of Right” with only administrative approval from the city of Cutler Bay.</p>
          </div>

          <div className="w-full h-full grid place-items-start">
                <img src={pic.src} className="w-[80%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterDevelopment;

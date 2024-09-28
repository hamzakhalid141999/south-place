import React from "react";
import graph from "../../assets/homepage/graph.png";

function InvestmentOverviews() {
  return (
    <div className="w-full h-[85vh] grid place-items-center">
      <div className="w-[85%] h-[85%] max_width_container">
        <div className="w-full h-full grid grid-cols-2 gap-8">
          <div className="w-full h-full flex flex-col gap-y-4">
            <h2 className="text-[54px] font-semibold">Investment Overview</h2>

            <div className="flex flex-col gap-y-4">
              <div className="px-[30px] py-[20px] bg-[#F7F8F8] rounded-[15px] flex flex-col justify-between gap-y-[10px]">
                <h2 className="text-[18px] text-primaryblue font-bold">
                  Total Project Value:
                </h2>
                <p>
                  $3.29 billion, including $350 million in development rights
                  and $2.94 billion in development value
                </p>
              </div>

              <div className="px-[30px] py-[20px] bg-[#F7F8F8] rounded-[15px] flex flex-col justify-between gap-y-[10px]">
                <h2 className="text-[18px] text-primaryblue font-bold">
                  Debt Financing:
                </h2>
                <p>60% of the transaction.</p>
              </div>

              <div className="px-[30px] py-[20px] bg-[#F7F8F8] rounded-[15px] flex flex-col justify-between gap-y-[10px]">
                <h2 className="text-[18px] text-primaryblue font-bold">
                  Equity Financing:
                </h2>
                <p>40% of the transaction.</p>
              </div>

              <div className="px-[30px] py-[20px] bg-[#F7F8F8] rounded-[15px] flex flex-col justify-between gap-y-[10px]">
                <h2 className="text-[18px] text-primaryblue font-bold">
                  Investor Contributions:
                </h2>
                <p>15% GP equity, 85% LP equity</p>
              </div>
            </div>
          </div>

          <div className="w-full h-full grid place-items-start">
            <img src={graph.src} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentOverviews;

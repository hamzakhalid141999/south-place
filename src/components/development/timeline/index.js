"use client";

import React, { useEffect, useState } from "react";
import card1 from "../../../assets/development/card1.png";
import card2 from "../../../assets/development/card2.png";
import card3 from "../../../assets/development/card3.png";
import card4 from "../../../assets/development/card4.png";
import card5 from "../../../assets/development/card5.png";
import card6 from "../../../assets/development/card6.png";
import arrow from "../../../assets/development/arrow.svg";

function Timeline() {
  const [data] = useState([
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card4,
    card5,
    card2,
    card3,
  ]);
  const [splitArray, setSplitArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const chunkArray = (array, size) => {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    };

    // Split the data into chunks of 6
    const chunks = chunkArray(data, 6);
    setSplitArray(chunks);
  }, [data]);

  console.log("SPLIT ARRAY: ", splitArray);

  return (
    <div className="h-[70vh] w-full bg-[#1E77B80D] flex flex-col items-center justify-center">
      <div className="w-[85%] h-[85%] max_width_container flex flex-col items-center justify-start">
        <h2 className="text-[48px] font-semibold">Project Timeline</h2>

        <div className="w-full h-full flex flex-row items-center timeline_container">
          {splitArray[currentIndex]?.map((singleData, index) => (
            <div className="w-[16%] relative flex flex-row items-center">
              <img
                src={singleData.src}
                className={`absolute left-[-60px] ${
                  index % 2 !== 0 ? "top-[-130px]" : "bottom-[-130px]"
                } w-[150px]`}
              />

              {index === 0 && (
                <div className="w-[15px] h-[15px] relative rounded-[100px] border-[#1E77B8] border-[4px]" />
              )}
              {index !== splitArray[currentIndex]?.length - 1 && (
                <div className="relative w-[100%] h-[1px] border-dashed border-[#1E77B8] border-[1px]" />
              )}
              {}
              {index !== splitArray[currentIndex]?.length - 1 && (
                <div className="w-[15px] h-[15px] relative rounded-[100px] border-[#1E77B8] border-[4px]" />
              )}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-x-[20px]">
          <img
            onClick={() => {
              if (currentIndex !== 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
            src={arrow.src}
            className="rotate-180 duration-200 ease-out hover:cursor-pointer hover:opacity-70"
          />
          <img
              onClick={() => {
                if (currentIndex !== splitArray.length - 1) {
                  setCurrentIndex(currentIndex + 1);
                }
              }}
            src={arrow.src}
            className="w-[50px] duration-200 ease-out hover:cursor-pointer hover:opacity-70"
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;

import React from "react";
import recImg1 from "../assets/recImg1.png";
import recImg2 from "../assets/recImg2.png";
import recImg3 from "../assets/recImg3.png";

const Recomm = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#3b2421] min-h-[50%] px-4">
      <h1 className="text-4xl font-bold text-[#fff2de] mt-10">Recommended</h1>

      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {/* Card 1 */}
        <div className="bg-[#4a302c] rounded-xl p-5 w-full sm:w-64">
          <div className="relative">
            <img
              src={recImg1}
              alt="Arabica"
              className="rounded-xl"
            />
            <span className="absolute top-2 left-2 bg-white text-black p-1 text-sm rounded-full">
              i
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <span className="text-[#fff2de] font-semibold">Arabica</span>
            <button className="text-white bg-[#4a302c] border border-white rounded-full px-3 py-1">
              🛒
            </button>
          </div>
          <span className="text-[#fff2de]">Dark Roast</span>
        </div>

        {/* Card 2 */}
        <div className="bg-[#4a302c] rounded-xl p-5 w-full sm:w-64">
          <div className="relative">
            <img
              src={recImg2}
              alt="House Blend"
              className="rounded-xl"
            />
            <span className="absolute top-2 left-2 bg-white text-black p-1 text-sm rounded-full">
              i
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <span className="text-[#fff2de] font-semibold">House Blend</span>
            <button className="text-white bg-[#4a302c] border border-white rounded-full px-3 py-1">
              🛒
            </button>
          </div>
          <span className="text-[#fff2de]">Dark Roast</span>
        </div>

        {/* Card 3 */}
        <div className="bg-[#4a302c] rounded-xl p-5 w-full sm:w-64">
          <div className="relative">
            <img
              src={recImg3}
              alt="Robusta"
              className="rounded-xl"
            />
            <span className="absolute top-2 left-2 bg-white text-black p-1 text-sm rounded-full">
              i
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <span className="text-[#fff2de] font-semibold">Robusta</span>
            <button className="text-white bg-[#4a302c] border border-white rounded-full px-3 py-1">
              🛒
            </button>
          </div>
          <span className="text-[#fff2de]">Dark Roast</span>
        </div>
      </div>
    </div>
  );
};

export default Recomm;

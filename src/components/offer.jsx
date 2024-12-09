import React from "react";
import Proefpakket from "../assets/Proefpakket.png";

const OurStory = () => {
  return (
    <div
      className="w-full bg-gradient-to-r from-[#3F2F2A] to-[#5C3A2D] py-16 px-6 flex justify-center items-center
    

    "
    >
      {/* Inner Container with Rounded Corners */}
      <div
        className="w-full max-w-6xl bg-[#5C3A2D] rounded-lg relative p-8 flex flex-col lg:flex-row items-center
         shadow-sm shadow-[#D3B89F]  "
      >
        {/* Title at the Top Right */}
        <h2
          className="absolute top-[-20px] left-8 text-[#D3B89F] text-3xl font-bold"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#FCEBCA", // Text color
            textShadow: " 3px 3px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          Our Story
        </h2>

        {/* Right Section: Text */}
        <div className="lg:w-1/2 text-[#D3B89F] mt-6 lg:mt-0 lg:pl-8">
          <h2 className="text-3xl  mb-4 text-[#94293e] font-bold"
           style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#FCEBCA", // Text color
            textShadow: " 3px 3px 5px rgba(0, 0, 0, 0.8)",
          }}
          
          >up to 50% off </h2>



          <p className="text-lg leading-relaxed font-serif">
            At our cafe, we take pride in providing our customers with the best
            coffee around. Our carefully-selected coffees come from some of the
            most renowned coffee growing regions in the world, ensuring that
            each cup is unrivaled in flavor and freshness.
          </p>
         
        </div>

        {/* Left Section: Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={Proefpakket}
            alt="Proefpakket.png"
            className="w-[250px] lg:w-[300px] h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;

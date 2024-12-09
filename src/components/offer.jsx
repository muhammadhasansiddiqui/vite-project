import React from "react";
import HEROimg from "../assets/Image-ourstory.png"; // Replace with your image path

const OurStory = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#3F2F2A] to-[#5C3A2D] py-16 px-6 flex justify-center items-center
    

    ">
      {/* Inner Container with Rounded Corners */}
      <div className="w-full max-w-6xl bg-[#5C3A2D] rounded-lg relative p-8 flex flex-col lg:flex-row items-center
         shadow-xl shadow-[#D3B89F]  ">
        {/* Title at the Top Right */}
        <h2
          className="absolute top-[-20px] right-8 text-[#D3B89F] text-3xl font-bold"
         style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#FCEBCA", // Text color
            textShadow: " 3px 3px 5px rgba(0, 0, 0, 0.8)",
          }}
        >
          Our Story
        </h2>

        {/* Left Section: Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
  <img
    src={HEROimg}
    alt="hero"
    className="w-[250px] lg:w-[300px] h-auto rounded-lg shadow-lg"
    style={{ boxShadow: '4px  6px 12px rgba(251, 236, 202, 0.7)' }}  
  />
</div>



        {/* Right Section: Text */}
        <div className="lg:w-1/2 text-[#D3B89F] mt-6 lg:mt-0 lg:pl-8">
          <p className="text-lg leading-relaxed font-serif">
            Eliza is an online coffee store that offers the widest selection of
            specialty coffees and teas from around the world. From medium-dark
            roast single origin to flavored espresso beans, they offer a variety
            of ethically sourced products to tantalize any customer’s palate.
          </p>
          <p className="mt-4 text-lg leading-relaxed font-serif">
            For those looking for unique brewing equipment, Elza also carries a
            full range of quality espresso makers, grinders, brewers, and more.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default OurStory;

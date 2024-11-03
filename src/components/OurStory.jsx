import React from "react";

const OurStory = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#3F2F2A] to-[#5C3A2D] text-[#D3B89F] py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold">Our Story</h2>
        <p className="text-lg lg:text-xl leading-relaxed">
          At Elza Coffee, we believe that coffee is more than just a drink; it's
          a lifestyle, a passion, and an experience. Founded in the heart of
          coffee culture, we have been serving quality, hand-crafted coffee that
          brings people together and ignites conversations.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed">
          Our journey began with a simple mission: to provide the perfect cup of
          coffee, crafted with love and served with a smile. Today, we continue
          to embrace our roots while pushing the boundaries of taste and
          quality, ensuring that every cup is as unique as the people we serve.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 bg-[#D3B89F] text-[#3F2F2A] font-semibold rounded-lg hover:bg-[#bfa085] transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OurStory;

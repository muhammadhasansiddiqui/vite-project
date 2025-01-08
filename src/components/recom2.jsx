import React from 'react';

const Recom2 = () => {
    return (
        <section className="text-gray-400 my-0 bg-[#5C3A2D] body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#fff2de] font-semibold">
                        Subscribe To Our Newsletter, Discounts And Promotions
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Email Address"
                                    className="w-full bg-[#FFF2DE] text-gray-800 rounded-lg border border-gray-400 focus:outline-none focus:border-[#846855] py-2 px-3 transition duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-[#846855] border-0 py-2 px-8 focus:outline-none hover:bg-[#4D322B] rounded-xl text-lg transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recom2;

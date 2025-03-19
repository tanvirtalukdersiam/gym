import React from "react";
import { FaPlay } from "react-icons/fa";
import heroimg from ".././assets/dumbell.png";
const Hero = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            <div className="flex flex-col justify-center py-10 md:py-0">
              {/* brand info */}
              <div className="text-center md:text-left space-y-4">
                <h1 className="text-[44px] leading-relaxed xl:leading-normal  lg:text-[56px] font-bold font-play ">
                  Gym Gives you the perfect{" "}
                  <span className="text-primary">Health</span>
                </h1>
                <p className="text-gray-600 xl:max-w-[500px]">
                  It is a long established fact that a reader will be by
                  readable content of a page when are the best product.
                </p>
                <div className="flex justify-center items-center gap-5 md:justify-start !mt-4 font-play">
                  <button className="primary-btn">Order Now</button>
                  <button className="flex justify-center items-center gap-2">
                    <FaPlay /> Watch Now
                  </button>
                </div>
              </div>
              {/* brand images */}
            </div>
            <div className="flex justify-center items-center">
              <img
                src={heroimg}
                alt=""
                className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

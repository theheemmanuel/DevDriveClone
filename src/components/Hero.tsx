// import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="dark:bg-black bg-white">
      <div className="max-w-[800px] w-full min-h-[92vh] mx-auto px-8 text-center flex flex-col justify-center">
        <p className="text-[#00DF9a] p-2 font-bold text-xl uppercase">
          expanding your online visibility
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-black dark:text-white text-4xl font-bold py-6">
          Take Your brand to the Next{" "}
          <Typed
            className="text-[#00DF9a]"
            strings={["Stage.", "Phase.", "Level."]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h1>
        {/* <div>
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Flex, Flexible financing for{" "}
          </p>
        </div> */}
        <p className="md:text-2xl text-xl text-gray-500 my-8">
          We work with you to place your business on a global landscape and
          specifically where your clients can see you.
        </p>
        <div className="flex justify-center gap-[40px]">
          <button className=" bg-[#00DF9a] hover:border-2 hover:bg-white px-4 rounded-md font-medium my-6 py-3 text-black transition duration-300">
            <a href="#plans">SEE OUR PLANS</a>
          </button>
          <button className=" hover:bg-[#00DF9a] border-2 bg-white px-4 rounded-md font-medium my-6 py-3 text-black transition duration-300">
            <a href="#testimonials">CLIENT TESTIMONIALS</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

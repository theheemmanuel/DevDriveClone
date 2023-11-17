// import React from "react";

function Newsletter() {
  return (
    <div id="contact" className="w-full text-white py-16">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center justify-center mx-auto lg:gap-16 lg:flex-row flex-col">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-4">
            The best day to start is today!
          </h1>
          <a href="mailto:micah@devdrive.xyz">
            <button className=" bg-[#00DF9a] px-8 rounded-md font-medium py-3 text-black hover:scale-110 duration-300">
              Reach Out To us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

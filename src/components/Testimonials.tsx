// import { useState } from "react";
import Frame8 from "../assets/S5.png";

const Testimonials = () => {
  // const [menu, notmenu] = useState(false);
  return (
    <div id="testimonials" className="bg-[#00DF9a] text-black p-4">
      <div className=" mx-auto max-w-[1240px]">
        <h1 className="text-center text-white font-black text-3xl py-8">
          Testimonial
        </h1>
        <div>
          <div className="md:flex justify-center px-8 bg-white rounded-3xl mb-8 p-4 mx-auto items-center md:gap-8">
            <div className="md:w-[50%]">
              <h1 className="font-medium text-gray-700 italic mx-auto">
                The website has made speedy progress and ranks numerously on the
                first page of Google SERPs. Our website traffic is ever-growing,
                and that has opened doors for more clients for our coaching
                services for bloggers and digital newbiew. The place of a
                well-structured website cannot be overrated, like I tell my
                students. I'm grateful to the DevDrive team for ensuring that we
                have a professional website that has boosted our sales capacity
                tremendously.
              </h1>
              <h1 className="mt-4 font-bold text-gray-700 text-xl max-md:text-center">
                Ruth Adeyemi
              </h1>
              <h1 className="font-semibold italic max-md:text-center">
                Founder of SARMLife
              </h1>
            </div>
            <img
              className="w-[350px] rounded-3xl max-md:mx-auto flex-[0.5]"
              src={Frame8}
              alt=""
            />
          </div>
        </div>
        {/* <div className="flex justify-around text-2xl cursor-pointer font-bold">
          <h1
            onClick={() => {
              notmenu(!menu);
            }}
          >
            {menu ? "X" : "X"}
          </h1>
          <h1>X</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

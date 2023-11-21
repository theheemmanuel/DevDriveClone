// import React from "react";

import Frame7 from "../assets/S4.png";
import Frame8 from "../assets/arrow.png";
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from "react-icons/fa";

const footer = () => {
  return (
    // <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
    //   <div className="lg:col-span-1">
    //     <h1 className="text-3xl font-bold text-[#00DF9a]">HeeDev Tech.</h1>
    //     <p className="py-4">
    //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
    //       praesentium libero explicabo asperiores earum obcaecati eligendi
    //       repellendus nam repellat similique.
    //     </p>
    //     <div className="flex md:w-[75%] md:mx-auto mx-8 justify-between my-6">
    //       <a href="">
    //         <FaFacebookSquare size={30} />
    //       </a>
    //       <a href="">
    //         <FaInstagram size={30} />
    //       </a>
    //       <a href="">
    //         {" "}
    //         <FaTwitterSquare size={30} />
    //       </a>
    //       <a href="">
    //         <FaGithubSquare size={30} />
    //       </a>
    //       <a target="blank" href="https://google.com">
    //         <FaDribbbleSquare size={30} />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="flex justify-between lg:col-span-2 mt-6">
    //     <div>
    //       <h6 className="font-medium text-gray-400">Solutions</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Analytics</li>
    //         <li className="py-2 text-sm">Marketing</li>
    //         <li className="py-2 text-sm">Commerce</li>
    //         <li className="py-2 text-sm">Insights</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Support</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Pricing</li>
    //         <li className="py-2 text-sm">Documentation</li>
    //         <li className="py-2 text-sm">Jobs</li>
    //         <li className="py-2 text-sm">Press</li>
    //         <li className="py-2 text-sm">Careers</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Company</h6>
    //       <ul>
    //         <li className="py-2 text-sm">About</li>
    //         <li className="py-2 text-sm">Blog</li>
    //         <li className="py-2 text-sm">Commerce</li>
    //         <li className="py-2 text-sm">Insights</li>
    //       </ul>
    //     </div>
    //     <div>
    //       <h6 className="font-medium text-gray-400">Legal</h6>
    //       <ul>
    //         <li className="py-2 text-sm">Claim</li>
    //         <li className="py-2 text-sm">Policy</li>
    //         <li className="py-2 text-sm">Terms</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="dark:bg-gray-100 bg-white text-center relative">
      <div className="max-w-[1240px] mx-auto ">
        <div className="py-8 px-4 flex justify-center">
          <a href="#home">
            <img src={Frame7} alt="" />
          </a>
        </div>
        <div className=" border-b-2"></div>
        <div>
          <h1 className="text-black py-4">
            © 2023 DevDrive | Powered by DevDrive
          </h1>
        </div>
      </div>
      <div className="w-12 bottom-4 max-md:hidden right-8 absolute bg-white rotate-[180deg]">
        <a href="#home">
          <img src={Frame8} alt="" />
        </a>
      </div>
    </div>
  );
};

export default footer;

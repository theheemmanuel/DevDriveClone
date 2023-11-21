import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, getMenu] = useState(false);

  // const handleNav = () => {
  //   getMenu(!menu);
  // };

  return (
    <div
      id="home"
      className="dark:bg-black dark:text-white text-black bg-white flex dark:border-white border-b items-center h-24 justify-between max-w-[1280px] px-6 mx-auto z-100"
    >
      <h1 className="text-3xl font-bold text-[#00DF9a]">DevDrive.</h1>
      <ul className="flex max-md:hidden uppercase text-xl">
        <a href="#home">
          <li className="p-4 hover:border-b border-[#00DF9a]">Home</li>
        </a>
        <a href="#about">
          <li className="p-4 hover:border-b border-[#00DF9a]">About</li>
        </a>
        <a href="#plans">
          <li className="p-4 hover:border-b border-[#00DF9a]">Offerings</li>
        </a>
        <a href="#contact">
          <li className="p-4 hover:border-b border-[#00DF9a]">Contact</li>
        </a>
      </ul>
      <div
        onClick={() => {
          getMenu(!menu);
        }}
        className="md:hidden"
      >
        {menu ? (
          <AiOutlineClose color="#00DF9a" size={35} />
        ) : (
          <CiMenuFries color="#00DF9a" size={35} />
        )}
      </div>

      <div
        className={
          menu
            ? "fixed left-0 top-0 pt-8 h-full dark:bg-black text-black dark:text-white bg-white p-4 w-[60%] text-center border-r md:hidden font-bold border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00DF9a]">DevDrive.</h1>
        <ul className="p-4 uppercase">
          <a onClick={() => getMenu(!menu)} href="#home">
            <li className="p-8 border-b border-t border-gray-500">Home</li>
          </a>
          <a onClick={() => getMenu(!menu)} href="#about">
            <li className="p-8 border-b border-gray-500">About</li>
          </a>
          <a onClick={() => getMenu(!menu)} href="#plans">
            <li className="p-8 border-b border-gray-500">Offerings</li>
          </a>
          <a onClick={() => getMenu(!menu)} href="#contact">
            <li className="p-8 border-b border-gray-500">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

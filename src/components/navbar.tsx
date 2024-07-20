import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [menu, getMenu] = useState(false);
  const [darker, lighter] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("mode");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      lighter(true);
    } else {
      document.documentElement.classList.remove("dark");
      lighter(false);
    }
  }, [lighter]);

  return (
    <>
      <div className="fixed bottom-4 left-2 z-50">
        <button
          onClick={() => {
            lighter(!darker);
            if (!darker) {
              document.documentElement.classList.add("dark");
              localStorage.setItem("mode", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("mode", "light");
            }
          }}
          className=" bg-gray-300 dark:bg-white hover:scale-110 border border-white text-2xl font-bold text-white py-2 px-2 dark:border-black dark:text-black rounded-full"
        >
          {darker ? <MdDarkMode color="black" /> : <IoSunnyOutline />}
        </button>
      </div>
      <div className="bg-white dark:bg-black">
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
                ? "fixed left-0 top-0 pt-8 h-full dark:bg-black text-black dark:text-white bg-white p-4 w-[60%] text-center border-r md:hidden font-bold border-r-gray-900 duration-500 z-10"
                : "fixed left-[-100%] duration-500"
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
      </div>
    </>
  );
};

export default Navbar;

import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  nav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, nav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform ${navOpenStyle} transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0 bottom-0 bg-[#6d096b]`}
    >
      {/* close icon */}
      <XMarkIcon
        onClick={closeNav}
        className="w-8 h-8 absolute top-8 text-white z-[202] right-8"
      />
      {/* nav links */}
      <ul className=" relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center ">
        <li className="text-[25px] cursor-pointer text-yellow-300 ">
          <a href="/">Home</a>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <a href="/">About</a>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <a href="/">Services</a>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <a href="/">Customer</a>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <a href="/">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;

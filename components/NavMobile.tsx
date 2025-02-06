import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul className={`text-white ${navOpenStyle} fixed flex flex-col items-center h-[100%] justify-center transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
        <li>
          <a className="nav_link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav_link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav_link" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav_link" href="#projects">
            Projects
          </a>
        </li>
        {/* <li>
          <a className="nav_link" href="#">
            Blog
          </a>
        </li> */}
        <li>
          <a className="nav_link" href="#contact">
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;

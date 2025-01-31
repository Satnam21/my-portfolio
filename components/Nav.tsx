import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavSticky(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}>
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white md:text-[40px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">Satnam </span> Singh
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <li key={item}>
              <a className="nav_link cursor-pointer" onClick={(e) => handleScroll(e, item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="w-[2.3rem] h-[2.3rem] md:hidden text-white rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;


// import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
// import React, { useEffect, useState } from "react";

// interface Props {
//   openNav: () => void;
// }

// const Nav = ({ openNav }: Props) => {
//     const [navSticky, setNavSticky] = useState(false);

//     useEffect(() => {
//  const handler = () => {
//     if(window.scrollY >=90) {
//         setNavSticky(true);
//     }
//     if(window.scrollY <=90){
//         setNavSticky(false);
//     }   
//  };
//  window.addEventListener("scroll", handler)
//     }, []);

//     const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : ""
//   return (
//     <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}>
//       <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
//         <div className="font-logo text-white md:text-[40px]">
//           <span className="text-[30px] md:text-[40px] text-yellow-400">Satnam </span>
//           Singh
//           {/* Worriors */}
//         </div>
//         <ul className="md:flex hidden items-center space-x-10">
//           <li>
//             <a className="nav_link" href="#">
//               Home
//             </a>
//           </li>
//           <li>
//             <a className="nav_link" href="#about">
//               About
//             </a>
//           </li>
          
//           <li>
//             <a className="nav_link" href="#services">
//               Services
//             </a>
//           </li>
//           <li>
//             <a className="nav_link" href="#projects">
//               Projects
//             </a>
//           </li>
//           {/* <li>
//             <a className="nav_link" href="#">
//               Blog
//             </a>
//           </li> */}
//           <li>
//             <a className="nav_link" href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <Bars3CenterLeftIcon
//           onClick={openNav}
//           className="w-[2.3rem] h-[2.3rem] md:hidden text-white rotate-180"
//         />
//       </div>
//     </div>
//   );
// };

// export default Nav;

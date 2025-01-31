import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-yellow-400]">
              Satnam Singh
            </span>
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Passionate front-end developer with expertise in React.js and Next.js, committed to creating seamless, visually appealing, and high-performance web experiences.
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            <a href="mailto:satnamsingh23141@gmail.com">satnamsingh23141@gmail.com</a>
          </p>
        </div>

        {/* ✅ Quick Links with Smooth Scrolling */}
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Links
          </h1>
          {["about", "services", "projects", "contact"].map((item) => (
            <p
              key={item}
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300"
            >
              <a onClick={(e) => handleScroll(e, item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </p>
          ))}
        </div>

        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Address</h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">Bathinda, Punjab, India</p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              <a href="mailto:satnamsingh23141@gmail.com">satnamsingh23141@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              <a href="tel:9517509054">+91 95175 09054</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-center">
        &#169; 2025 Copyright Satnam Singh
      </div>
    </div>
  );
};

export default Footer;


// import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="pt-[5rem] pb-[3rem] bg-gray-900">
//       <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
//         <div>
//           <div className="font-logo text-white text-[18px]">
//             <span className="text-[30px] md:text[40px] text-yellow-400]">
//               Satnam Singh
//             </span>
//           </div>
//           <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
//             {/* Innovative front-end developer(React JS) with 2 years of experience
//             in building websites. Proficient in HTML, CSS and JavaScript using a
//             modern library such as React JS and Next JS. */}
//             Passionate front-end developer with expertise in React.js and
//             Next.js, committed to creating seamless, visually appealing, and
//             high-performance web experiences. With a focus on innovation and
//             user-centric design, I continuously strive to improve my skills and
//             stay ahead of industry trends to deliver the best solutions.
//           </h1>
//           <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
//             <a href="mailto:satnamsingh23141@gmail.com">
//               satnamsingh23141@gmail.com
//             </a>
//           </p>
//         </div>
//         <div className="md:mx-auto">
//           <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
//             Quick Link
//           </h1>
//           <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
//             <a href="#about">About</a>
//           </p>
//           <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
//             <a href="#services">Services</a>
//           </p>
//           <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
//             <a href="#projects">Project</a>
//           </p>
//           <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
//             <a href="#contact">Contact</a>
//           </p>
//           {/* <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
//             Address
//           </p> */}
//         </div>
//         <div className="lg:mx-auto">
//           <h1 className="text-white front-semibold mb-[1.4rem] text-[17px]">
//             Address
//           </h1>
//           <div className="flex items-center mt-[1rem] space-x-2">
//             <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
//             <p className="text-[17px] font-normal text-white opacity-75">
//               Bathinda, Punjab, India
//             </p>
//           </div>
//           <div className="flex items-center mt-[1rem] space-x-2">
//             <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
//             <p className="text-[17px] font-normal text-white opacity-75">
//               <a href="mailto:satnamsingh23141@gmail.com">
//                 satnamsingh23141@gmail.com
//               </a>
//             </p>
//           </div>
//           <div className="flex items-center mt-[1rem] space-x-2">
//             <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
//             <p className="text-[17px] font-normal text-white opacity-75">
//               <a href="tel:9517509054">+91 95175 09054</a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-center">
//         &#169; 2025 Copyright Satnam Singh
//       </div>
//     </div>
//   );
// };

// export default Footer;

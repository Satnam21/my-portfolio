import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="w-[100vw] pt-[4vh] md:pt-[12vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div className="mt-[60px] mb-[20px]">
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              WELCOME TO MY WORLD
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                Hi, I'm <span className="text-yellow-300">Satnam Singh</span>
              </h1>
              <TypeWriteEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]"
            >
              {/* Innovative front-end developer(React JS) with 2 years of experience in building
websites. Proficient in HTML, CSS and JavaScript using a modern library
such as React JS and Next JS. */}
              Innovative Front-End Developer specializing in React.js with 2
              years of experience in crafting dynamic and responsive websites.
              Proficient in HTML, CSS, and JavaScript, leveraging modern
              frameworks like React.js and Next.js to build high-performance,
              user-centric web applications.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              {/* <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white
                shadow-2xl transition-all before:absolute before:h-0 before:w before:roundedd-full before:bg-blue-600 before:duration-500 
                before:ease-out hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10">Hire Me</span>
                    </button> */}

              <a href="mailto:satnamsingh23141@gmail.com">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white
      shadow-2xl transition-all duration-500 ease-out before:absolute before:rounded-full before:h-0 before:w-0 before:bg-blue-600 
      hover:before:h-56 hover:before:w-56 hover:before:scale-110 hover:before:opacity-100 before:opacity-0 before:duration-500"
                >
                  <span className="relative z-10">Hire Me</span>
                </button>
              </a>

              <a
                href="/SATNAM-SINGH-UPDATED-CV.pdf" // Replace with your actual file path
                download="SATNAM-SINGH-UPDATED-CV.pdf"
              >
                <button
                  data-aos="zoom-out"
                  data-aos-delay="1600"
                  className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute
  before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
  before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src="/Images/banner-image.png"
              alt="hero"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

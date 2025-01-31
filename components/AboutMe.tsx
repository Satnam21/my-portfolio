import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="mt-[-4.5rem] bg-black pb-[3rem]">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-col-2 gap-[2rem]">
        <div className="md:flex md:items-center">
          <div className="md:w-[50%] mt-10">
            <p className="heading_mini">About Me</p>
            <h1 className="heading_primary">
              Professional <span className="text-yellow-400">Website</span> for
              your business
            </h1>
            <p className="mt-[1.3rem] text-[15px] opacity-75 text-white">
              {/* A professional website is more than just a digital presence—it's
              the online face of your business. With a focus on sleek design,
              intuitive navigation, and modern technologies like React and
              Next.js, I build websites that reflect your brand's identity while
              delivering seamless user experiences. Whether you need a corporate
              site, an e-commerce platform, or a portfolio, I ensure your
              website is not only visually appealing but also optimized for
              performance and responsiveness. */}
              I create high-performance, visually stunning websites using modern
              technologies like React and Next.js. Specializing in corporate,
              e-commerce, and portfolio sites, I ensure seamless user
              experiences with intuitive navigation, responsiveness, and
              optimization to enhance your brand's online presence.
            </p>
            <div className="mt-[2rem] space-y-3">
              <div
                // data-aos="zoom-in"
                // data-aos-anchor-placement="top-center"
                // data-aos-delay="200"
                className="flex items-center space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div
                // data-aos="zoom-in"
                // data-aos-anchor-placement="top-center"
                // data-aos-delay="400"
                className="flex items-end space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Backend Development</p>
              </div>
              <div
                // data-aos="zoom-in"
                // data-aos-anchor-placement="top-center"
                // data-aos-delay="200"
                className="flex items-end space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Web Development</p>
              </div>
              <div
                // data-aos="zoom-in"
                // data-aos-anchor-placement="top-center"
                // data-aos-delay="200"
                className="flex items-end space-x-4"
              >
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Mern Development</p>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto mt-[2rem]">
            <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">2</p>
                <p className="text-[20px] text-black font-600">
                  Years experience
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">2+</p>
                <p className="text-[20px] text-black font-600">Happy Clients</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">2+</p>
                <p className="text-[20px] text-black font-600">Projects Done</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">10+</p>
                {/* <p className="text-[20px] text-black font-600">Award Win</p> */}
                <p className="text-[20px] text-black font-600">
                  Course Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

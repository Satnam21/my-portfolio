import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">
            Let's Explore Popular{" "}
            <span className="text-yellow-300">Skills</span>
          </h1>
          <p className="text-white text-[15px] mb-[1.5rem] opacity-70 mt-[1.5rem]">
            In today’s fast-paced digital landscape, staying ahead requires
            mastering the latest and most in-demand technologies. From
            foundational front-end skills like HTML, CSS, and JavaScript to
            advanced frameworks such as React and Next.js, I specialize in
            building dynamic, responsive, and high-performance web applications.
            Whether it’s enhancing user experience, optimizing workflows, or
            developing scalable solutions, my expertise in modern web
            development ensures innovative and efficient digital experiences.
          </p>
          {/* <button
            className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white
      shadow-2xl transition-all duration-500 ease-out before:absolute before:rounded-full before:h-0 before:w-0 before:bg-blue-600 
      hover:before:h-56 hover:before:w-56 hover:before:scale-110 hover:before:opacity-100 before:opacity-0 before:duration-500"
          >
            <span className="relative z-10">Learn More</span>
          </button> */}
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            {/* SkillCard */}
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard title="HTML" image="/images/html.svg" percent="90%" />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard title="CSS" image="/images/css.svg" percent="85%" />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard
                title="JavaScript"
                image="/images/js.svg"
                percent="70%"
              />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="75%"
              />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
            >
              <SkillCard
                title="TypeScript"
                image="/images/ts.svg"
                percent="70%"
              />
            </div>

            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard
                title="Node js"
                image="/images/node.svg"
                percent="40%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard
                title="MongoDB"
                image="/images/mongo.svg"
                percent="50%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard
                title="Python"
                image="/images/python.svg"
                percent="40%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

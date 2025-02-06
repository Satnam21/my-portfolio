import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading_mini">Popular Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/* services card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServiceCard title="React Website" num="01" description="I build high-performance and scalable React websites with modern UI/UX designs, optimized for speed and responsiveness."/>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard title="Next js Website" num="02" description="I develop fast and SEO-friendly Next.js websites with server-side rendering (SSR) and static site generation (SSG) for enhanced performance." />
        </div>
        {/* <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard title="Fullstack Website" num="03" description="I create full-stack web applications with seamless frontend and backend integration, ensuring robust and dynamic user experiences."/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ServiceCard title="Node js Api" num="04" description="I develop scalable and secure RESTful and GraphQL APIs using Node.js and Express, ensuring smooth backend operations."/>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="800">
          <ServiceCard title="Mern WebApp" num="05" description="I build dynamic and feature-rich web applications using the MERN stack (MongoDB, Express, React, Node.js) for complete end-to-end solutions."/>
        </div> */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1000">
          <ServiceCard title="Bug Fixing" num="03" description="I troubleshoot and resolve frontend and backend issues, improving performance, security, and functionality of your applications."/>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='projects' className='bg-gray-900 pt-[5rem] pb-[3rem]'>
      <div className='text-center'>
        <p className='heading_mini'>Recents Works</p>
        <h1 className='heading_primary'>
            My Best <span className='text-yellow-300'>Projects</span>
        </h1>
      </div>
      {/* project card */}
      {/* <ProjectCard title="E-Commerce Website" tech1="React js" tech2="Next js" tech3="Talwind" tech4="Typescript" image="/images/p1.png" /> */}
      <ProjectCard title="Portfolio Website" description="I am building a modern and responsive portfolio website using
          React.js, Next.js, Tailwind CSS, and TypeScript. This project
          showcases my skills, experience, and projects with a clean and
          minimalistic design."
           tech1="React js" tech2="Next js" tech3="Talwind" tech4="Typescript" image="/images/p2.png" />
      {/* <ProjectCard title="Fullstack Food Delivery Webapp" tech1="React js" tech2="Next js" tech3="Node js" tech4="MongoDB" image="/images/p4.png" /> */}
      <ProjectCard title="Unionville College Website" description="Unionville College (UC), formerly known as Unionville Montessori
              School, is a distinguished co-educational, non-denominational
              private institution registered with the Ontario Ministry of
              Education and Training." tech1="React js" tech2="Next js" tech3="SCSS" tech4="TypeScript" image="/images/Unionville_College.jpg" />
      {/* <ProjectCard title="Travel Website" tech1="React js" tech2="Next js" tech3="Talwind" tech4="Typescript" image="/images/p3.png" /> */}
      <ProjectCard title="The Beer Store" description="The Beer Store is a prominent retailer and distributor of beer in Ontario, Canada, offering customers access to over 1,000 beer brands from more than 200 brewers worldwide. With a network of over 440 retail stores, The Beer Store provides a vast selection of beers to cater to diverse tastes." tech1="React js" tech2="Next js" tech3="Talwind" tech4="Typescript" image="/images/the-beer-store.png" />
    </div>
  )
}

export default Project

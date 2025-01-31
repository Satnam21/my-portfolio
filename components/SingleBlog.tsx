// import { CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/16/solid';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import React from 'react';

// const SingleBlog = () => {
//   const router = useRouter();
//   const { title, comment, date, image } = router.query;

//   return (
//     <div className="pt-[5rem] pb-[3rem] bg-black text-white">
//       <div className="w-[85%] mx-auto max-w-6xl">
//         <div className="text-center mb-8">
//           <p className="text-yellow-400 text-lg uppercase font-semibold">Blog Post</p>
//           {/* <h1 className="text-4xl font-bold text-white">{title || "Fullstack Developer Roadmap"}</h1> */}
//           <h1 className="heading_primary">
//           Fullstack <span className="text-yellow-300">Developer</span> Roadmap
//         </h1>
//         </div>
//         <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden">
//           <Image src={image || '/images/p1.png'} alt='blog' layout="fill" objectFit="cover" className="rounded-xl" />
//         </div>
//         <div className="flex items-center justify-between text-gray-400 mb-6 border-b border-gray-700 pb-4">
//           <div className="flex items-center space-x-2">
//             <CalendarIcon className='w-5 h-5 text-yellow-400' />
//             <p>{date || "24 January 2024"}</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <ChatBubbleLeftRightIcon className='w-5 h-5 text-yellow-400' />
//             <p>{comment || "4 Comments"}</p>
//           </div>
//         </div>
        
//         <div className="text-lg leading-relaxed text-gray-300 space-y-6">
//         <h2 className="text-[25px] text-white">1. Frontend Development</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">1. Frontend Development</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">Frontend development focuses on creating the user interface (UI) and improving the user experience (UX). The key technologies you need to learn are:</p>
//           <ul className="list-disc list-inside space-y-2 mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">
//             <li ><strong>HTML & CSS</strong> – Learn semantic HTML and modern CSS techniques like Flexbox, Grid, and animations.</li>
//             <li><strong>JavaScript (ES6+)</strong> – Master core concepts like closures, promises, async/await, and event delegation.</li>
//             <li><strong>Frontend Frameworks</strong> – Learn React.js, Next.js, or Vue.js for building modern, scalable applications.</li>
//             <li><strong>State Management</strong> – Use Redux, Zustand, or React Context API for handling global states.</li>
//             <li><strong>Responsive Design</strong> – Implement Tailwind CSS or Bootstrap for mobile-friendly designs.</li>
//           </ul>
          
//           <h2 className="text-[25px] text-white">2. Backend Development</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">2. Backend Development</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">Backend development involves handling business logic, data storage, and API creation. Key technologies include:</p>
//           <ul className="list-disc list-inside space-y-2 mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">
//             <li><strong>Programming Languages</strong> – Learn Node.js with Express.js, Django (Python), or Spring Boot (Java).</li>
//             <li><strong>Databases</strong> – Understand SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases.</li>
//             <li><strong>RESTful APIs & GraphQL</strong> – Learn how to build and consume APIs efficiently.</li>
//             <li><strong>Authentication & Security</strong> – Implement JWT, OAuth, and bcrypt for user authentication.</li>
//             <li><strong>Microservices & Serverless</strong> – Explore scalable architectures for backend systems.</li>
//           </ul>
          
//           <h2 className="text-[25px] text-white">3. Version Control & Deployment</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">3. Version Control & Deployment</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">Mastering version control and deployment ensures smooth collaboration and application management.</p>
//           <ul className="list-disc list-inside space-y-2 mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">
//             <li><strong>Git & GitHub</strong> – Use Git for version control and GitHub for collaboration.</li>
//             <li><strong>CI/CD Pipelines</strong> – Automate deployments using GitHub Actions, Jenkins, or CircleCI.</li>
//             <li><strong>Hosting & Deployment</strong> – Deploy frontend using Vercel/Netlify and backend using Heroku/AWS.</li>
//           </ul>
          
//           <h2 className="text-[25px] text-white">4. DevOps & Cloud Technologies</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">4. DevOps & Cloud Technologies</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">For advanced development, explore DevOps tools and cloud services.</p>
//           <ul className="list-disc list-inside space-y-2 mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">
//             <li><strong>Docker & Kubernetes</strong> – Learn containerization and orchestration.</li>
//             <li><strong>Cloud Services</strong> – Gain expertise in AWS (EC2, S3, Lambda), Google Cloud, or Azure.</li>
//             <li><strong>Monitoring & Logging</strong> – Use Prometheus, Grafana, or New Relic for application monitoring.</li>
//           </ul>
          
//           <h2 className="text-[25px] text-white">5. Soft Skills & Best Practices</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">5. Soft Skills & Best Practices</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">Great developers possess both technical skills and essential soft skills.</p>
//           <ul className="list-disc list-inside space-y-2 mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">
//             <li><strong>Problem-Solving</strong> – Practice Data Structures & Algorithms for optimized coding.</li>
//             <li><strong>Collaboration & Communication</strong> – Work in teams and follow Agile methodologies.</li>
//             <li><strong>Writing Clean Code</strong> – Follow DRY (Don't Repeat Yourself) and SOLID principles.</li>
//           </ul>

//           <h2 className="text-[25px] text-white">Final Thoughts</h2>
//           {/* <h2 className="text-2xl font-semibold text-yellow-400">Final Thoughts</h2> */}
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">The Fullstack Developer journey is challenging but rewarding. Keep building projects, contributing to open-source, and staying updated with industry trends. 🚀</p>
//           <p className="mt-[1.2rem] text-[15px] md:text-[17px]  text-[#c4cfde]">Start small, practice consistently, and you'll soon become a highly skilled Fullstack Developer! 💡</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;
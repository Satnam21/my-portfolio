import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div id="contact" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading_mini">Get In Touch</p>
          <h1 className="heading_primary">
            Let&apos;s make your <span className="text-yellow-400">Brand</span>
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Have a project in mind or need a skilled developer to bring your ideas to life? Let&apos;s collaborate!
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
            <a href="tel:9517509054">+91 95175 09054</a>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          ></textarea>
          <button
            type="submit"
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4"
          >
            Send Message
          </button>
          {status && <p className="text-white mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;



// import React from "react";

// const Contact = () => {
//   return (
//     <div className="pt-[5rem] pb-[3rem] bg-gray-900">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
//         <div>
//           <p className="heading_mini">Get In Touch</p>
//           <h1 className="heading_primary">
//             Lets make your <span className="text-yellow-400">Brand</span>{" "}
//           </h1>
//           <p className="text-[15px] text-white mt-[1rem] opacity-75">
//             Have a project in mind or need a skilled developer to bring your
//             ideas to life? Let’s collaborate! Whether you have questions, need a
//             consultation, or want to discuss potential opportunities, feel free
//             to reach out.
//           </p>
//           <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
//             <a href="tel:9517509054">+91 95175 09054</a>
//           </h1>
//         </div>
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
//             <input
//               type="text"
//               placeholder="Name"
//               className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Subject"
//             className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
//           />
//           <textarea
//             placeholder="Message"
//             rows={4}
//             className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
//           ></textarea>
//           <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import pic from "../assets/images/me.webp";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 relative project-image-card-reverse items-center" id="contact">
      <img
        src={pic}
        alt=""
        className="h-[340px] w-[340px] hover:rotate-[-20deg] transition duration-300 cursor-pointer z-10 hidden md:inline"
      />
      <div className="p-10 bg-white rounded-xl md:col-span-2 shadow-2xl z-10">
        <h3 className="text-title mb-4">let's work together</h3>
        <div className="text-indigo-600 text-xl font-bold mb-10">
          _contact me
        </div>
        <form action="">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="font-medium text-gray-500 mb-2.5 block"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block rounded p-2 border-2 w-full bg-gray-100 text-gray-700 font-medium outline-none"
              placeholder="your email"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="font-medium text-gray-500 mb-2.5 block"
            >
              Message
            </label>
            <textarea
              id="message"
              className="block rounded p-2 border-2 w-full h-[150px] bg-gray-100 text-gray-700 font-medium outline-none"
              placeholder="your message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

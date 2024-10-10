"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailSubmitted(true)

    // const data = {
    //   email: e.target.value,
    // };
  
    // const JSONdata = JSON.stringify(data);
    // const endpoint = "/api/send";
  
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONdata,
    // };
  
    // try {
    //   const response = await fetch(endpoint, options);
  
    //   if (response.ok) {
    //     const resData = await response.json();
    //     console.log("Message sent successfully.");
    //     setEmailSubmitted(true);
    //   } else {
    //     console.error("Failed to send message:", response.status);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }

    e.target.reset();
  };
  

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center  py-24 relative"
    >
      <div className="text-center z-10">
        <h5 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md mx-auto">
          I&apos;m currently looking for new opportunities. My inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Link href="https://github.com/Arpitkandwal" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/arpit-kandwal-52708a26a/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-md">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm text-center mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

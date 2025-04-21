"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import gmailIcon from "../../../public/gmail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen py-24 px-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 text-center max-w-2xl mx-auto">
        <h5 className="text-3xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-8 text-lg">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex justify-center gap-6">
          <Link 
            href="https://github.com/harktank" 
            target="_blank"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Image src={GithubIcon} alt="Github Icon" width={42} height={42} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/himanshu-ghode-80a857261/" 
            target="_blank"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={42} height={42} />
          </Link>
          <Link 
            href="https://www.instagram.com/m_r_p_r_e_m_05?igsh=MTFzeWdheno5aTd6dQ==" 
            target="_blank"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Image src={InstagramIcon} alt="Instagram Icon" width={42} height={42} />
          </Link>
          <Link 
            href="mailto:ghodehimanshu453@gmail.com" 
            target="_blank"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <Image src={gmailIcon} alt="gmail Icon" width={42} height={42} />
          </Link>
           
       
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
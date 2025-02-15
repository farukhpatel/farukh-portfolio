"use client";

import Image from "next/image";
import hackerImg from "../public/images/hero.webp"; // Replace with your image path
import ReactTypingEffect from "react-typing-effect";
import { mailToHref } from "../utills/constant";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex  bg-background text-white "
    >
      <div className="container mx-auto px-6 pt-24 md:pt-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2  md:text-left">
          <p className="text-xl text-textSecondary">Hey there,</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
            I&apos;m <span className="text-primary ">Farukh Patel</span>
          </h1>
          <div className="text-primarySecondary mt-2 h-[30px]">
            <span className="text-primarySecondary text-3xl md:text-4xl">
              <ReactTypingEffect
                text={[
                  "React Developer",
                  "Frontend Engineer",
                  "MERN Stack Developer",
                  "JavaScript Enthusiast",
                ]}
                typingDelay={200}
                speed={30}
                eraseSpeed={30}
                eraseDelay={1500}
              />
            </span>
          </div>

          <p className="text-textSecondary text-lg mt-4 max-w-md">
            A passionate MERN Stack Developer dedicated to building scalable and
            user-friendly web applications. With expertise in React, Redux, and
            performance optimization, I strive to craft seamless digital
            experiences and solve real-world problems through innovative
            technology solutions.
          </p>

          {/* Call to Action Button */}
          <a href={mailToHref} target="_blank" rel="noopener noreferrer">
            <button className="mt-6 bg-primarySecondary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300">
              Get in Touch
            </button>
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:flex md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src={hackerImg}
            alt="Hacker Image"
            width={500}
            height={500}
            className="mix-blend-mode rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Floating Stats */}
      {/* <div className="absolute bottom-10 right-10 text-right space-y-4">
        <p className="text-white text-3xl font-bold">
          10 <span className="text-primary">+</span>
        </p>
        <p className="text-textSecondary">Years of experience</p>

        <p className="text-white text-3xl font-bold">
          600 <span className="text-primary">+</span>
        </p>
        <p className="text-textSecondary">Completed projects</p>

        <p className="text-white text-3xl font-bold">
          300 <span className="text-primary">+</span>
        </p>
        <p className="text-textSecondary">Satisfied clients</p>
      </div> */}
    </section>
  );
}

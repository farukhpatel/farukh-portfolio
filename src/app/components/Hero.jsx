"use client";

import Image from "next/image";
import hackerImg from "../public/images/hero.webp"; // Replace with your image path

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex  bg-background text-white "
    >
      <div className="container mx-auto px-6 pt-24 md:pt-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-textSecondary">Hey there,</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            I'm <span className="text-primary">Farukh Patel</span>
          </h1>
          <p className="text-primarySecondary text-xl mt-2">
            - React Developer
          </p>
          <p className="text-textSecondary mt-4 max-w-md">
            A dedicated React developer.From the very beginning of my journey,
            I've a deep-seated passion for solving real-world problems through
            innovative technology solutions.
          </p>

          {/* Call to Action Button */}
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-300">
            Get in touch
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
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

// import Link from "next/link";
// export default function Hero() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-background text-white"
//     >
//       <div className="text-center">
//         <h1 className="text-6xl font-bold">Your Name</h1>
//         <p className="mt-4 text-xl">
//           Frontend Developer | Building Modern Web Experiences
//         </p>
//         <Link
//           href="#projects"
//           className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
//         >
//           View My Work
//         </Link>
//       </div>
//     </section>
//   );
// }

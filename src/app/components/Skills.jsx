import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiSass,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <SiJavascript />, name: "JavaScript", level: 90 },
    { icon: <SiReact />, name: "React", level: 90 },
    { icon: <SiTypescript />, name: "TypeScript", level: 80 },
    { icon: <SiNextdotjs />, name: "Next.js", level: 85 },
    { icon: <SiCss3 />, name: "CSS", level: 95 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90 },
    { icon: <SiSass />, name: "SCSS", level: 85 },
    { icon: <SiNodedotjs />, name: "Node.js", level: 80 },
    { icon: <SiMongodb />, name: "MongoDB", level: 70 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-left text-primary mb-12 font-headings"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center space-x-4 p-4 hover:bg-secondary rounded-lg transition-all duration-300"
            >
              <div className="text-4xl group-hover:text-primarySecondary transition-colors duration-300">
                {skill.icon}
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="font-para text-text">{skill.name}</span>
                  <span className="font-para text-textSecondary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div
                    className="h-2 bg-gradient-to-r from-primarySecondary to-primary rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

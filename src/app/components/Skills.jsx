import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript />, level: 85 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    { name: "Node.js", icon: <FaNodeJs />, level: 70 },
    { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl text-blue-600">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <div className="mt-2 h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

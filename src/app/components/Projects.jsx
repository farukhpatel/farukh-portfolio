import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Timecounts Volunteer Management",
      description:
        "A volunteer tracking system with scheduling and reporting features.",
      tech: [
        "React.js",
        "Redux",
        "Redux Toolkit",
        "Material UI",
        "Ruby on Rails",
      ],
      link: "https://join.timecounts.app/",
    },
    {
      title: "Timecounts Check-in Kiosk",
      description:
        "Built a self-service check-in kiosk for volunteers, enabling seamless event registration and attendance tracking.",
      tech: [
        "Next.js",
        "React.js",
        "Redux",
        "Redux Toolkit",
        "Material UI",
        "Ruby on Rails",
      ],
    },
    {
      title: "Side (Finance & Calendar Modules)",
      description:
        "Developed finance and calendar modules with PDF export and drag-and-drop scheduling.",
      tech: ["React.js", "Redux", "Context API", "Bootstrap", "Python"],
    },
    {
      title: "Bandhify (Dairy Admin Panel)",
      description:
        "Integrated APIs for admin panel data display and implemented Firebase push notifications.",
      tech: ["React.js", "Context API", "Material UI", "PHP"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const techVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-left text-primary mb-12 font-headings"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-secondary"
            >
              <div className="h-auto">
                <div className=" p-6 space-y-4">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="flex text-2xl font-bold text-text gap-2"
                  >
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink
                          onClick={() => {}}
                          className="text-2xl text-textSecondary group-hover:text-primary transition-colors cursor-pointer"
                        />
                      </a>
                    )}
                  </motion.h3>

                  <p className="text-textSecondary font-para">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={techVariants}
                        className="px-3 py-1 bg-secondary text-textSecondary rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        backgroundColor: "#EF4444",
                        color: "#F5F5F5",
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primarySecondary text-background font-para font-medium mt-4 cursor-pointer "
                    >
                      Live
                      <TbArrowBigRightLineFilled className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

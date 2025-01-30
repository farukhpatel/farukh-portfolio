export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern shopping interface built with React and Redux.",
      image: "/project1.jpg",
      tech: ["React", "Redux", "Tailwind CSS"],
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Social Media App",
      description: "Real-time interactions using Next.js and Firebase.",
      image: "/project2.jpg",
      tech: ["Next.js", "Firebase", "TypeScript"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:underline"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

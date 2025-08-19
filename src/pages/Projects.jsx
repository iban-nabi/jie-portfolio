import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>No projects found</div>;
  }

  const { title, description, image, technologies } = projects[currentProjectIndex];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white py-12">
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-12">Projects</h1>
      
      <div className="w-full sm:w-3/4 flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 pr-6 pl-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
            <p className="text-lg sm:text-xl mt-2 sm:mt-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-9 sm:mt-20 space-x-3 sm:space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProjectIndex(index)}
            className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full ${
              currentProjectIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

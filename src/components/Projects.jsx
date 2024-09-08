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
    if (currentProjectIndex < projects.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    } else {
      setCurrentProjectIndex(0); 
    }
  };

  const previousProject = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    } else {
      setCurrentProjectIndex(projects.length - 1);
    }
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
      <h1 className="text-6xl font-bold mb-12">Projects</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={previousProject}
          className="text-4xl text-gray-600 hover:text-gray-900"
        >
          &lt;
        </button>


        <div className="w-3/4 grid grid-cols-2 gap-8">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-xl mt-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextProject}
          className="text-4xl text-gray-600 hover:text-gray-900"
        >
          &gt;
        </button>
      </div>


      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProjectIndex(index)}
            className={`h-4 w-4 rounded-full ${
              currentProjectIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

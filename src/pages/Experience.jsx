const experiences = [
  {
    company: "Qualicom Innovations (Asia) Limited",
    logo: "./qualicom.jpg",
    role: "Intern Programmer (Remote)",
    dateRange: "Jan 2025 - May 2025",
    details: [
      "Researched and proposed AI-driven solutions for a toy company,streamlining operations and processes.",
      "Supported a retail client’s commission system project by conducting requirements analysis, contributing to system design, and ensuring alignment with business needs.",
      "Produced comprehensive project documentation, including Business Requirements Document (BRD), Entity Relationship Diagram (ERD), use cases, and process flow diagrams, ensuring clarity and alignment throughout the development process.",
      "Designed and implemented a prototype rule engine for commission eligibility using Java, Spring Boot, and SQL, enhancing accuracy and reducing manual processing.",
    ],
  },
];

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 mt-8">
      <div className="bg-white rounded-lg shadow-lg mt-8 p-6 sm:p-10 md:p-16 max-w-screen-xl w-full">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-14 mt-5 sm:mt-7">
          Work Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl shadow-md overflow-hidden p-4 md:p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center w-full md:w-72 mb-4 md:mb-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-lg shadow"
                />
              </div>

              <div className="flex-1 md:ml- text-center md:text-left">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="font-medium mt-2 text-lg">{exp.role}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.dateRange}</p>
                <ul className="list-disc ml-5 space-y-3 text-gray-700 text-base text-left inline-block">
                  {exp.details.map((item, i) => (
                    <li className="text-lg sm:text-xl mt-2 sm:mt-4" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

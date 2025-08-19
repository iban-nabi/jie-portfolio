function TechStack() {
  return (
    <div className="bg-white px-4 sm:px-16 md:px-32 lg:px-48 2xl:px-72 mt-10 sm:mt-20 justify-center mb-16">

      <div className="space-y-2 sm:space-y-8 self-start text-center sm:text-left mb-16">
        <span className="text-4xl sm:text-6xl font-bold text-black">Tech Stack</span>
        <p className="text-lg sm:text-2xl md:text-3xl">
          Experienced using different types of technologies but mostly prefers
          working with Java and JavaScript with Node.js.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24 justify-items-center self-start sm:mt-14 auto-rows-auto">
        <img
          src="./java.svg"
          alt="Java Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./javascript-js.svg"
          alt="JavaScript Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./nodejs-original.svg"
          alt="Node Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./python.svg"
          alt="Python Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./mysql.svg"
          alt="SQL Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./mongodb.svg"
          alt="Mongodb Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./react-2.svg"
          alt="React Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./tailwindcss.svg"
          alt="Tailwind Logo"
          className="w-16 h-16 sm:w-28 sm:h-28"
        />
        <img
          src="./html-css.svg"
          alt="HTML-CSS Logo"
          className="ml-0 sm:ml-4 w-48 h-16 sm:w-60 sm:h-28 col-span-2 sm:col-span-1"
        />
      </div>
    </div>
  );
}

export default TechStack;

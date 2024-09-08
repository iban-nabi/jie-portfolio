function TechStack() {
    return (
      <div className="grid grid-cols-2 items-start min-h-screen bg-white px-52 mt-20">
  
        {/* Left Column - Title and Description */}
        <div className="space-y-8 self-start">
          <span className="text-6xl font-bold text-black">Tech Stack</span>
          <p className="text-3xl">
            Experienced using different types of technologies but mostly prefers
            working with Java and JavaScript with Node.js
          </p>
        </div>
  
        {/* Right Column - Technology Logos */}
        <div className="grid grid-cols-3 gap-8 justify-items-center self-start space-y-4">
          <img
            src="./java.svg"
            alt="Java Logo"
            className="w-32 h-32"
          />
          <img
            src="./javascript-js.svg"
            alt="JavaScript Logo"
            className="w-32 h-32"
          />
          <img
            src="./nodejs-original.svg"
            alt="Node Logo"
            className="w-32 h-32"
          />
          <img
            src="./python.svg"
            alt="Python Logo"
            className="w-32 h-32"
          />
          <img
            src="./mysql.svg"
            alt="SQL Logo"
            className="w-32 h-32"
          />
          <img
            src="./mongodb.svg"
            alt="Mongo Logo"
            className="w-32 h-32"
          />
        </div>
      </div>
    );
  }
  
  export default TechStack;
  
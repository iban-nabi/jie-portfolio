function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="relative">
                <img
                    className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
                    src="./me.png"
                    alt="About Me"
                />
            </div>

            <div className="bg-white rounded-lg shadow-lg mt-8 p-6 sm:p-10 md:p-16 max-w-screen-xl w-full text-center">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 md:mb-14 mt-5 sm:mt-7">
                    About Me
                </h2>
                <p className="text-gray-700 text-lg sm:text-xl md:text-2xl px-4 sm:px-10 md:px-14 mb-5 sm:mb-7 ">
                    I am a hard-working and responsible individual who enjoys working with backend technologies and solving logic-related problems. 
                    I can work in both independent and group scenarios. I am dedicated to completing my tasks and projects and am open to learning 
                    new knowledge and skills that will help me grow in the tech industry.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" src="./name.svg" alt="name" />
                        <span className="text-sm sm:text-lg md:text-xl">Jan Ivan Ezra D. Paguyo</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" src="./location.svg" alt="location" />
                        <span className="text-sm sm:text-lg md:text-xl">Baguio City, Philippines</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" src="./education.svg" alt="education" />
                        <span className="text-sm sm:text-lg md:text-xl">Saint Louis University</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1" src="./personality.svg" alt="personality" />
                        <span className="text-sm sm:text-lg md:text-xl">ISFP-T</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

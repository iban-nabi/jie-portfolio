function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="relative">
                <img
                    className="w-80 h-80 rounded-full object-cover shadow-lg"
                    src="./me.png"
                    alt="About Me"
                />
            </div>

            <div className="bg-white rounded-lg shadow-lg mt-8 p-16 max-w-screen-2xl w-full text-center">
                <h2 className="text-6xl font-bold mb-14 mt-7">About Me</h2>
                <p className="text-gray-700 text-3xl px-14 mb-7 sm:px-0">
                    I am a hard-working and responsible individual who enjoys working with backend technologies and solving logic-related problems. 
                    I can work in both independent and group scenarios. I am dedicated to completing my tasks and projects and am open to learning 
                    new knowledge and skills that will help me grow in the tech industry.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-5 h-5 mr-2 mt-1"  src="./name.svg" alt="name" />
                        <span className="text-xl">Jan Ivan Ezra D. Paguyo</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-5 h-5 mr-2 mt-1" src="./location.svg" alt="location" />
                        <span className="text-xl">Baguio City, Philippines</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-5 h-5 mr-2 mt-1"  src="./education.svg" alt="education" />
                        <span className="text-xl">Saint Louis University</span>
                    </div>

                    <div className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full">
                        <img className="w-5 h-5 mr-2 mt-1"  src="./personality.svg" alt="personality" />
                        <span className="text-xl">ISFP-T</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

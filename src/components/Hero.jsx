function Hero() {
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-4 md:px-20">
            <div className="mb-8 mt-8 md:mt-12 lg:mt-16">
                <img
                    className="w-80 h-80"
                    src="./public/drawing-me.jpg"
                    alt="drawing-me"
                />
            </div>

            <div className="text-center mb-4">
                <p className="text-7xl font-bold">hi i'm ezra.</p>
            </div>

            <div className="text-center mb-10 max-w-lg">
                <p className="text-2xl leading-relaxed">
                    a passionate and aspiring backend developer willingly to grow and learn much more in the tech industry.
                </p>
            </div>

            <div className="flex space-x-4 mb-10">
                <button className="bg-white text-black px-6 py-2 rounded-full focus:outline-none font-semibold">
                    contact me
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full focus:outline-none font-semibold">
                    resume
                </button>
            </div>
        </div>
    );
}

export default Hero;

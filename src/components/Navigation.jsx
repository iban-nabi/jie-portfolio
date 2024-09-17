function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center p-4 sm:p-6">
                {/* Logo Section */}
                <div>
                    <img className="w-14 sm:w-20" src="./black-logo.svg" alt="Logo" />
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 sm:space-x-10">
                    <a href="https://github.com/iban-nabi">
                        <img className="w-8 h-8 sm:w-9 sm:h-9" src="./github-mark.svg" alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/jan-ivan-ezra-paguyo">
                        <img className="w-8 h-8 sm:w-9 sm:h-10" src="./linkedin.svg" alt="LinkedIn" />
                    </a>
                </div>
            </nav>
            <hr className="border-t-2 border-gray-300" />
        </>
    );
}

export default Navigation;

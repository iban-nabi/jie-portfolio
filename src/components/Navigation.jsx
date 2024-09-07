import React from 'react';

function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center p-4">
                <div>
                    <img className="w-20" src="./public/black-logo.svg" alt="Logo Image" />
                </div>

                <div className="flex space-x-10">
                    <a href="https://github.com/iban-nabi">
                        <img className="w-10 h-13" src="./public/github-mark.svg" alt="Github Image" />
                    </a>
                    <a href="https://www.linkedin.com/in/jan-ivan-ezra-paguyo">
                        <img className="w-9 h-10 mr-7" src="jie-portfolio/public/linkedin.svg" alt="LinkedIn Image" />
                    </a>
                </div>
            </nav>
            <hr className="border-t-2 border-gray-300" />
        </>
    );
}
export default Navigation;

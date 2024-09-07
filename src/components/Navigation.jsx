import React from 'react';

function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center p-4">
                <div>
                    <img className="w-20" src="src/assets/black-logo.png" alt="Logo Image" />
                </div>

                <div className="flex space-x-10">
                    <a href="https://github.com/iban-nabi">
                        <img className="w-12 h-13" src="src/assets/icons8-github-60.png" alt="Github Image" />
                    </a>
                    <a href="https://www.linkedin.com/in/jan-ivan-ezra-paguyo">
                        <img className="w-12 h-13 mr-4" src="src/assets/icons8-linkedin-60.png" alt="LinkedIn Image" />
                    </a>
                </div>
            </nav>
            <hr className="border-t-2 border-gray-300" />
        </>
    );
}
export default Navigation;

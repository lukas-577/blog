import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full justify-between text-left">
                <div className="flex flex-col gap-2 items-center md:items-start justify-center w-full md:flex-1">
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="Lumonidy" className="w-12 md:w-16 hover:scale-110 transform transition duration-300 ease-in-out" />
                        <span className="text-lg md:text-2xl font-bold">Lumotareas</span>
                    </div>
                    <p className="text-sm md:text-base text-center md:text-left">¡Organiza tus tareas de forma sencilla y eficiente!</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start justify-center w-full md:flex-1">
                    <h3 className="text-md md:text-lg font-bold">Contacto</h3>
                    <p className="text-sm md:text-base text-center md:text-left">
                        ¿Tienes alguna duda o sugerencia? ¡Contáctanos!
                        Haz clic <Link className="text-blue-500 hover:text-blue-600" to="/contact">aquí</Link> para más información.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start justify-center w-full md:flex-1">
                    <h3 className="text-md md:text-lg font-bold">Acerca de Lumotareas</h3>
                    <p className="text-sm md:text-base text-center md:text-left">
                        Lumotareas es una aplicación web que te permite organizar tus tareas de forma sencilla y eficiente.
                        Creada por <a className="text-blue-500 hover:text-blue-600" href="/about-us">Lumonidy</a>.
                    </p>
                </div>
            </div>
            <hr className="border-gray-700 my-4" />
            <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
                <div className="flex flex-row gap-4 items-center justify-center text-xl md:text-2xl">
                    <a href="https://www.github.com" target="_blank" rel="noreferrer" className="hover:text-gray-700 hover:scale-110 transform transition duration-300 ease-in-out">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-700 hover:scale-110 transform transition duration-300 ease-in-out">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-700 hover:scale-110 transform transition duration-300 ease-in-out">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <Link
                    to="/privacy"
                    className="text-blue-500 hover:text-blue-600 text-sm md:text-base mt-4 md:mt-0">
                    Política de privacidad
                </Link>
                <p className="text-sm md:text-base mt-2 md:mt-0">
                    &copy; 2024 Lumonidy
                </p>
            </div>
        </footer>
    );
};

export default Footer;
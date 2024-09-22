import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center p-8 bg-[#1d232a] shadow-lg rounded-lg">
                <h1 className="text-9xl font-bold text-[#7480ff]">404</h1>
                <h2 className="text-3xl font-semibold mt-4 mb-2">Página No Encontrada</h2>
                {children ? (
                    <div className="text-lg mb-6 text-gray-600">
                        {children}
                    </div>
                ) : (
                    <p className="text-lg mb-6 text-gray-600">
                        Lo sentimos, la página que estás buscando no existe.
                    </p>
                )}
                <button
                    className="btn btn-primary bg-[#7480ff] text-gray-900 hover:bg-[#5f6eff] hover:text-gray-100"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
        </div>
    );
};

export default NotFound;
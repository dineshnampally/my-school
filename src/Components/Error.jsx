import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/pixelcut-export.svg'

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-[#333333]">
      {/* Logo Placeholder */}
      <img 
        src={logo}
        alt="Logo" 
        className="w-xl mb-6 object-contain"
      />

      <h1 className="text-9xl font-extrabold text-[#322819] tracking-widest">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4 text-[#5C3A21]">Oops! Page Not Found</p>
      <p className="text-lg text-[#333333] mt-2 px-6 text-center">
        The page you are looking for might have been moved or doesn't exist.
      </p>
      
      <Link
        to="/"
        className="mt-6 px-6 py-3  bg-[#50A35A] text-[#333333] font-semibold rounded-lg shadow-lg hover:bg-[#FFB347] transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;

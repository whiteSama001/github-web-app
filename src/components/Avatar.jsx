import React from "react";
import flag from "../assets/flag.png";

const Avatar = () => {
  return (
    <div className="flex items-center space-x-2	">
      <img src={flag} className="w-8 h-8 rounded-full " alt="Avatar" />
      <div className="relative">
        <button className="text-gray-800 font-semibold py-2 px-2 rounded inline-flex items-center">
          EN
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M7.343 6.657a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586 7.343 6.657z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Dropdown Content */}
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md hidden">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

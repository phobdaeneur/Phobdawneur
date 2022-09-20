import React from "react";
import { useNavigate } from "react-router-dom";
import starColor from "../images/iconTec/starcolor 1.png";
import bg from "../images/bg11.jpg";
import {
  linkcodepen,
  linkframer,
  linkfreepik,
  linksvgrepo,
  linktailus,
  linktailwindcomponents,
  linktailwindcss,
  linkunDraw,
} from "../component/link";

function DesignPage() {
  const navigate = useNavigate();
  const homeLocation = () => {
    navigate("/");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12 gap-10 bg-cover"
    >
      <div className="flex flex-col items-center gap-5 w-full">
        <label className="text-3xl lg:text-5xl font-mono text-white text-center">
          Design document
        </label>
        <button
          onClick={homeLocation}
          className="p-2 w-60 lg:w-96 pl-5 pr-5 bg-transparent from-red-600 to-green-700 text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-indigo-600 hover:to-yellow-600 hover:text-gray-100"
        >
          Home page
        </button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-16">
        <a
          target="_blank"
          rel="noopener"
          href={linksvgrepo}
          className="bg-black border-indigo-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center px-2">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              SVG repo
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Icon svg file.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linkunDraw}
          className="bg-black border-red-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              unDraw
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Illustrations.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linkfreepik}
          className="bg-black border-yellow-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent hover:scale-105 hover:opacity-80 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Freepik
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Illustrations.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linktailwindcss}
          className="bg-black border-green-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent hover:scale-105 hover:opacity-80 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Tailwind
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              UI frameworks.
            </p>
          </div>
        </a>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-16">
        <a
          target="_blank"
          rel="noopener"
          href={linktailus}
          className="bg-black border-indigo-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center px-2">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Tailus
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Components in Tailwind.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linkframer}
          className="bg-black border-red-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Framer
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              motion.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linkcodepen}
          className="bg-black border-yellow-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent hover:scale-105 hover:opacity-80 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Codepen
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              UI design.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href={linktailwindcomponents}
          className="bg-black border-green-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent hover:scale-105 hover:opacity-80 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Tailwindcomponents
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              components in Tailwind.
            </p>
          </div>
        </a>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-16">
        <a
          target="_blank"
          rel="noopener"
          href=""
          className="bg-black border-indigo-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center px-2">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              SVG repo
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Icon svg file.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href=""
          className="bg-black border-red-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-red-400 dark:hover:bg-red-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              unDraw
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Illustrations.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href=""
          className="bg-black border-yellow-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Freepik
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              Illustrations.
            </p>
          </div>
        </a>

        <a
          target="_blank"
          rel="noopener"
          href=""
          className="bg-black border-green-600 bg-opacity-30 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around items-center cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent hover:scale-105 hover:opacity-70 | transition-colors duration-500"
        >
          <img
            className="w-auto h-16 object-cover rounded-xl"
            src={starColor}
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-mono text-lg">
              Tailwind
            </p>
            <p className="text-black dark:text-gray-100 font-mono indent-4">
              React UI.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DesignPage;

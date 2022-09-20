import React from "react";
import { useNavigate } from "react-router-dom";
import ki from "../images/ki.jpg";
import library from "../images/iconTec/library.svg";
import tailwindcss from "../images/iconTec/tailwindcss.svg";
import bootstrap from "../images/iconTec/bootstrap.svg";
import bg from "../images/bg10.jpg";

function ReactPage() {
  const navigate = useNavigate();
  const libraryLocation = () => {
    navigate("/library");
  };

  const homeLocation = () => {
    navigate("/");
  };

  const tailwindLocation = () => {
    navigate("/tailwind");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col w-screen h-screen items-center justify-center gap-5 bg-cover"
    >
      <label className="text-5xl font-mono text-[#FBC0B2]">
        React document.
      </label>
      <button
        onClick={homeLocation}
        className="p-2 w-96 pl-5 pr-5 bg-transparent ring-2 ring-[#ED6E67] text-[#ED6E67] text-lg font-mono rounded-lg bg-gradient-to-r hover:from-[#3F263C] hover:to-[#DD6064] hover:ring-0 hover:text-gray-100"
      >
        Home page
      </button>

      <div className="flex flex-row gap-28">
        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-gray-400"></div>
          <div className="flex flex-col items-center gap-4 w-full h-full p-4 justify-between">
            <img src={ki} className=" w-16 h-16 rounded-full" />
            <p className="text-sm font-mono indent-8 text-white">.........</p>
            <button className="w-40 pl-5 pr-5 bg-transparent border-2 border-gray-400 text-gray-400 text-lg font-mono rounded-lg hover:bg-gray-400 hover:text-gray-100">
              LIBRARY
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-yellow-500"></div>
          <div className="flex flex-col items-center gap-4 w-full h-full p-4 justify-between">
            <img src={ki} className=" w-16 h-16 rounded-full" />
            <p className="text-sm font-mono indent-8 text-white">.........</p>
            <button className="w-40 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg font-mono rounded-lg hover:bg-yellow-500 hover:text-gray-100">
              LIBRARY
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-rose-500"></div>
          <div className="flex flex-col items-center gap-4 w-full h-full p-4 justify-between">
            <img src={ki} className=" w-16 h-16 rounded-full" />
            <p className="text-sm font-mono indent-8 text-white">.........</p>
            <button className="w-40 pl-5 pr-5 bg-transparent border-2 border-rose-500 text-rose-500 text-lg font-mono rounded-lg hover:bg-rose-500 hover:text-gray-100">
              LIBRARY
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-28">
        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-lime-500"></div>
          <div className="flex flex-col items-center gap-4 w-full h-full p-4 justify-between">
            <img src={library} className=" w-16 h-16" />
            <p className="text-sm font-mono indent-8 text-white">
              เเหล่งรวบรวม library ที่ใช้ในการเขียนเว็บไซต์ด้วย React.{" "}
            </p>
            <button
              onClick={libraryLocation}
              className="w-40 pl-5 pr-5 bg-transparent border-2 border-lime-500 text-lime-500 text-lg font-mono rounded-lg hover:bg-lime-500 hover:text-gray-100"
            >
              Library
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-indigo-500"></div>
          <div className="flex flex-col items-center gap-2 w-full h-full p-4 justify-between">
            <img src={tailwindcss} className=" w-auto h-16 rounded-full" />
            <p className="text-sm font-mono indent-8 text-white">
              Rapidly build modern websites without ever leaving your HTML.
            </p>
            <button
              onClick={tailwindLocation}
              className="w-40 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg font-mono rounded-lg hover:bg-indigo-500 hover:text-gray-100"
            >
              Tailwind
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-black bg-opacity-40 hover:bg-white hover:bg-opacity-10 w-60 h-64 pt-4">
          <div className=" w-12 h-6 bg-sky-500"></div>
          <div className="flex flex-col items-center gap-4 w-full h-full p-4 justify-between">
            <img src={bootstrap} className=" w-16 h-16 rounded-full" />
            <p className="text-sm font-mono indent-8 text-white">
              Build fast, responsive sites with Bootstrap.
            </p>
            <button className="w-40 pl-5 pr-5 bg-transparent border-2 border-sky-500 text-sky-500 text-lg font-mono rounded-lg hover:bg-sky-500 hover:text-gray-100">
              Bootstrap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactPage;

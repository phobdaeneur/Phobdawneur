import React from "react";
import { useNavigate } from "react-router-dom";
import table from "../../images/icon/table.png";
import card from "../../images/icon/card.png";
import login from "../../images/icon/login.png";
import tooltip from "../../images/icon/tooltip.png";
import radio from "../../images/icon/radio.png";
import popup from "../../images/icon/popup.png";
import dropdown from "../../images/icon/dropdown.png";
import checkbox from "../../images/icon/checkbox.png";
import datetime from "../../images/icon/datetime.png";
import calendar from "../../images/icon/calendar.png";
import text from "../../images/icon/text.png";
import homePage from "../../images/icon/homePage.png";
import alerts from "../../images/icon/alert.png";
import form from "../../images/icon/form.png";
import images from "../../images/icon/images.png";
import landing from "../../images/icon/landingPage.png";
import scroll from "../../images/icon/scroll.png";
import buttons from "../../images/icon/button2.png";
import bg from "../../images/bg13.jpg";

function Tailwind() {
  const navigate = useNavigate();
  const reactLocation = () => {
    navigate("/reactPage");
  };

  const tableLocation = () => {
    navigate("/table");
  };

  const buttonLocation = () => {
    navigate("/button");
  };

  const loginFormLocation = () => {
    navigate("/loginForm");
  };

  const textsLocation = () => {
    navigate("/text");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex flex-col gap-4 w-screen h-screen px-10 bg-black py-10 items-center bg-cover"
    >
      <div className="flex flex-row items-center justify-between w-full px-14">
        <label className="text-5xl font-mono text-white">
          Tailwind template
        </label>
        <button
          onClick={reactLocation}
          className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:ring-0 hover:text-gray-100"
        >
          React page
        </button>
      </div>

      <div className="flex flex-wrap gap-6 w-full justify-center">
        {/* Table... */}
        <div
          onClick={tableLocation}
          className="bg-blue-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer"
        >
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={table} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Tables</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">3 Template</p>
              <p className="text-white">6.5GB</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-yellow-500 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-yellow-300 ring-2 ring-yellow-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={card} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Cards</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">650 MB</p>
            </div>
          </div>
        </div>

        {/* Login form page... */}
        <div
          onClick={loginFormLocation}
          className="bg-pink-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer"
        >
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-pink-300 ring-2 ring-pink-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={login} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Logins</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">150 Files</p>
              <p className="text-white">750 MB</p>
            </div>
          </div>
        </div>

        {/* Buttons... */}
        <div
          onClick={buttonLocation}
          className="bg-indigo-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer"
        >
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-indigo-300 ring-2 ring-indigo-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={buttons} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Buttons</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">11 Template</p>
              <p className="text-white">20 MB</p>
            </div>
          </div>
        </div>

        {/* Radio button */}
        <div className="bg-orange-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-orange-400 ring-2 ring-orange-300 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={radio} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Radio button</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">20,100 Files</p>
              <p className="text-white">6.5GB</p>
            </div>
          </div>
        </div>

        {/* Modal [Popup] */}
        <div className="bg-lime-500 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-lime-300 ring-2 ring-lime-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={popup} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Modal [Popup]</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">650 MB</p>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <div className="bg-red-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center bg-opacity-30 p-4 bg-red-300 ring-2 ring-red-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={login} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Menubar</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">150 Files</p>
              <p className="text-white">750 MB</p>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="bg-purple-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-purple-300 ring-2 ring-purple-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={tooltip} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Tooltip</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">20 MB</p>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <div className="bg-green-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-green-400 ring-2 ring-green-300 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={dropdown} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Dropdown</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">20,100 Files</p>
              <p className="text-white">6.5GB</p>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="bg-rose-600 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-rose-300 ring-2 ring-rose-100 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={checkbox} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Checkbox</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">650 MB</p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="pt-1 px-2 bg-slate-500 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-slate-300 ring-2 ring-slate-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={calendar} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Calendar</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">20 MB</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          onClick={textsLocation}
          className="bg-amber-500 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer"
        >
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-amber-600 ring-2 ring-amber-500 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={text} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Text</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">150 Files</p>
              <p className="text-white">750 MB</p>
            </div>
          </div>
        </div>

        {/* Page scroll sticky */}
        <div className="bg-indigo-400 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-indigo-300 ring-2 ring-indigo-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={scroll} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Page scroll</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">20 MB</p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="bg-green-900 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-green-600 ring-2 ring-green-700 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={images} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Image</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">650 MB</p>
            </div>
          </div>
        </div>

        {/* Home page */}
        <div className="bg-blue-400 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-blue-300 ring-2 ring-blue-100 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={homePage} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Home page</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">20,100 Files</p>
              <p className="text-white">6.5GB</p>
            </div>
          </div>
        </div>

        {/* Landing page */}
        <div className="bg-yellow-300 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-yellow-400 ring-2 ring-yellow-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={landing} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Landing page</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">650 MB</p>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-pink-400 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-pink-300 ring-2 ring-pink-200 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={alerts} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Alerts</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">150 Files</p>
              <p className="text-white">750 MB</p>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="bg-indigo-800 pt-1 px-2 bg-opacity-30 rounded-xl shadow-lg w-52 hover:scale-110 hover:cursor-pointer">
          <div className="flex justify-center">
            <div className="flex justify-center p-4 bg-opacity-30 bg-indigo-600 ring-2 ring-indigo-500 rounded-lg shadow-xl w-32">
              <img className=" h-10" src={form} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-white font-semibold">Form</p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-200">200 Files</p>
              <p className="text-white">20 MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tailwind;

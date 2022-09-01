import React from "react";
import bg from "../images/bg3.jpg";
import bg2 from "../images/bg9.jpg";
import bg3 from "../images/bg4.jpg";
import bg4 from "../images/bg5.jpg";
import bg5 from "../images/bg6.jpg";
import bg6 from "../images/bg7.jpg";
import bg7 from "../images/bg8.jpg";
import { useNavigate } from "react-router-dom";

function Figma() {
  const navigate = useNavigate();
  const homePage = () => {
    navigate("/");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-screen min-h-screen flex flex-wrap justify-center items-center gap-3 py-5 bg-cover flex-col"
    >
      <div className="flex flex-row justify-center lg:justify-end w-full lg:px-48">
        <button
          onClick={homePage}
          className=" w-48 h-10 rounded-md bg-gradient-to-r border-2 hover:border-0 hover:opacity-70 hover:to-[#8135b4] hover:from-[#ff39b0] text-sm font-medium text-white hover:text-white select-none"
        >
          Home page
        </button>
      </div>

      <div className="w-screen min-h-full flex flex-wrap justify-center items-center gap-3">
        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-gray-300 shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">
              Kratos tracking new web
            </h3>
          </div>

          <div>
            <img
              src={bg2}
              alt="image1"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              The new web mocup design for Kratos customer [Install GPS tracker]
            </p>
            <div className="flex flex-row justify-start gap-x-4">
              <a
                target="_blank"
                href="https://www.figma.com/file/WDn1Q7JXQTpkuCrGOXSklz/Design?node-id=337%3A66274"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                Detail
              </a>
            </div>
          </div>
        </div>

        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-white shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">ERP [Kratos]</h3>
          </div>

          <div>
            <img
              src={bg3}
              alt="image2"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              Enterprise resource planning for Kratos tracking company
            </p>
            <div className="flex flex-row justify-center gap-x-4">
              <a
                target="_blank"
                href="https://www.figma.com/file/fCFgQWMGR17MwvZf2jJcLn/Inventory?node-id=0%3A1"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                Inventory
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/file/Iawz9DiNdeaJrBTDHxBpw1/JMS-Module?node-id=0%3A1"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                JMS
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/file/fCFgQWMGR17MwvZf2jJcLn/EMS--Module?node-id=0%3A1"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                EMS
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/file/4piZH5dYT5Fp7S9syWiGQu/CRM-Module?node-id=0%3A1"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                CRM
              </a>
            </div>
          </div>
        </div>

        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-white shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">
              Something Good
            </h3>
          </div>

          <div>
            <img
              src={bg4}
              alt="image3"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              omnis.
            </p>
            <div className="flex flex-row justify-start gap-x-4">
              <a
                target="_blank"
                className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
              >
                Detail
              </a>
            </div>
          </div>
        </div>

        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-gray-300 shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">
              Something Good
            </h3>
          </div>

          <div>
            <img
              src={bg5}
              alt="image1"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              omnis.
            </p>
            <a
              target="_blank"
              className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
            >
              Detail
            </a>
          </div>
        </div>

        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-white shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">
              Something Good
            </h3>
          </div>

          <div>
            <img
              src={bg6}
              alt="image2"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              omnis.
            </p>
            <a
              target="_blank"
              className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
            >
              Detail
            </a>
          </div>
        </div>

        <div className="backdrop w-10/12 md:w-1/4 bg-white hover:bg-black hover:bg-opacity-20 bg-opacity-20 rounded p-3 text-white border border-white shadow-lg">
          <div className="w-full mb-3 pb-3 border-b border-1 border-white">
            <h3 className="text-xl font-semibold text-shadow">
              Something Good
            </h3>
          </div>

          <div>
            <img
              src={bg7}
              alt="image3"
              className="w-full h-28 object-cover mb-2"
            />
            <p className="mb-3 tracking-wide text-base text-shadow indent-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              omnis.
            </p>
            <a
              target="_blank"
              className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-20 text-lg"
            >
              Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Figma;

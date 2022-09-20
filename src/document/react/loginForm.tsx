import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const tailwindLocation = () => {
    navigate("/tailwind");
  };
  const template1Location = () => {
    navigate("/login1");
  };
  const template2Location = () => {
    navigate("/login2");
  };
  const template3Location = () => {
    navigate("/login3");
  };
  return (
    <div className=" w-screen h-screen bg-white flex flex-col items-center gap-5 py-8">
      <label className="text-5xl font-mono text-[#000000]">
        Login form template
      </label>
      <button
        onClick={tailwindLocation}
        className=" absolute bottom-4 left-4 p-2 w-64 pl-5 pr-5 bg-transparent rounded-lg bg-gradient-to-r from-[#E66E82] to-[#FF9460] hover:to-[#E66E82] hover:from-[#FF9460] text-lg font-mono text-white hover:text-white select-none"
      >
        Tailwind template
      </button>

      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pt-10 gap-10">
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            className="bg-gray-300 h-56 w-96 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`,
            }}
          ></div>

          <div className=" w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
              </div>
              <div className="category-title flex-1 text-sm"> PHP</div>
            </div>
            <div className="title-post font-medium">Mon titre</div>

            <div className="summary-post text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={template1Location}
                className="w-24 p-2 rounded-lg text-sm font-bold border border-[#AF8FC1] text-[#AF8FCa] hover:bg-[#AF8FC1] hover:text-white"
              >
                GO!!!
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            className="bg-gray-300 h-56 w-96 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`,
            }}
          ></div>

          <div className=" w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
              </div>
              <div className="category-title flex-1 text-sm"> JS</div>
            </div>
            <div className="title-post font-medium">Mon titre</div>

            <div className="summary-post text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={template2Location}
                className="w-24 p-2 rounded-lg text-sm font-bold border border-[#F3D7B2] text-[#F3D7B2] hover:bg-[#F3D7B2] hover:text-white"
              >
                GO!!!
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            className="bg-gray-300 h-56 w-96 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`,
            }}
          ></div>

          <div className=" w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
            <div className="header-content inline-flex ">
              <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                <div className="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
              </div>
              <div className="category-title flex-1 text-sm"> Vue</div>
            </div>
            <div className="title-post font-medium">Mon titre</div>

            <div className="summary-post text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={template3Location}
                className="w-24 p-2 rounded-lg text-sm font-bold border border-[#BADBCA] text-[#BADBCA] hover:bg-[#BADBCA] hover:text-white"
              >
                GO!!!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

import React from "react";
import { useNavigate } from "react-router-dom";
import npm from "../../images/iconTec/npm.svg";
import github from "../../images/iconTec/github.svg";
import router from "../../images/iconTec/router.svg";
import mui from "../../images/iconTec/mui.png";
import ssui from "../../images/iconTec/ssui.jpg";
import datefns from "../../images/iconTec/datefns.png";
import redux from "../../images/iconTec/redux.svg";
import Axios from "../../images/iconTec/Axios.png";

function Library() {
  const navigate = useNavigate();
  const reactLocation = () => {
    navigate("/reactPage");
  };
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen">
      <div className="flex flex-col h-1/3 lg:h-screen lg:w-2/5 justify-center items-center px-10 gap-4 pb-3">
        <h1
          role="heading"
          className="md:text-4xl text-3xl font-bold leading-10 lg:mt-3 text-gray-800"
        >
          React library
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-5 lg:mt-5 text-gray-600 indent-8"
        >
          We’re working on a suit of tools to make managing complex systems
          easier, for everyone for free. we can’t wait to hear what you think
        </p>
        <button
          onClick={reactLocation}
          className="p-2 w-56 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300"
        >
          React document page
        </button>
      </div>
      <div className="flex flex-col h-screen w-screen gap-5 bg-black pt-10 overflow-y-scroll">
        {/* react-router-dom */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  react-router-dom
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  To get started with React Router in a web app, you’ll need a
                  React web app. If you need to create one, we recommend you try
                  Create React App. It’s a popular tool that works really well
                  with React Router.
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/react-router-dom"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/remix-run/react-router"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://v5.reactrouter.com/web/guides/quick-start"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={router} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to react-router</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* react-big-calendar */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  react-big-calendar
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  Calendar.
                </p>

                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/react-big-calendar"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/jquense/react-big-calendar"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* react-cookie */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  react-cookie
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  Create cookie.
                </p>

                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/react-cookie"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/reactivestack/cookies"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUI */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  @mui/material
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  MUI Core contains foundational React UI component libraries
                  for shipping new features faster. [Date/Time]
                </p>

                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/@mui/material"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/mui/material-ui"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://mui.com/x/react-date-pickers/getting-started/"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={mui} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to MUI</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* @headlessui/react */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  @headlessui/react
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  Completely unstyled, fully accessible UI components, designed
                  to integrate beautifully with Tailwind CSS (Tab).
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/@headlessui/react"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/tailwindlabs/headlessui"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://headlessui.com/"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={ssui} className="w-auto h-10" />
                      <p className="text-sm lg:text-base">Go to MUI</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* react-alice-carousel */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  react-alice-carousel
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  React Alice Carousel is a React component for building content
                  galleries, content rotators and any React carousels. [Image
                  slide]
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/react-alice-carousel"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/maxmarinich/react-alice-carousel"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* date-fns */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  date-fns
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  date-fns provides the most comprehensive, yet simple and
                  consistent toolset for manipulating JavaScript dates in a
                  browser and Node.js.
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/date-fns"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/date-fns/date-fns"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://date-fns.org/"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={datefns} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to date-fns</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redux */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  Redux Toolkit
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  The official, opinionated, batteries-included toolset for
                  efficient Redux development (Formerly known as "Redux Starter
                  Kit").
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/@reduxjs/toolkit"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/reduxjs/redux-toolkit"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://redux-toolkit.js.org/"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={redux} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to redux</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* axios */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="px-5 py-2 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-lg shadow-gray-500">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-lg lg:text-2xl title-font font-bold lg:pb-2">
                  Axios
                </h1>
                <p className=" text-sm lg:text-base text-start indent-8">
                  Promise based HTTP client for the browser and node.js.
                </p>
                <div className="md:flex font-bold text-gray-800 pt-2">
                  <div className="w-full flex space-x-3">
                    <a
                      target="_blank"
                      href="https://www.npmjs.com/package/axios"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={npm} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to npm</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/axios/axios"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={github} className="w-10 h-10" />
                      <p className="text-sm lg:text-base">Go to github</p>
                    </a>
                    <a
                      target="_blank"
                      href="https://axios-http.com/docs/intro"
                      className="w-1/2 flex flex-col items-center justify-center"
                    >
                      <img src={Axios} className="w-auto h-8" />
                      <p className="text-sm lg:text-base">Go to redux</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Library;

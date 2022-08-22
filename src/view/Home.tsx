import React, { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { ThemeContext } from "../ThemeContext";
import HomePage from "../page/home";
import AboutUs from "../page/aboutUs";
import WorkCalendar from "../page/workCalendar";
import logo from "../images/PHOBDAWNEUR.png";

function Home() {
  const { setTheme, theme } = useContext(ThemeContext);
  // console.log(theme);

  return (
    <div className="bg-[#ffffff] w-screen h-screen ">
      <div className="w-screen">
        <Tab.Group>
          <Tab.List className="flex items-center justify-between bg-[#FFFFFF] h-16">
            <div className=" text-2xl font-serif bg-[#F9B301] h-full w-96 flex flex-row items-center px-10 justify-center rounded-sm">
              <img src={logo} className="w-16 h-auto" />
              PHOBDAWNEUR
            </div>
            <div className="flex flex-row gap-10 items-center justify-center px-10">
              <Tab>Home</Tab>
              <Tab>About us</Tab>
              <Tab>Document</Tab>
              <Tab>My work</Tab>
              <Tab>Calendar for my work</Tab>
              {/* Mode display  */}

              {theme === "dark" ? (
                <button onClick={() => setTheme("light")} className="ml-3">
                  <span>
                    <svg
                      id="theme-toggle-light-icon"
                      className="w-8 h-8 text-slate-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              ) : (
                <button onClick={() => setTheme("dark")} className="ml-3">
                  <span>
                    <svg
                      id="theme-toggle-dark-icon"
                      className="w-8 h-8 text-slate-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <HomePage />
            </Tab.Panel>

            <Tab.Panel>
              <AboutUs />
            </Tab.Panel>

            <Tab.Panel>Document</Tab.Panel>

            <Tab.Panel>My work</Tab.Panel>

            <Tab.Panel>
              <WorkCalendar />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Home;

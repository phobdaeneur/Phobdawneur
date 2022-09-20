import React, { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { ThemeContext } from "../ThemeContext";
import HomePage from "../pageWin/home";
import AboutUs from "../pageWin/aboutUs";
import WorkCalendar from "../pageWin/workCalendar";
import Document from "../pageWin/document";
import Cooking from "../pageWin/cooking";
import logo from "../images/logo/logo1.png";
import logoWhite from "../images/logo/PHOBDAWNEUR2.png";
import iconhome2 from "../images/iconMenu/home 2.png";
import iconMe2 from "../images/iconMenu/star 2.png";
import iconDocument2 from "../images/iconMenu/document 2.png";
import iconWork2 from "../images/iconMenu/calendar 2.png";
import iconhome from "../images/iconMenu/home 3.png";
import iconMe from "../images/iconMenu/star 3.png";
import iconDocument from "../images/iconMenu/document 3.png";
import iconWork from "../images/iconMenu/calendar3.png";
import HomeMo from "../pageMo/homeMo";
import AboutAsMo from "../pageMo/aboutAsMo";
import DocumentMo from "../pageMo/documentMo";
import CalendarMo from "../pageMo/calendarMo";
import home from "../images/iconMenu/imgs/home.png";
import nameHome from "../images/iconMenu/imgs/name/HOME.png";
import about from "../images/iconMenu/imgs/about.png";
import nameAbout from "../images/iconMenu/imgs/name/ABOUT.png";
import document from "../images/iconMenu/imgs/document.png";
import nameDocument from "../images/iconMenu/imgs/name/DOCUMENT.png";
import cooking from "../images/iconMenu/imgs/cooking.png";
import nameCooking from "../images/iconMenu/imgs/name/COOKING.png";
import work from "../images/iconMenu/imgs/work.png";
import nameWork from "../images/iconMenu/imgs/name/WORK.png";

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(" ");
}

function Home() {
  const { setTheme, theme } = useContext(ThemeContext);
  // console.log(theme);

  const [selected, setSelected] = useState("home");
  return (
    <div>
      {/* windows app */}
      <div className=" hidden lg:block bg-[#ffffff] w-screen h-screen ">
        <div className="w-screen">
          <Tab.Group>
            <Tab.List className="flex flex-row-reverse items-center justify-between bg-[#FFFFFF] h-16 fixed z-10 w-screen">
              <div className="flex flex-row gap-10 items-center justify-center px-10">
                <Tab value="home" onClick={() => setSelected("home")}>
                  {selected === "home" ? (
                    <img src={home} className=" h-6" />
                  ) : (
                    <img src={nameHome} className=" h-3" />
                  )}
                </Tab>
                <Tab value="about" onClick={() => setSelected("about")}>
                  {selected === "about" ? (
                    <img src={about} className=" h-6" />
                  ) : (
                    <img src={nameAbout} className=" h-3" />
                  )}
                </Tab>
                <Tab value="document" onClick={() => setSelected("document")}>
                  {selected === "document" ? (
                    <img src={document} className=" h-6" />
                  ) : (
                    <img src={nameDocument} className=" h-3" />
                  )}
                </Tab>
                <Tab value="cooking" onClick={() => setSelected("cooking")}>
                  {selected === "cooking" ? (
                    <img src={cooking} className=" h-6" />
                  ) : (
                    <img src={nameCooking} className=" h-3" />
                  )}
                </Tab>
                <Tab value="work" onClick={() => setSelected("work")}>
                  {selected === "work" ? (
                    <img src={work} className=" h-6" />
                  ) : (
                    <img src={nameWork} className=" h-3" />
                  )}
                </Tab>
                {/* Mode display  */}

                {theme === "dark" ? (
                  <button onClick={() => setTheme("light")} className="ml-3">
                    <span>
                      <svg
                        id="theme-toggle-light-icon"
                        className="w-8 h-5 text-slate-300"
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
                        className="w-8 h-5 text-slate-500"
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
              {selected === "home" || selected === "about" ? (
                <div className=" text-2xl font-serif bg-[#FFA446] h-full w-1/4 flex flex-row items-center justify-center gap-2 rounded-sm">
                  <img src={logo} className="h-12 w-auto" />
                  PHOBDAWNEUR
                </div>
              ) : (
                <div className=" text-2xl font-serif bg-[#FFFFFF] h-full w-1/4 gap-2 flex flex-row items-center px-10 justify-center rounded-sm">
                  <img src={logo} className="h-12 w-auto" />
                  PHOBDAWNEUR
                </div>
              )}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <HomePage />
              </Tab.Panel>

              <Tab.Panel>
                <AboutUs />
              </Tab.Panel>

              <Tab.Panel>
                <Document />
              </Tab.Panel>

              <Tab.Panel>
                <Cooking />
              </Tab.Panel>

              <Tab.Panel>
                <WorkCalendar />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      {/* Mobile app */}
      <div className="h-screen w-screen lg:hidden">
        <div className=" w-screen">
          <Tab.Group>
            <Tab.Panels>
              <Tab.Panel>
                <HomeMo />
              </Tab.Panel>
              <Tab.Panel>
                <AboutAsMo />
              </Tab.Panel>
              <Tab.Panel>
                <DocumentMo />
              </Tab.Panel>
              <Tab.Panel>
                <CalendarMo />
              </Tab.Panel>
            </Tab.Panels>

            <Tab.List className="bg-[#FFFFFF] h-16 w-screen bottom-0 flex flex-row gap-4 justify-between items-center px-4 fixed z-10 border-t-2 rounded-t-2xl">
              <Tab value="home" onClick={() => setSelected("home")}>
                {selected === "home" ? (
                  <div className="flex flex-row items-center justify-center gap-2 bg-[#FFA446] rounded-xl px-3 py-2">
                    <img src={iconhome2} className=" h-6" />
                    <label className=" text-sm text-white font-mono">
                      HOME
                    </label>
                  </div>
                ) : (
                  <img src={iconhome} className=" h-8" />
                )}
              </Tab>
              <Tab value="about" onClick={() => setSelected("about")}>
                {selected === "about" ? (
                  <div className="flex flex-row items-center justify-center gap-2 bg-[#FFA446] rounded-xl px-3 py-2">
                    <img src={iconMe2} className=" h-6" />
                    <label className=" text-sm text-white font-mono">
                      ABOUT ME
                    </label>
                  </div>
                ) : (
                  <img src={iconMe} className=" h-8" />
                )}
              </Tab>
              <Tab value="document" onClick={() => setSelected("document")}>
                {selected === "document" ? (
                  <div className="flex flex-row items-center justify-center gap-2 bg-[#FFA446] rounded-xl px-3 py-2">
                    <img src={iconDocument2} className=" h-6" />
                    <label className=" text-sm text-white font-mono">
                      DOCUMENT
                    </label>
                  </div>
                ) : (
                  <img src={iconDocument} className=" h-8" />
                )}
              </Tab>
              <Tab value="work" onClick={() => setSelected("work")}>
                {selected === "work" ? (
                  <div className="flex flex-row items-center justify-center gap-2 bg-[#FFA446] rounded-xl px-3 py-2">
                    <img src={iconDocument2} className=" h-6" />
                    <label className=" text-sm text-white font-mono">
                      WORK
                    </label>
                  </div>
                ) : (
                  <img src={iconWork} className=" h-8" />
                )}
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default Home;

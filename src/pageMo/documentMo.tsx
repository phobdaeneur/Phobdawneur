import React from "react";
import java from "../images/iconTec/java.svg";
import java2 from "../images/iconTec/java2.svg";
import react from "../images/iconTec/react.svg";
import nodeJs from "../images/iconTec/nodeJs.svg";
import html from "../images/iconTec/html.svg";
import star from "../images/iconTec/star.svg";
import php from "../images/iconTec/php.svg";
import database from "../images/iconTec/database.svg";
import bg from "../images/bg.jpg";
import figma from "../images/iconTec/figma.png";
import { useNavigate } from "react-router-dom";

function DocumentMo() {
  const navigate = useNavigate();
  const reactPage = () => {
    navigate("/reactPage");
  };
  const iconPage = () => {
    navigate("/designPage");
  };
  const figmaPage = () => {
    navigate("/figma");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen dark:bg-gray-900 py-6 flex flex-col justify-center md:justify-start sm:py-12 gap-10 bg-fixed"
    >
      <div className="container xl:max-w-6xl mx-auto px-4 pt-6">
        <header className="text-center mx-auto lg:px-20">
          <h2 className="text-2xl leading-normal font-bold text-back">
            Tecnologies / Frameworks
          </h2>
          <p className="text-back leading-relaxed font-light text-xl mx-auto pb-2">
            My favorite tecnologies!
          </p>
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-20 overflow-y-scroll pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 ">
          <a className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={java} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">
                JavaScript
              </p>
            </div>
          </a>

          <div
            // onClick={reactPage}
            className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <img src={react} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">React</p>
            </div>
          </div>

          <a className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={nodeJs} className=" h-20" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">NodeJS</p>
            </div>
          </a>

          <a className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={html} className=" h-20 w-auto pt-4" />
            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">HTML/CSS</p>
            </div>
          </a>

          <a className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={php} className=" h-20" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">PHP</p>
            </div>
          </a>

          <a className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={database} className=" h-20 w-auto pt-4" />
            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">Database</p>
            </div>
          </a>

          <div
            // onClick={figmaPage}
            className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <img src={figma} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">Figma</p>
            </div>
          </div>

          <div
            onClick={iconPage}
            className=" w-60 lg:w-full ring-2 ring-opacity-10 ring-[#2B222F] bg-gradient-to-b hover:to-[#B44242] hover:from-[#FF9339] hover:ring-0 hover:opacity-90 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <img src={star} className=" h-20 w-auto" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DocumentMo;

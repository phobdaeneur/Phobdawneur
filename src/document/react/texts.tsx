import React from "react";
import { useNavigate } from "react-router-dom";

function Texts() {
  const navigate = useNavigate();
  const tailwindLocation = () => {
    navigate("/tailwind");
  };

  return (
    <div className=" w-screen h-full bg-black flex flex-col items-center px-10 py-10 gap-5">
      <label className="text-5xl font-mono text-white">
        Text template [Font style]
      </label>
      <button
        onClick={tailwindLocation}
        className="p-2 w-96 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:ring-0 hover:text-gray-100"
      >
        Tailwind template
      </button>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-2xl text-white font-mono">Mono :</label>
          <label className="text-white font-mono text-xs">Textxs</label>
          <label className="text-white font-mono text-sm">Textsm</label>
          <label className="text-white font-mono text-base">Textbase</label>
          <label className="text-white font-mono text-lg">Textlg</label>
          <label className="text-white font-mono text-xl">Textxl</label>
          <label className="text-white font-mono text-2xl">Text2xl</label>
          <label className="text-white font-mono text-3xl">Text3xl</label>
          <label className="text-white font-mono text-4xl">Text4xl</label>
          <label className="text-white font-mono text-5xl">Text5xl</label>
          <label className="text-white font-mono text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-sans text-2xl">Sans :</label>
          <label className="text-white font-sans text-xs">Textxs</label>
          <label className="text-white font-sans text-sm">Textsm</label>
          <label className="text-white font-sans text-base">Textbase</label>
          <label className="text-white font-sans text-lg">Textlg</label>
          <label className="text-white font-sans text-xl">Textxl</label>
          <label className="text-white font-sans text-2xl">Text2xl</label>
          <label className="text-white font-sans text-3xl">Text3xl</label>
          <label className="text-white font-sans text-4xl">Text4xl</label>
          <label className="text-white font-sans text-5xl">Text5xl</label>
          <label className="text-white font-sans text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-serif text-2xl">Serift :</label>
          <label className="text-white font-serif text-xs">Textxs</label>
          <label className="text-white font-serif text-sm">Textsm</label>
          <label className="text-white font-serif text-base">Textbase</label>
          <label className="text-white font-serif text-lg">Textlg</label>
          <label className="text-white font-serif text-xl">Textxl</label>
          <label className="text-white font-serif text-2xl">Text2xl</label>
          <label className="text-white font-serif text-3xl">Text3xl</label>
          <label className="text-white font-serif text-4xl">Text4xl</label>
          <label className="text-white font-serif text-5xl">Text5xl</label>
          <label className="text-white font-serif text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-thin text-2xl">Thin :</label>
          <label className="text-white font-thin text-xs">Textxs</label>
          <label className="text-white font-thin text-sm">Textsm</label>
          <label className="text-white font-thin text-base">Textbase</label>
          <label className="text-white font-thin text-lg">Textlg</label>
          <label className="text-white font-thin text-xl">Textxl</label>
          <label className="text-white font-thin text-2xl">Text2xl</label>
          <label className="text-white font-thin text-3xl">Text3xl</label>
          <label className="text-white font-thin text-4xl">Text4xl</label>
          <label className="text-white font-thin text-5xl">Text5xl</label>
          <label className="text-white font-thin text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-extralight text-2xl">
            Extralight :
          </label>
          <label className="text-white font-extralight text-xs">Textxs</label>
          <label className="text-white font-extralight text-sm">Textsm</label>
          <label className="text-white font-extralight text-base">
            Textbase
          </label>
          <label className="text-white font-extralight text-lg">Textlg</label>
          <label className="text-white font-extralight text-xl">Textxl</label>
          <label className="text-white font-extralight text-2xl">Text2xl</label>
          <label className="text-white font-extralight text-3xl">Text3xl</label>
          <label className="text-white font-extralight text-4xl">Text4xl</label>
          <label className="text-white font-extralight text-5xl">Text5xl</label>
          <label className="text-white font-extralight text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-light text-2xl">Light :</label>
          <label className="text-white font-light text-xs">Textxs</label>
          <label className="text-white font-light text-sm">Textsm</label>
          <label className="text-white font-light text-base">Textbase</label>
          <label className="text-white font-light text-lg">Textlg</label>
          <label className="text-white font-light text-xl">Textxl</label>
          <label className="text-white font-light text-2xl">Text2xl</label>
          <label className="text-white font-light text-3xl">Text3xl</label>
          <label className="text-white font-light text-4xl">Text4xl</label>
          <label className="text-white font-light text-5xl">Text5xl</label>
          <label className="text-white font-light text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-normal text-2xl">Normal :</label>
          <label className="text-white font-normal text-xs">Textxs</label>
          <label className="text-white font-normal text-sm">Textsm</label>
          <label className="text-white font-normal text-base">Textbase</label>
          <label className="text-white font-normal text-lg">Textlg</label>
          <label className="text-white font-normal text-xl">Textxl</label>
          <label className="text-white font-normal text-2xl">Text2xl</label>
          <label className="text-white font-normal text-3xl">Text3xl</label>
          <label className="text-white font-normal text-4xl">Text4xl</label>
          <label className="text-white font-normal text-5xl">Text5xl</label>
          <label className="text-white font-normal text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-medium text-2xl">Medium :</label>
          <label className="text-white font-medium text-xs">Textxs</label>
          <label className="text-white font-medium text-sm">Textsm</label>
          <label className="text-white font-medium text-base">Textbase</label>
          <label className="text-white font-medium text-lg">Textlg</label>
          <label className="text-white font-medium text-xl">Textxl</label>
          <label className="text-white font-medium text-2xl">Text2xl</label>
          <label className="text-white font-medium text-3xl">Text3xl</label>
          <label className="text-white font-medium text-4xl">Text4xl</label>
          <label className="text-white font-medium text-5xl">Text5xl</label>
          <label className="text-white font-medium text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-semibold text-2xl">
            Semibold :
          </label>
          <label className="text-white font-semibold text-xs">Textxs</label>
          <label className="text-white font-semibold text-sm">Textsm</label>
          <label className="text-white font-semibold text-base">Textbase</label>
          <label className="text-white font-semibold text-lg">Textlg</label>
          <label className="text-white font-semibold text-xl">Textxl</label>
          <label className="text-white font-semibold text-2xl">Text2xl</label>
          <label className="text-white font-semibold text-3xl">Text3xl</label>
          <label className="text-white font-semibold text-4xl">Text4xl</label>
          <label className="text-white font-semibold text-5xl">Text5xl</label>
          <label className="text-white font-semibold text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-bold text-2xl">Bold :</label>
          <label className="text-white font-bold text-xs">Textxs</label>
          <label className="text-white font-bold text-sm">Textsm</label>
          <label className="text-white font-bold text-base">Textbase</label>
          <label className="text-white font-bold text-lg">Textlg</label>
          <label className="text-white font-bold text-xl">Textxl</label>
          <label className="text-white font-bold text-2xl">Text2xl</label>
          <label className="text-white font-bold text-3xl">Text3xl</label>
          <label className="text-white font-bold text-4xl">Text4xl</label>
          <label className="text-white font-bold text-5xl">Text5xl</label>
          <label className="text-white font-bold text-6xl">Text6xl</label>
        </div>

        <div className="flex flex-row justify-start items-center pt-5 gap-4">
          <label className="text-white font-extrabold text-2xl">
            Extraold :
          </label>
          <label className="text-white font-extrabold text-xs">Textxs</label>
          <label className="text-white font-extrabold text-sm">Textsm</label>
          <label className="text-white font-extrabold text-base">
            Textbase
          </label>
          <label className="text-white font-extrabold text-lg">Textlg</label>
          <label className="text-white font-extrabold text-xl">Textxl</label>
          <label className="text-white font-extrabold text-2xl">Text2xl</label>
          <label className="text-white font-extrabold text-3xl">Text3xl</label>
          <label className="text-white font-extrabold text-4xl">Text4xl</label>
          <label className="text-white font-extrabold text-5xl">Text5xl</label>
          <label className="text-white font-extrabold text-6xl">Text6xl</label>
        </div>
      </div>
    </div>
  );
}

export default Texts;

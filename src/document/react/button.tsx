import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const tailwindLocation = () => {
    navigate("/tailwind");
  };
  return (
    <div className="flex flex-col items-center gap-5 w-screen h-full bg-black py-10">
      <label className="text-5xl font-mono text-white">Button template</label>
      <button
        onClick={tailwindLocation}
        className="p-2 w-96 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:ring-0 hover:text-gray-100"
      >
        Tailwind template
      </button>
      <div className="flex flex-col items-center justify-center gap-4">
        <label className="text-xl font-mono text-white pt-10">
          1.Outline button and Hover bg gradient
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:ring-0 hover:text-gray-100">
            Button1
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-b hover:from-green-600 hover:to-yellow-500 hover:ring-0 hover:text-gray-100">
            Button2
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-sky-600 hover:to-green-500 hover:ring-0 hover:text-gray-100">
            Button3
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-b hover:from-orange-600 hover:to-gray-500 hover:ring-0 hover:text-gray-100">
            Button4
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-r hover:from-red-900 hover:to-green-900 hover:ring-0 hover:text-gray-100">
            Button5
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent ring-2 ring-white text-white text-lg font-mono rounded-lg bg-gradient-to-b hover:from-pink-700 hover:to-yellow-500 hover:ring-0 hover:text-gray-100">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          2.Background gradient and Hover bg gradient
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#F27A64] to-[#BE687D] hover:to-[#F27A64] hover:from-[#BE687D] text-lg font-mono text-white hover:text-white select-none">
            Button1
          </button>
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#8CBDBD] to-[#F3DFAD] hover:to-[#8CBDBD] hover:from-[#F3DFAD] text-lg font-mono text-white hover:text-white select-none">
            Button2
          </button>
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#B0ABCA] to-[#E2A9BE] hover:to-[#B0ABCA] hover:from-[#E2A9BE] text-lg font-mono text-white hover:text-white select-none">
            Button3
          </button>
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#E479A2] to-[#DFF0A9] hover:to-[#E479A2] hover:from-[#DFF0A9] text-lg font-mono text-white hover:text-white select-none">
            Button4
          </button>
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#B0ABCA] to-[#C2D5A7] hover:to-[#B0ABCA] hover:from-[#C2D5A7] text-lg font-mono text-white hover:text-white select-none">
            Button5
          </button>
          <button className=" p-2 w-40 pl-5 pr-5 bg-transparent rounded-xl bg-gradient-to-r from-[#58949C] to-[#DF9881] hover:to-[#58949C] hover:from-[#DF9881] text-lg font-mono text-white hover:text-white select-none">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          3.Outline button and Hover bg color
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg font-mono rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300">
            Primary
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg font-mono rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300">
            Secondary
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg font-mono rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300">
            Warning
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg font-mono rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">
            Success
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-red-500 text-red-500 text-lg font-mono rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">
            Hazard
          </button>
          <button className="p-2 w-40 pl-5 pr-5 bg-transparent border-2 border-sky-500 text-sky-500 text-lg font-mono rounded-lg hover:bg-sky-500 hover:text-gray-100 focus:border-4 focus:border-sky-300">
            Info
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          4.Background white and Hover bg color
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-200 active:bg-gray-200 focus:ring-gray-300">
            Button1
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100 active:bg-purple-200 focus:ring-purple-300">
            Button2
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100 active:bg-blue-200 focus:ring-blue-300">
            Button3
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-green-600 bg-green-50 border-green-200 hover:bg-green-100 active:bg-green-200 focus:ring-green-300">
            Button4
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-yellow-600 bg-yellow-50 border-yellow-200 hover:bg-yellow-100 active:bg-yellow-200 focus:ring-yellow-300">
            Button5
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-red-600 bg-red-50 border-red-200 hover:bg-red-100 active:bg-red-200 focus:ring-red-300">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          5.Background white and Hover bg color2
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-600 hover:text-white active:bg-gray-200 focus:ring-gray-300 hover:border-0">
            Button1
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-600 hover:text-white active:bg-purple-200 hover:border-0">
            Button2
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-600 hover:text-white active:bg-blue-200 focus:ring-blue-300 hover:border-0">
            Button3
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-green-600 bg-green-50 border-green-200 hover:bg-green-600 hover:text-white active:bg-green-200 focus:ring-green-300 hover:border-0">
            Button4
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-yellow-600 bg-yellow-50 border-yellow-200 hover:bg-yellow-600 hover:text-white active:bg-yellow-200 focus:ring-yellow-300 hover:border-0">
            Button5
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-red-600 bg-red-50 border-red-200 hover:bg-red-600 hover:text-white active:bg-red-200 focus:ring-red-300 hover:border-0">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          6.Text button and Hover bg color
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="focus:outline-none text-blue-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-blue-100">
            Primary
          </button>

          <button className="focus:outline-none text-gray-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-gray-100">
            Secondary
          </button>

          <button className="focus:outline-none text-yellow-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-yellow-100">
            Warning
          </button>

          <button className="focus:outline-none text-green-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-green-100">
            Success
          </button>

          <button className="focus:outline-none text-red-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-red-100">
            Danger
          </button>

          <button className="focus:outline-none text-sky-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-sky-100">
            Info
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          7.Text button and Hover bg color2
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="focus:outline-none text-blue-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-blue-600 hover:text-white">
            Primary
          </button>

          <button className="focus:outline-none text-gray-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-gray-600 hover:text-white">
            Secondary
          </button>

          <button className="focus:outline-none text-yellow-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-yellow-600 hover:text-white">
            Warning
          </button>

          <button className="focus:outline-none text-green-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-green-600 hover:text-white">
            Success
          </button>

          <button className="focus:outline-none text-red-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-red-600 hover:text-white">
            Danger
          </button>

          <button className="focus:outline-none text-sky-600 text-lg py-2.5 px-5 rounded-lg w-40 pl-5 pr-5 hover:bg-sky-600 hover:text-white">
            Info
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          8.Background colr and Hover bg color
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-gray-500 border-gray-200 hover:bg-gray-200 hover:text-gray-500 active:bg-gray-200 focus:ring-gray-300">
            Button1
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-purple-500 border-purple-200 hover:bg-purple-100 hover:text-purple-500 active:bg-purple-200 focus:ring-purple-300">
            Button2
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-blue-500 border-blue-200 hover:bg-blue-100 hover:text-blue-500 active:bg-blue-200 focus:ring-blue-300">
            Button3
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-green-500 border-green-200 hover:bg-green-100 hover:text-green-500 active:bg-green-200 focus:ring-green-300">
            Button4
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-yellow-500 border-yellow-200 hover:bg-yellow-100 hover:text-yellow-500 active:bg-yellow-200 focus:ring-yellow-300">
            Button5
          </button>
          <button className=" w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border shadow focus:outline-none focus:ring transition text-white bg-red-500 border-red-200 hover:bg-red-100 hover:text-red-500 active:bg-red-200 focus:ring-red-300">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          9.Background color no hover
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#A0CDED] text-white">
            Button1
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#BADBCA] text-white">
            Button2
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#F3D7B2] text-white">
            Button3
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#FFC29F] text-white">
            Button4
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#F19A9C] text-white">
            Button5
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#AF8FC1] text-white">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          10.Outline button and Hover bg color2
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#A0CDED] text-[#A0CDED] hover:bg-[#A0CDED] hover:text-white">
            Button1
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#BADBCA] text-[#BADBCA] hover:bg-[#BADBCA] hover:text-white">
            Button2
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#F3D7B2] text-[#F3D7B2] hover:bg-[#F3D7B2] hover:text-white">
            Button3
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#FFC29F] text-[#FFC29F] hover:bg-[#FFC29F] hover:text-white">
            Button4
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#F19A9C] text-[#F19A9C] hover:bg-[#F19A9C] hover:text-white">
            Button5
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono border border-[#AF8FC1] text-[#AF8FCa] hover:bg-[#AF8FC1] hover:text-white">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          11.Background color and Hover outline button
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#A0CDED] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#A0CDED] hover:ring-[#A0CDED]">
            Button1
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#BADBCA] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#BADBCA] hover:ring-[#BADBCA]">
            Button2
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#F3D7B2] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#F3D7B2] hover:ring-[#F3D7B2]">
            Button3
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#FFC29F] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#FFC29F] hover:ring-[#FFC29F]">
            Button4
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#F19A9C] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#F19A9C] hover:ring-[#F19A9C]">
            Button5
          </button>
          <button className="w-40 p-2 pr-5 pl-5 rounded-lg text-lg font-mono bg-[#AF8FC1] text-white hover:ring-2 hover:bg-opacity-0 hover:text-[#AF8FC1] hover:ring-[#AF8FC1]">
            Button6
          </button>
        </div>

        <label className="text-xl font-mono text-white pt-5">
          1.Socail button
        </label>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="inline-flex text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 -ml-1 w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
              ></path>
            </svg>
            <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"></span>
            <div className="text-xl font-mono font-bold pt-0.5">@Instagram</div>
          </button>
          <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg
              className="mr-2 -ml-1 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"></span>
            <div className="text-xl font-mono font-bold pt-0.5">@Facebook</div>
          </button>
          <button className="text-white bg-[#c4302b] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mr-2 -ml-1 w-8 h-8"
              viewBox="0 0 72 72"
            >
              <path
                fill="currentColor"
                d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"
              ></path>
            </svg>
            <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"></span>
            <div className="text-xl font-mono font-bold pt-0.5">@Youtube</div>
          </button>
          <button className="text-white bg-[#25D366] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mr-2 -ml-1 w-8 h-8"
              viewBox="0 0 48 48"
              style={{ fill: "#000000" }}
            >
              <path
                fill="#fff"
                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
              />
              <path
                fill="#fff"
                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
              />
              <path
                fill="#cfd8dc"
                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
              />
              <path
                fill="#40c351"
                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                clipRule="evenodd"
              />
            </svg>
            <span className="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono"></span>
            <div className="text-xl font-mono font-bold pt-0.5">
              +66822587413
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;

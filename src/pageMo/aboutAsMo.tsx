import React from "react";
import daisy from "../images/daisy.jpg";
import bg from "../images/bg.jpg";
import bg2 from "../images/bg12.jpg";
import bg3 from "../images/bg2.png";
import bg4 from "../images/bg13.jpg";
import ki from "../images/ki.jpg";

function AboutAsMo() {
  return (
    <div className="relative w-screen">
      {/* Page one */}
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-between py-6 px-5"
      >
        <div className="flex flex-col items-center justify-center">
          <img src={ki} className="rounded-full w-40 h-40" />
          <p className=" text-3xl font-thin text-white">Dawruang Tanong</p>
          <p className=" text-xl font-thin text-white">[ DAW ]</p>
        </div>

        <div className="flex flex-col gap-2 px-5 py-5 bg-white bg-opacity-30">
          <p className="text-2xl font-mono text-[#000000]">CONTACT</p>

          <div className=" flex flex-col">
            <p className=" text-base font-mono">
              Email : phobdawneur@gmail.com
            </p>
            <a
              href="https://github.com/phobdaeneur"
              target="_blank"
              rel="noopener"
              className=" text-base font-mono"
            >
              Github : Phobdawneur
            </a>
            <p className=" text-base font-mono">Phone : XXX-XXXX-XXX</p>
            <a
              href="https://www.google.com/maps/place/U+Chu+Liang+Building/@13.7272045,100.5396173,18.82z/data=!4m13!1m7!3m6!1s0x0:0x555e19b70438d79e!2zMTPCsDQzJzM3LjkiTiAxMDDCsDMyJzIzLjQiRQ!3b1!8m2!3d13.7271864!4d100.5398198!3m4!1s0x30e29f7b1807d7c9:0xaed3eeb8abfc73b!8m2!3d13.7272529!4d100.5405044"
              target="_blank"
              rel="noopener"
              className=" text-base font-mono"
            >
              Location : 968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom,
              Bangrak, Bangkok 10500
            </a>
          </div>
        </div>

        <p className="text-white pb-20 font-mono">Scroll Down</p>
      </div>

      {/* Pagr two */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-between px-5 py-10"
      >
        <div className="flex flex-col gap-3 px-5 py-5 bg-white bg-opacity-30">
          <p className="text-2xl font-mono text-start text-[#000000]">
            EDUCATION
          </p>

          <div className="flex flex-col ">
            <p className=" text-base font-mono">2017-2021</p>
            <p className=" text-base font-mono">
              Bachelor of Engineering (B.Eng)
            </p>
            <p className=" text-sm font-mono text-[#5e5d5d]">
              Program in Computer Engineering.
            </p>
            <p className=" text-sm font-mono text-[#5e5d5d]">
              Naresuan University.
            </p>
          </div>
        </div>
        <p className="text-white font-mono pb-20">Scroll Down</p>
      </div>

      {/* Page three */}
      <div
        style={{ backgroundImage: `url(${bg3})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-between px-5 py-10"
      >
        <div className="flex flex-col gap-3 px-5 py-5 bg-white bg-opacity-30">
          <p className="text-2xl font-mono text-start text-[#000000]">
            EXPERIENCE
          </p>

          <div className="flex flex-col">
            <p className=" text-base font-mono">Internship</p>
            <p className=" text-base font-mono">April 2021 - June 2021</p>

            <p className=" text-sm font-mono text-[#5e5d5d]">
              Bara Advanced InfoTech Co.,Ltd.
            </p>
            <p className=" text-sm font-mono text-[#5e5d5d]">Web design</p>
          </div>

          <div className="flex flex-col">
            <p className=" text-base font-mono">Work</p>
            <p className=" text-base font-mono">September 2021 - now</p>
            <p className=" text-sm font-mono text-[#5e5d5d]">
              KRATOS TRACKING CO., LTD.
            </p>
            <p className=" text-sm font-mono text-[#5e5d5d]">Web develope</p>
          </div>
        </div>
        <p className="text-white font-mono pb-20">Scroll Down</p>
      </div>

      {/* Page four */}
      <div
        style={{ backgroundImage: `url(${bg4})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-center bg-neutral-800 text-white"
      >
        <h2 className="text-4xl font-mono">THANK YOU.</h2>
        <p className="text-white font-mono pb-20">Scroll Up</p>
      </div>
    </div>
  );
}

export default AboutAsMo;

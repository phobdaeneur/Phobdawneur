import React from "react";
import bg2 from "../images/bg2.jpg";
import ki from "../images/ki.jpg";

function AboutUs() {
  return (
    <div className=" flex flex-row h-screen gap-12">
      <div className="w-1/4 h-screen bg-gradient-to-b from-[#ffaa55] to-[#f76300] px-10 flex flex-col gap-2 justify-between items-center">
        <div className=" pt-20 gap-8 flex flex-col items-center justify-center">
          <img src={ki} className="rounded-full w-40 h-40" />
          <div className="flex flex-col items-center justify-center">
            <p className=" text-3xl font-thin text-white">Dawruang Tanong</p>
            <p className=" text-xl font-thin text-white">[ DAW ]</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-[#FFFFFF] w-4/5 h-8">
            <p className="text-2xl font-mono px-5 text-[#FFA446]">CONTACT</p>
          </div>

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
      </div>

      <div className=" flex flex-col gap-4 items-center px-5 pt-16 w-4/6">
        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className=" w-full h-44 rounded-xl bg-bottom"
        ></div>
        <div className=" grid grid-cols-2 w-full">
          {/* left */}
          <div className=" flex flex-col border-r-2 border-[#A1A1A1] gap-3">
            {/* EDUCATION */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-start">
                <p className="text-2xl font-mono text-end px-5 text-[#FFFFFF]">
                  EDUCATION
                </p>
              </div>
              <div className="flex flex-col ">
                <p className=" text-base font-mono">2017-2021</p>
                <p className=" text-base font-mono">
                  Bachelor of Engineering (B.Eng)
                </p>
                <p className=" text-sm font-mono text-[#A1A1A1]">
                  Program in Computer Engineering.
                </p>
                <p className=" text-sm font-mono text-[#A1A1A1]">
                  Naresuan University.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-3">
            {/* EXPERIENCE */}
            <div className="flex flex-col gap-3 items-end ">
              <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-end">
                <p className="text-2xl font-mono text-end px-5 text-[#FFFFFF]">
                  EXPERIENCE
                </p>
              </div>

              <div className="flex flex-col items-end ">
                <p className=" text-base font-mono">Internship</p>
                <p className=" text-base font-mono">April 2021 - June 2021</p>

                <p className=" text-sm font-mono text-[#A1A1A1]">
                  Bara Advanced InfoTech Co.,Ltd.
                </p>
                <p className=" text-sm font-mono text-[#A1A1A1]">Web design</p>
              </div>

              <div className="flex flex-col items-end ">
                <p className=" text-base font-mono">Work</p>
                <p className=" text-base font-mono">September 2021 - now</p>
                <p className=" text-sm font-mono text-[#A1A1A1]">
                  KRATOS TRACKING CO., LTD.
                </p>
                <p className=" text-sm font-mono text-[#A1A1A1]">
                  Web develope
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

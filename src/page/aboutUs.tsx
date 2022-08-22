import React from "react";
import daisy from "../images/daisy.jpg";

function AboutUs() {
  return (
    <div className=" flex flex-row h-screen gap-28">
      <div className="w-96 h-full bg-[#F9B301] px-10 pt-10 flex flex-col gap-5">
        <div className=" absolute bottom-5">
          <p className=" text-2xl font-mono">Contact</p>
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
              Location : 968 U Chu Liang Building
              <p>Fl. 5, Rama 4 Rd, Silom, Bangrak,</p>
              <p> Bangkok 10500</p>
            </a>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 items-center px-5 pt-10">
        <img src={daisy} className=" w-1/2 h-auto rounded-xl" />
        <div className=" flex flex-col">
          <p className=" text-lg font-mono">Name : Dawruang Tanong</p>
          <p className=" text-lg font-mono">Birth day : 07/07/1998</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

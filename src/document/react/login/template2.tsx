import React, { useState, useContext } from "react";
import logo from "../../../images/logo/logo1.png";
import { useNavigate } from "react-router-dom";
import loginIcon from "../../../images/loginIcon.svg";

function Template2() {
  const navigate = useNavigate();
  const loginFormLocation = () => {
    navigate("/loginForm");
  };
  return (
    <div className="font-mono relative py-24 md:py-48 bgLogin h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col-reverse md:flex-row drop-shadow-2xl shadow-2xl shadow-[#FFAF88]">
            {/* Login from */}
            <div className="w-full lg:w-1/2 bg-white ">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="username"
                  type="text"
                  placeholder="Username"
                />

                <label className="block mb-2 mt-4 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="********"
                />

                <button
                  onClick={loginFormLocation}
                  className="w-full px-4 py-2 mt-4 font-bold text-white bg-[#A75D1C] rounded-full hover:bg-[#FFB877] focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign in
                </button>

                <hr className="mb-6 border-t" />
                <div className="space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
            {/* Login from */}

            {/* Right logo */}
            <div className="h-full w-full lg:w-1/2 bg-[#FFEDE1] block px-5 ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-end">
                  <img src={logo} className="w-12 pt-4 " />
                  <h3 className="pt-2 text-2xl text-left">PHOBDAWNEUR</h3>
                </div>

                <img src={loginIcon} className="lg:w-80 pt-4 px-5 w-64" />
              </div>

              <h3 className="pt-2 text-lg text-left">
                Sign in to websign from to Phobdawneur universe
              </h3>

              {/* <h3 className="pt-4 md:pt-12 lg:pt-16 text-sm flex justify-end item-end">
                968 อาคาร อื้อจือเหลียง ชั้น5
              </h3>
              <h3 className="text-sm flex justify-end items-end ">
                ถนนพระราม 4 แขวง สีลม เขต บางรัก กรุงเทพฯ 10500
              </h3> */}
            </div>
            {/* Right logo */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2;

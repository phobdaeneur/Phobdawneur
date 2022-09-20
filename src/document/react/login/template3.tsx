import React from "react";
import bg from "../../../images/bg12.jpg";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo/logo1.png";

function Template3() {
  const navigate = useNavigate();
  const loginFormLocation = () => {
    navigate("/loginForm");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen dark:bg-gray-900 py-6 flex flex-col justify-center items-center sm:py-12 gap-10 bg-cover"
    >
      <div className="flex flex-col items-center py-5 w-96 h-96 bg-black bg-opacity-30">
        <div className="h-14 w-14 p-2 bg-white rounded-full flex items-center justify-center">
          <img src={logo} className="h-12 w-auto" />
        </div>

        <label className="text-xl pt-3 text-center font-mono text-white">
          Welcome back!!
        </label>
        <form className="px-8 pt-3 pb-8 mb-4">
          <label className="block text-sm font-mono text-white">
            Email | Username
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-[#2A292F] font-mono border rounded shadow focus:ring-[#E7B077] focus:ring-4 appearance-none focus:outline-none focus:shadow-outline"
            name="username"
            type="text"
            placeholder="phobdawneur@gmail.com"
          />

          <label className="block mt-4 text-sm font-mono text-white">
            Password
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-[#2A292F] font-mono border rounded shadow focus:ring-[#E7B077] focus:ring-4 appearance-none focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="********"
          />

          <button
            onClick={loginFormLocation}
            className="w-full px-4 py-2 mt-6 font-mono text-white bg-[#2A292F] rounded-lg hover:bg-[#BD916A] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign in
          </button>

          <div className="space-y-4 text-white text-center pt-6 sm:-mb-8">
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
    </div>
  );
}

export default Template3;

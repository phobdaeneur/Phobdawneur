import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/logo/logo1.png";
import bg from "../../../images/bg.png";

function Template1() {
  const navigate = useNavigate();
  const loginFormLocation = () => {
    navigate("/loginForm");
  };
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="flex items-end justify-end py-20 h-full px-14 bg-gray-900 bg-opacity-40">
            <div>
              <div className="flex flex-row items-center gap-4">
                <img src={logo} className=" h-16 w-auto" />
                <h2 className="text-4xl font-bold text-white">Phobdawneur</h2>
              </div>

              <p className="max-w-xl mt-3 text-gray-300 indent-8">
                By proceeding, you agree to our Terms of Use and confirm you
                have read our Privacy and Cookie Statement.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                PHOBDAWNEUR
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Welcome black!!
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email | Username
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="phobdawneur@gmail.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600 dark:text-gray-200">
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*********"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    onClick={loginFormLocation}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <button className="text-blue-500 focus:outline-none focus:underline hover:underline">
                  Sign up
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;

import React from "react";
import bg from "../images/bg.jpg";
import bg2 from "../images/bg12.jpg";

function Cooking() {
  return (
    <div
      style={{ backgroundImage: `url(${bg2})` }}
      className="min-h-screen dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12 gap-10 bg-cover"
    ></div>
  );
}

export default Cooking;

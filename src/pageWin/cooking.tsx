import React from "react";
import bg from "../images/bg.jpg";
import bg2 from "../images/bg12.jpg";
import bg3 from "../images/bg2.png";
import bg4 from "../images/bg13.jpg";

function Cooking() {
  return (
    <div className="relative w-screen">
      {/* Page one */}
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-center bg-green-400"
      >
        <h2 className="text-4xl">The First Title</h2>
        <p>Scroll Down</p>
      </div>

      {/* Pagr two */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-center bg-indigo-600 text-white"
      >
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>

      {/* Page three */}
      <div
        style={{ backgroundImage: `url(${bg3})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-center bg-purple-600 text-white"
      >
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>

      {/* Page four */}
      <div
        style={{ backgroundImage: `url(${bg4})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover items-center justify-center bg-neutral-800 text-white"
      >
        <h2 className="text-4xl">The Fourth Title</h2>
      </div>
    </div>
  );
}

export default Cooking;

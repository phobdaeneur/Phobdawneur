import React from "react";
import bg from "../images/cooking/bg1.png";
import bg2 from "../images/cooking/bg5.png";
import bg3 from "../images/cooking/bg3.png";
import bg4 from "../images/cooking/bg4.png";

function Cooking() {
  return (
    <div className="relative w-screen">
      {/* Page one */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover bg-bottom items-center justify-between pt-20 text-white font-mono py-10"
      >
        <h2 className="text-4xl">Welcome to the my kitchen...</h2>
        <p>Scroll Down</p>
      </div>

      {/* Pagr two */}
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover bg-bottom items-center justify-center bg-indigo-600 text-white"
      >
        <h2 className="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>

      {/* Page three */}
      <div
        style={{ backgroundImage: `url(${bg3})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover bg-bottom items-center justify-center bg-purple-600 text-white"
      >
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>

      {/* Page four */}
      <div
        style={{ backgroundImage: `url(${bg4})` }}
        className="sticky top-0 h-screen flex flex-col bg-cover bg-bottom items-center justify-center bg-neutral-800 text-white"
      >
        <h2 className="text-4xl">The Fourth Title</h2>
      </div>
    </div>
  );
}

export default Cooking;

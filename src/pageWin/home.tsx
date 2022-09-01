import React from "react";
import daisy from "../images/daisy.jpg";
import dawneur from "../images/homeIma/dawneur.jpg";
import dawneur2 from "../images/homeIma/dawneur2.jpg";
import dawneur3 from "../images/homeIma/dawneur3.jpg";
import dawneur4 from "../images/homeIma/dawneur4.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Image */}

      <div className=" absolute left-0 w-1/4 h-screen bg-gradient-to-b from-[#ffaa55] to-[#f76300]"></div>
      <div className="flex flex-row items-center justify-between">
        <div className=" absolute left-20 w-2/5 z-20 rounded-xl">
          <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            infinite={true}
            renderPrevButton={() => {
              return (
                <button className="px-4 absolute left-3 top-3/4 text-white">
                  Previous
                </button>
              );
            }}
            renderNextButton={() => {
              return (
                <button className="px-4 absolute right-3 top-3/4 text-white">
                  Next
                </button>
              );
            }}
          >
            <img src={dawneur} className="sliderimg rounded-2xl" />
            <img src={dawneur2} className="sliderimg rounded-2xl" />
            <img src={dawneur3} className="sliderimg rounded-2xl" />
            <img src={dawneur4} className="sliderimg rounded-2xl" />
          </AliceCarousel>
        </div>

        {/* Data */}
        <div className=" absolute right-10 flex flex-col items-start gap-8 px-10 w-1/2">
          <label className=" text-[#1A1A1A] text-4xl font-serif">
            Welcome to my universe
          </label>
          <p className=" text-[#1A1A1A] text-xl font-serif indent-20">
            ดาวเหนือ มีชื่อจริง ๆ ว่า ดาวโพลาริส (Polaris)
            เป็นดาวฤกษ์สว่างในกลุ่มดาวหมีเล็ก (Ursa Minor) แต่ที่เรามักเรียกว่า
            ดาวเหนือ นั่นก็เพราะดาวโพลาริส เป็นดาวฤกษ์ที่ปรากฏใกล้
            “ขั้วฟ้าเหนือ”
            เป็นบริเวณที่แกนหมุนของโลกชี้ไปบนท้องฟ้าพอดีทำให้เป็นดาวที่ไม่ขึ้นไม่ตก
            และปรากฏอยู่นิ่ง ๆ เหนือขอบฟ้าทางทิศเหนือตลอดทั้งคืน
            เเล้วคุณเคยได้ยินประโยคที่บอกว่า
            เมื่อคุณเดินหลงทางให้มองหาดาวเหนือไหม? ดังนั้นเราจึงหวังว่าคุณจะ{" "}
            <a className="bg-clip-text text-transparent bg-gradient-to-r from-[#B44242] to-[#FF9339] underline decoration-[#f76300] decoration-wavy">
              พบดาวเหนือ(Phobdawneur)
            </a>{" "}
            ของคุณเองในสักวัน...
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

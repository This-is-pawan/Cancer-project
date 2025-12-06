import { useState, useEffect } from "react";
import first from "../assets/firstimage.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import fourth from "../assets/fourth.svg";
import fifth from "../assets/fifth.svg";
import SuccessGrid from "./SucessGrid";
const img = [
  {
    img: first,
    text: "Early detection saves lives. Do regular screening.",
  },
  {
    img: second,
    text: "Symptoms ignored today can become danger tomorrow.",
  },
  {
    img: third,
    text: "Support cancer fighters. They are stronger than you think.",
  },
  {
    img: fourth,
    text: "A healthy lifestyle can reduce cancer risk by 40%.",
  },
  {
    img: fifth,
    text: "Cancer is not the end—treatment and hope exist.",
  },
];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === img.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [img.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? img.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === img.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
    <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
      <div
        className="flex transition-all duration-700"
        style={{ transform: `translateX(-${currentIndex * 200}px)` }} 
      >
        {img.map((image, i) => (
          <div key={i} className="w-[600px] flex flex-col items-center">
            <img
              src={image.img}
              alt="awareness"
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="text-center mt-3 px-4 font-semibold text-lg text-red-600">
              {image.text}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 px-2 py-1 rounded shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 px-2 py-1 rounded shadow"
      >
        ▶
      </button>
    </div>
      <SuccessGrid/>
      </>
  );
};

export default Slider;

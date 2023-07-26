"use client";
import { Slider } from "@/components/Slider";
import { useState } from "react";

import "./main.css";

export default function Home() {
  const [selectedSlider, setSelectedSlider] = useState(1);
  // const [sliderDirection, setSliderDirection] = useState("slide-in");

  const handleSliderChange = (index: number) => {
    setSelectedSlider(index);
  };
  return (
    <main className="">
      <div className="w-full h-screen flex flex-col gap-y-10 items-center justify-center overflow-hidden relative">
        <div className="flex">
          <button
            className={`${
              selectedSlider === 1 ? "bg-black text-white" : "text-black"
            } px-10 py-5 `}
            onClick={() => handleSliderChange(1)}
          >
            Astrology
          </button>
          <button
            className={`${
              selectedSlider === 2 ? "bg-black text-white" : "text-black"
            } px-10 py-5 `}
            onClick={() => handleSliderChange(2)}
          >
            Puja
          </button>
        </div>
        <div
          className={`${
            selectedSlider === 1 ? "slide" : " slide-out"
          } absolute bottom-0`}
        >
          <Slider title={"slider1"} />
        </div>
        <div
          className={`${
            selectedSlider === 2 ? "slide" : "slide-out"
          }  absolute bottom-0`}
        >
          <Slider title="slider2" />
        </div>
      </div>
    </main>
  );
}

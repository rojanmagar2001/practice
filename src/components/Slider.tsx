"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import Image from "next/image";

export const Slider = ({ title }: any) => {
  return (
    <div className={`p-5 w-full flex items-center justify-center`}>
      <h1>{title}</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={true}
        // width={900}
        // className="w-full flex justify-around"
        // scrollbar={{ draggable: true }}
        // className="flex items-center"
        className="w-[1200px]"
      >
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 text-white">
            <Image src="/slider1.jpg" width={300} height={200} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

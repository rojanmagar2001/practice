"use client";
import Image from "next/image";
import CustomDateTimeInput from "@/components/CustomDateTimeInput";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <div className="">
        <CustomDateTimeInput />
      </div>
    </main>
  );
}

"use client";
// CustomDateTimeInput.js
import React, { ChangeEvent, useState } from "react";

const CustomDateTimeInput = () => {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
  };

  return (
    <div className="flex items-center bg-gray-700 w-full p-4 gap-x-2 justify-between text-gray-600">
      <input
        type="date"
        name="date"
        className="bg-transparent focus:outline-none p-2"
        value={dateTime.split("T")[0]}
        onChange={handleDateTimeChange}
        
      />
      |
      <input
        type="time"
        name="time"
        className="bg-transparent focus:outline-none p-2"
        value={dateTime.split("T")[1]}
        onChange={handleDateTimeChange}
      />
    </div>
  );
};

export default CustomDateTimeInput;

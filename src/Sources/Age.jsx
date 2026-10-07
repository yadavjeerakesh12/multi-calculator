import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function Age() {
  const [sd, setSD] = useState("");
  const [cd, setCD] = useState("");
  const [date,setDate] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");
  const Generate = () => {
    const start = new Date(sd);
    const Current = new Date(cd);
    if (isNaN(start.getTime()) || isNaN(Current.getTime())) {
      console.log("Enter a valid Date");
    }
    if (Current < start) {
      console.log("start Should be less than  ")
    }
    let dY = Current.getFullYear() - start.getFullYear();
    let dM = Current.getMonth() - start.getMonth();
    let dD = Current.getDate() - start.getDate();
    if (dD < 0) {
      dM--;
      const PreviousMonthDays = new Date(
        Current.getFullYear(),
        Current.getMonth(),
        0
      ).getDate();
      dD += PreviousMonthDays;
    }
    if (dM < 0) {
      dY--;
      dM += 12;
    }

    setDate(dD);
    setMonth(dM);
    setYear(dY);
    console.log("Difference is ", dY, "Year", " ", dM, "Months", dD, "Days")
  }
  return (
    <>
<div className="w-full min-h-screen flex justify-center items-start px-4 py-6 sm:px-6 md:px-8 lg:px-10">
  <div className="w-full max-w-lg border-2 rounded-xl p-4 sm:p-6 shadow-md">

    {/* Heading */}
    <div className="flex justify-center mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold bg-blue-400 px-4 py-2 rounded-lg text-center">
        Age Calculator
      </h1>
    </div>

    {/* Form */}
    <div className="w-full space-y-4">

      {/* Starting Date */}
      <div className="w-full">
        <Label className="block mb-2 text-sm sm:text-base">
          Starting Date
        </Label>

        <Input
          type="date"
          value={sd}
          onChange={(e) => setSD(e.target.value)}
          className="w-full text-white"
        />
      </div>

      {/* Current Date */}
      <div className="w-full">
        <Label className="block mb-2 text-sm sm:text-base">
          Current Date
        </Label>

        <Input
          type="date"
          value={cd}
          onChange={(e) => setCD(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Calculate Button */}
      <button
        onClick={Generate}
        className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
      >
        Calculate
      </button>

      {/* Result */}
      <div className="mt-6 border rounded-lg p-4 bg-blue-500">
        <h1 className="text-lg sm:text-xl font-bold mb-3">
          Difference is:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="border rounded-lg p-3">
            <p className="text-sm text-red-500">Years</p>
            <p className="text-xl font-bold">{year}</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="text-sm text-yellow-500">Months</p>
            <p className="text-xl font-bold">{month}</p>
          </div>
          
          <div className="border rounded-lg p-3">
            <p className="text-sm text-green-500">Days</p>
            <p className="text-xl font-bold">{date}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


    </>
  )
}

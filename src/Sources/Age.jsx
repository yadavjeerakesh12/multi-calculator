import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function Age() {
  const [sd, setSD] = useState("");
  const [cd, setCD] = useState("");

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
    console.log("Difference is ", dY, "Year", " ", dM, "Months", dD, "Days")
  }
  return (
    <>
      <div className='flex justify-center items-center flex-wrap flex-col w-full max-h-screen  border-2 mt-4 lg:p-4 '>
        <div>
          <h1 className='text-2xl text-white font-bold bg-blue-400 p-2 rounded'>Age Calculator </h1>
        </div>
        <div>
          <div className='border-2'>
            <Label>Starting Date</Label>
            <Input type="date"
              value={sd}
              onChange={(e) => setSD(e.target.value)}
            />
          </div>
          <div>
            <Label>Current Date</Label>
            <Input type="date"
              value={cd}
              onChange={(e) => setCD(e.target.value)}
            />
          </div>
          <button onClick={Generate}>
            Calculate
          </button>
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import Access from '@/pages/Access'
export default function Temperature() {
  const [conversion, setConversion] = useState("Celcius To Fahrenheit")
  const fer = ({ celcius }) => {
    return (celcius * 9 / 5) + 32
  }
  const cel = ({ fahrenheit }) => {
    return (fahrenheit - 32) * 5 / 9
  }
  return (
    <>
      <select className='text-black bg-white'
        value={conversion}
        onChange={(e) => setConversion(e.target.value)}
      >
        <option value="Celcius To Fahrenheit">Celcius To Fahrenheit</option>
        <option value="Fahrenheit To Celcius">Fahrenheit To Celcius</option>
      </select>
      {conversion === "Celcius To Fahrenheit" && (<Access
        title="Celcius To Fahrenheit"
        inputs={
          [
            {
              "name": "celcius",
              "label": "Celcius",
              "placeholder": "Enter Celcius "
            }
          ]
        }
        button_title="Convert"
        output="Fahrenheit is "
        formula={fer}
      />)}
      {conversion === "Fahrenheit To Celcius" && (
        <Access
          title="Fahrenheit To Celcius"
          inputs={
            [
              {
                "name": "fahrenheit",
                "label": "Fahrenheit",
                "placeholder": "Enter Fahrenheit "
              }
            ]
          }
          button_title="Convert"
          output="Celcius  is "
          formula={cel}
        />)}
    </>
  )
}

import React from 'react'
import Access from '@/pages/Access'
export default function Time() {
  const TimeFormula = ({ distance, speed }) => {
    return distance / speed;
  };
  return (
    <>
      <Access
        title="Calculate Time"
        inputs={[
          {
            name: "speed",
            label: "Speed",
            placeholder: "Enter Speed"
          },
          {
            name: "distance",
            label: "Distance",
            placeholder: "Enter Distance"
          }
        ]}
        button_title="Calculate"
        output="Time is "
        formula={TimeFormula}
      />

    </>
  )
}

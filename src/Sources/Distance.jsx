import React from 'react'
import Access from '@/pages/Access'
export default function Distance() {
  const DistanceFormula = ({ time, speed }) => {
    return time * speed;
  };
  return (
    <>
      <Access
        title="Calculate Distance"
        inputs={[
          {
            name: "time",
            label: "Time",
            placeholder: "Enter time"
          },
          {
            name: "speed",
            label: "Speed",
            placeholder: "Enter Speed"
          }
        ]}
        button_title="Calculate"
        output="Distance is "
        formula={DistanceFormula}
      />
    </>
  )
}

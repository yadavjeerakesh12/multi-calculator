import React from 'react'
import Access from '@/pages/Access'
export default function Speed() {
  const SpeedFormula = ({ time, distance }) => {
    return distance / time;
  };
  return (
    <>
      <Access
        title="Calculate Speed"
        inputs={[
          {
            name: "time",
            label: "Time",
            placeholder: "Enter time"
          },
          {
            name: "distance",
            label: "Distance",
            placeholder: "Enter Distance"
          }
        ]}
        button_title="Calculate"
        output="Speed is "
        formula={SpeedFormula}
      />
    </>
  )
}

import React from 'react'
import Access from '@/pages/Access'
export default function Compound() {
  const compound = ({principle,rate,time,Quarterly}) => {
   return principle * (1 + rate / Quarterly) ** (Quarterly * time)
  }
  return (
    <>
      <Access
        title="Compound Interest "
        inputs={[
          {
            name: "principle",
            label: "Principle Amount",
            placeholder: "Enter Principle Amount "
          },
          {
            name: "rate",
            label: "Rate % ",
            placeholder: "Enter Rate of Ammount  "
          }
          ,
          {
            name: "time",
            label: "Time ",
            placeholder: "Enter Time "
          }
          ,
          {
            name: "Quarterly",
            label: "Quarterly(n)",
            placeholder: "Enter value of n (Quarterly) "
          }
        ]}
        button_title="Generate"
        output="Compound Interest is "
        formula={compound}
      />
    </>
  )
}

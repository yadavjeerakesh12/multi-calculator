import React from 'react'
import Access from '@/pages/Access'
import { useState } from 'react'
export default function Loan() {
  const Loan = ({principle,rate,Quarterly})=>{
    let Rate = rate / 12 / 100
     return (principle * Rate * Math.pow(1 + Rate,Quarterly) / (Math.pow(1 + Rate,Quarterly) - 1));
  }
  return (
    <>
      <Access
        title="Loan/EMI Calculator "
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
            name: "Quarterly",
            label: "Quarterly(months)",
            placeholder: "Enter value of n (Quarterly) "
          }
        ]}
        button_title="Generate"
        output="LOAN/EMI/Months is "
        formula={Loan}
      />
    </>
  )
}

import React from 'react'
import Access from '@/pages/Access'
export default function Simple() {
  const SI = ({principle,rate,time}) => {
    return (principle*rate*time)/100

  }
  return (
    <>
    <Access
            title="Simple Interest"
            inputs={[
              {
                name: "principle",
                label: "Principle Amount",
                placeholder: "Enter Principle Amount "
              },
              {
                name: "rate",
                label: "Rate",
                placeholder: "Enter Rate of Amount "
              },
              {
                name: "time",
                label: "Time",
                placeholder: "Enter Time of Amount "
              }
            ]}
            button_title="Evaluate"
            output="Simple Interest is "
            formula={SI}
          />
    </>
  )
}

import Access from '@/pages/Access'
import React, { useState } from 'react'

export default function Profit() {
  const [change, setChange] = useState("Profit");
  const profit = ({selling,cost})=>{
    return (selling-cost);
  }
  const loss = ({selling,cost})=>{
    return (cost-selling);
  }
  return (
    <>
      <select
      className='text-black bg-white'
      value={change} onChange={(e) => setChange(e.target.value)}>
        <option value="Profit">Profit Calculator</option>
        <option value="Loss">Loss Calculator</option>
      </select>
      {change === "Profit" &&
        <Access
          title="Profit  Calculator"
          inputs={
            [
              {
                "name": "selling",
                "label": "Selling Price",
                "placeholder": "Enter Celling Price"
              },
              {
                "name": "cost",
                "label": "Original Cost ",
                "placeholder": "Enter Original Cost "
              }
            ]
          }
          button_title="Profit"
          output="Profit is "
          formula={profit}

        />
      }
      {change === "Loss" &&
        <Access
          title="Loss Calculator"
          inputs={
            [
              {
                "name": "selling",
                "label": "Selling Price",
                "placeholder": "Enter Celling Price"
              },
              {
                "name": "cost",
                "label": "Original Cost ",
                "placeholder": "Enter Original Cost "
              }
            ]
          }
          button_title="Loss"
          output="Loss is "
          formula={loss}
        />
      }
    </>
  )
}

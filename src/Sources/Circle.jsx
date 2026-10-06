import Access from "@/pages/Access"
import { useState } from "react"
export default function Circle() {
  const area = ({ radius }) => {
    return 3.14 * radius * radius
  }
  const circum = ({ radius }) => {
    return 3.14 * radius * 2
  }
  const [change, setChange] = useState("Area of Circle")
  return (
    <>
      <select 
      className="text-black bg-white"
      value={change} onChange={(e) => setChange(e.target.value)}>
        <option value="Area of Circle">Area of Circle</option>
        <option value="Circumference of Circle">Circumference of Circle</option>
      </select>
      {change === "Area of Circle" &&
        <Access
          title="Area of Circle"
          inputs={[
            {
              name: "radius",
              label: "Radius of Circle",
              placeholder: "Enter Radius of circle"
            }
          ]}
          button_title="Calculate"
          output="Area of Circle is "
          formula={area}
        />
      }
      {change === "Circumference of Circle" &&
        <Access
          title="Circumference of Circle"
          inputs={[
            {
              name: "radius",
              label: "Radius of Circle",
              placeholder: "Enter Radius of circle"
            }
          ]}
          button_title="Calculate"
          output="Circumference of Circle is "
          formula={circum}
        />
      }
    </>
  )
}

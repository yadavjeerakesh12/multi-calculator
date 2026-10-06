import Access from "@/pages/Access";
import { useState } from "react";
export default function Rectangle () {
  const rectangleArea = ({ length, width }) => {
    return length * width;
  };
  const rectanglePera = ({ length, width }) => {
    return 2 * (length + width);
  };
  const [change, setChange] = useState("Area of Rectangle")
  return (
    <>
      <select
        className="text-black bg-white"
        value={change} onChange={(e) => setChange(e.target.value)}>
        <option value="Area of Rectangle">Area of Rectangle</option>
        <option value="Perimeter of Rectangle">Perimeter of Rectangle</option>
      </select>
      {change === "Area of Rectangle" &&
        <Access
          title="Area of Rectangle"
          inputs={[
            {
              name: "length",
              label: "Length of Rectangle",
              placeholder: "Enter length"
            },
            {
              name: "width",
              label: "Width of Rectangle",
              placeholder: "Enter Width"
            }
          ]}
          button_title="Calculate Area"
          output="Area of Rectangle is "
          formula={rectangleArea}
        />
      }
      {change === "Perimeter of Rectangle" &&
        <Access
          title="Perimeter of Rectangle"
          inputs={[
            {
              name: "length",
              label: "Length of Rectangle",
              placeholder: "Enter length"
            },
            {
              name: "width",
              label: "Width of Rectangle",
              placeholder: "Enter Width"
            }
          ]}
          button_title="Calculate Area"
          output="Perimeter of Rectangle is "
          formula={rectanglePera}
        />
      }
    </>
  )
}

import React from 'react'
import Access from '@/pages/Access'
export default function Triangle() {
  const TriangleArea = ({ base, height }) => {
    return (base * height)/2;
  };
  
  return (
    <>
      <Access
              title="Area of Triangle"
              inputs={[
                {
                  name: "base",
                  label: "Base of Triangle",
                  placeholder: "Enter Base"
                },
                {
                  name: "height",
                  label: "Height of Triangle",
                  placeholder: "Enter Height"
                }
              ]}
              button_title="Calculate Area"
              output="Area of Triangle is "
              formula={TriangleArea}
            />
    </>
  )
}

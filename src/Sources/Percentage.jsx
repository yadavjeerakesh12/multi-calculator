import Access from "@/pages/Access";
export default function Percentage() {

  const percentage = ({ used, total }) => {
    return (used / total) * 100;

  }
  return (
    <>
      <Access
        title="Percntage Calculator "
        inputs={[
          {
            name: "used",
            label: "Used Resources",
            placeholder: "Enter used Resources "
          },
          {
            name: "total",
            label: "Total Resources ",
            placeholder: "Enter total resources "
          }
        ]}
        button_title="Generate"
        output="Percentage is "
        formula={percentage}
      />
    </>
  )
}

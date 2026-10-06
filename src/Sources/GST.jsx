import Access from "@/pages/Access";
export default function GST() {
  function GST({price,gst}) {
    return ((price * (gst)) / 100);
  }
  return (
    <>
      <Access
        title="GST Calculator  "
        inputs={[
          {
            name: "price",
            label: "Original Price",
            placeholder: "Enter original price "
          },
          {
            name: "gst",
            label: "Gst% ",
            placeholder: "Enter Gst %"
          }
        ]}
        button_title="Generate"
        output="GST Amount is "
        formula={GST}
      />
    </>
  )
}

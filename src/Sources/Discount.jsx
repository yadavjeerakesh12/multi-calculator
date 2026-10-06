
import Access from "@/pages/Access";
export default function Discount() {
  function Discount({ price, discount }) {
    return (price * discount) / 100;
  }
  return (
    <>
      <Access
        title="Discount Calculator  "
        inputs={[
          {
            name: "price",
            label: "Original Price",
            placeholder: "Enter original price "
          },
          {
            name: "discount",
            label: "Discount% ",
            placeholder: "Enter discount %"
          }
        ]}
        button_title="Generate"
        output="Discount Amount is "
        formula={Discount}
      />

    </>
  )
}

import Access from "@/pages/Access";
export default function BMI() {
    function bmi({mass,height}){
      return mass / (height*height);
    }
  return (
    <>
      <Access
              title="BMI Calculator "
              inputs={[
                {
                  name: "mass",
                  label: "Weight(kg)",
                  placeholder: "Enter your good weight "
                },
                {
                  name: "height",
                  label: "Height(m) ",
                  placeholder: "Enter your good height "
                }
              ]}
              button_title="Generate"
              output="BMI is "
              formula={bmi}
            />

    </>
  )
}
//Standard Adult BMI Categories
// • Underweight: Less than 18.5
// • Healthy weight: 18.5 to 24.9
// • Overweight: 25.0 to 29.9
// • Obesity: 30.0 or higher
// Limitations of BMI
// • Muscle vs. Fat: It does not distinguish between body fat, bone density, and muscle mass, which can misclassify muscular individuals as overweight.
// • Body Composition: It ignores age, sex, and ethnic differences in fat distribution.
// • Screening Only: It is not a direct diagnostic measure of individual health.
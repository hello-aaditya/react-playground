import CustomButton from "./Components/CustomButton"

export default function App() {
  const label1 = "Button";
  const color1 = "#ffde59";

  const label2 = "Submit";
  const color2 = "Green";

  const label3 = "Reset";
  const color3 = "Red";


  return (
    <>
      <h2>Custom Button Application</h2>
      <CustomButton myLabel = {label1} myColor={color1}/>
      <CustomButton myLabel = {label2} myColor={color2}/>
      <CustomButton myLabel = {label3} myColor={color3}/>
    </>
  )
}
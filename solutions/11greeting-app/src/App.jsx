import Greet from "./Components/Greet"

export default function App() {
  const name1 = "Jeeva";
  const name2 = "Jyoti";
  const name3 = "Prakash";
  return (
    <>
      <h1>Welcome in React</h1>
      <Greet n1={name1} n2={name2} n3={name3}/>
    </>
  )
}
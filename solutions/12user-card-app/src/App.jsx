import UserCard from "./Components/UserCard"

export default function App() {
  const name1 = "Jeeva";
  const age1 = 23;
  const city1 = "Kerala";

  const name2 = "Jyoti";
  const age2 = 25;
  const city2 = "Rajsthan";
  return (
    <>
      <h2>User Details:</h2>
      <UserCard  name={name1} age={age1} city={city1}/>
      <UserCard  name={name2} age={age2} city={city2}/>
    </>
  )
}
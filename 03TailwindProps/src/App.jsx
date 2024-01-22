import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Card";

function App() {
  const [count, setCount] = useState(0); // hooks

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black mb-5 ">
        Tailwind Test
      </h1>
      <Cards username={"Rahul"} btnText={"click me"} />
      <Cards username={"JackSparrow"} btnText={"click Here"} />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-yellow-400 rounded-xl p-4 text-white mb-4">
        Tailwind test
      </h1>
      <Cards username="Rahul" btnText="Click Me" />
      <Cards username="Shashi" btnText="Visit Me" />
    </>
  );
}

export default App;

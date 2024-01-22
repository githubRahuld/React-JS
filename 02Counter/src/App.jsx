import { useState } from "react";
import "./App.css";

function App() {
  // [variable,function]
  let [counter, setCounter] = useState(1); // hooks

  function addValue() {
    if (counter == 10) {
      // counter 10 se jada nahi hoga
      setCounter(--counter);
    }
    setCounter(++counter); //at every place counter value changes
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  }

  function removeValue() {
    if (counter == 0) {
      //counter 0 se kam nahi hoga
      setCounter(++counter);
    }
    setCounter(--counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>count: {counter} </h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);

  function addCount() {
    if (count < 20) setCount(++count);
  }
  function DesCnt() {
    if (count > 0) setCount(--count);
  }

  return (
    <>
      <div className="btn">
        <button onClick={addCount}>INC {count} </button>
        <br />
        <br />
        <button onClick={DesCnt}>DEC {count}</button>
      </div>
    </>
  );
}

export default App;

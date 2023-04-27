import React, { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(10);
  const [counter, dispatch] = useReducer((state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "byamount":
        return state + action.payload;
      default:
        return state;
    }
  }, 7);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>

      <select onChange={(e) => setAmount(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>

      <button
        onClick={() => dispatch({ type: "byamount", payload: Number(amount) })}
      >
        {amount}
      </button>
    </div>
  );
}

export default App;

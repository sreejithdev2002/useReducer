import React from "react";
import { useReducer } from "react";
import '../Components/CounterCss.css';

  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
function CounterUseReducer() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <p>Count : {count} </p>
      <div className="buttons">
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterUseReducer;

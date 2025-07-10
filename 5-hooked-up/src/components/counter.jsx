import { useEffect, useState } from "react"
import UseCustonEffectHook from "../hooks/use-custom-effect-hook";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  const increment = () => {
    setCounter1(counter + 1);
  }
  const decrement = () => {
    setCounter1(counter - 1);
  }
  
  UseCustonEffectHook(() => {
    console.log("Effect triggered !!");
  },[counter]);

  console.log("re-rendered!!!");

  return (
    <div>
        <h2>Counter</h2>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Counter
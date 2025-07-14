import { useEffect, useRef, useState } from "react"

const UseRefHook = () => {
    const ref = useRef(0);
    const [count, setCount] = useState(0);
    console.log("re-rendered!!");

    const inputref = useRef(null);
    console.log(inputref.current);

    const inputref1 = useRef(null);
    useEffect(() => {
        inputref1.current.focus();
    })

  return (
    <div>
        <h3>
            <u>useRef hook</u>
        </h3>
        <h5> Question 1: What is UseRef in React ? </h5>
            {/* 
                - useRef is hook used to create a mutable reference that persists across renders.
                - It returns a mutable object with a dot current property (.current)
            */}
        <p>Reference : {ref.current}</p>
            {/* Even when the button is clicked it does not re-renders the component but it value is incremented in background and one some other state for example count in this case re-renders the component then the value is persisted and updated on the screen.
            - Useref variable does not trigger re-render of the component. */}
        <button onClick={() => ref.current += 1}>Increment</button> 

        <p> State Value : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h5> Question 2: When would you use useRef ?  </h5>
            {/* 
                - Accessing DOM elemens or managing Focus.
                - Storing mutable values that persists without causing re-renders.
                - Catching values to avoid re-initialization on re-renders. 
            */}
            <input ref={inputref}/>
            <button onClick={() => 
                {
                    inputref.current.focus();
                    inputref.current.value = "Dummy added !!!"
                }
                }>Set Focus</button>
            
        <h5> Question 3: How do you access a DOM element using useRef ? </h5>
            <input ref={inputref1}/>
        <h5> Question 4: Difference between useRef and useState ? </h5>
          {/*
             useState : 
                - Manages state and triggers re-renders whenever its value changes. When you updates its value using setStateValue, the component re-renders and the updated value is reflected in the UI.
             useRef : 
                - Holds a mutable value (current) that persists across renders without causing re-renders when you update it ( refValue.current = ... ), the component doesn't re-renders, but the updated value is stored and accessable across re-renders.
          */}
          

    </div>
  )
}

export default UseRefHook
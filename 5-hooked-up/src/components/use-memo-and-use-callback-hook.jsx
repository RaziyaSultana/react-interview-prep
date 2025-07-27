import { useCallback, useMemo, useState } from 'react'

const UseMemoAndCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);


    const squaredValue =() => {
        console.log('Expensive calculation...', counter2);
        return counter*counter;
    };
    // Without usememo squaredValue function (expensive calculations) is called/fired when we click decrement button that changes counter2 (which is not at all related to the squaredValue)

    const squaredValueUseMemo = useMemo(squaredValue,[counter]);
    // When usememo is used to memoiz the function then it does re-computes the value only when the dependency changes. It returns the memoized value

    const squaredValueUseCallback = useCallback(squaredValue,[counter]);
    // It returns the memoized version of function not value. When the decrement is clicked it returns the memoized version of the squaredValue which has the previous version of the counter2 value, and counter2 is updated only once the increment button is clicked and this is stored in memory using usecallback . 

  return (
    <div>
        <h3>
            <u>useMemo and useCallback Hook</u>
        </h3>

        <h5>Question 1: What is useMemo in React ?</h5>
        {/* 
            - It is a hook used to memoize the result of a function and cache it, recalculating it only if the dependencies change.
            - usememo does not return a function it returns a memoized value.
        */}
        <h2>Squared Counter: {squaredValueUseMemo}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <h2>Counter 2: {counter2}</h2>
        <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>

        <h5>Question 2: When should you use useMemo Hook?</h5>
        {/* 
            - When computing a value is expensive or time-consuming. 
            - When you want to prevent unnecessary re-computation of values across re-renders.
        */}

        <h5>Question 3: How does useMemo differ from useState ? </h5>
        {/* 
            useMemo memoizes a computed value and returns the cached value without causing re-renders, while useState manages state and triggers re-renders when state changes.
        */}

        <h5>Question 4: What is useCallback in React?</h5>
        {/* 
            It is a hook used to memoize a provided callback function, returning the memoized version of the function.
        */}
        <h2>Squared Counter: {squaredValueUseCallback()}</h2>

        <h5>Question 5: What happens when you use useCallback with empty dependencies?</h5>
        {/* 
            It will return the same memoized function on every render, which might be useful for performance optimization.
        */}
        <h5>Question 6: When should you not use usecallback or useMemo?</h5>
        {/* 
            - Event Handlers or Incline Functions
            - Excessive Memory Consumption
            - Garbage Collection concerns
        */}
    </div>
  )
}

export default UseMemoAndCallbackHook
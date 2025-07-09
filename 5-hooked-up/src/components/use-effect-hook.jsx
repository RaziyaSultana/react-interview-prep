import { useState, useEffect, useLayoutEffect } from "react"

const UseEffectHook = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      // Side effects code goes here
    
      return () => {
        // clean up code (optional)
        // Runs on component unmount or before re-runs
      }
    }, [
        // dependencies
    ])

    const fetchUser = async () => {
       const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
       const data = await res.json();
       setUser(data);
       console.log("DATA",data);
    }

    //fetchUser(); --> It runs whenever component renders

    useEffect(() => {
        fetchUser();
    }, []);
    
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds( (prevSecond) => prevSecond + 1);
        }, 1000);

        // Cleanup function: clear function before unmount or re-run
        return () => {
            clearInterval(interval);
            console.log("cleared Interval !!");
        }
    }, [])


    useEffect(() => {
        console.log("UseEffect hook here !!");
    }, []);

    useLayoutEffect(() => {
        console.log("useLayoutEffect hook here !!");

    }, []);

    return (
        <>
            <h2> useEffect hook !!</h2>
            <h5> Question 1: What is useEffect in React ? </h5>
            {/* 
                - useEffect is a hook used in functional components to perform side effects after rendering such as data fetching, subscriptions, or manual DOM manipulations.
            */}
            <h5> Question 2: Why is dependency array used in useEffect ? </h5>
            {/* 
                - When it is empty, it runs only once
                - When these values inside it changes, the effect is re-run
                - If removed, the effect runs after every single render

                - Handling dependencies ensures that theeffect runs only when necessary and prevents unnecessary re-execution of the effect, optimizing performance and avoiding potential bugs.
            */}

            <h5> Question 3: Give an example of useEffect for data fetching. </h5>
            <span>User : {user.name} </span>
            <span>Email : {user.email}</span>

            <h5> Question 4: Convert major lifecycle methods to useEffect and Explain. </h5>
            {/* {
                Explained in previous class-vs-function question 5.
            } */}
            
            <h5> Question 5: How to perform cleanup in useeffect? Explain with an example.</h5>
            {/* 
                - You can return a cleanup function inside the useEffect, which runs before the effect re-runs or when the component unmounts.
                - This is useful for cleaning-up subscriptions or event listeners.
            */}

           {seconds}

           <h5> Question 6: Explain useLayoutEffect hook and how it is different from useEffect. </h5>
           {/* 
                useEffect:-
                 - Asynchronous : Runs after the render cycle is committed to the screen.
                 - Good for Performance : Does not block the browser from painting changes on the screen.

                useLayoutEffect:-
                 - Synchronous : Runs synchronously immediately after the DOM is updated but before the browser paints anything on the screen.
                 - Potentially blocking : can potentailly cause delays in the rendering process if the operations are heavy.
                 It can be used when there is need to change anything in DOM before the next render cycle starts
           */}
            
        </>
    )
}

export default UseEffectHook;
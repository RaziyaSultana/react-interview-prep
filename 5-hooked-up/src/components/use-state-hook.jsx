import { useState } from "react";

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        // console.log("Data==>", name, value);
        setUserData({...userData, [name]: value});
    }
        console.log(userData);

    const handleIncrement = () => {
        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1
        setCount(count + 1); // 0 + 1
        
        // as a result it increments by 1 every time 

        // To fix above issue 

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <h2> useState hook </h2>
            <h5> Question 1: What is a useState hook ? </h5>
            {/* 
                useState is a hook in react that allows functional components to manage state by declaring state variables and providing a function to update them.
            */}

            <p>Count : {count}</p>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

            <h5> Question 2: What is output of the following code?</h5>
            <button onClick={handleIncrement}>Increment by 3</button>

            <h5> Question 3:  What is two way data binding and how can you achieve in React?</h5>
            {/* 
                - It is concept that allows the synchronization of data between the model (or state) and the view in both directions.
                - You can achieve it by combining state management with controlled components.
            */}
            <p>Value : {value}</p>
            <input value={value} onChange={(e) => setValue(e.target.value) }/>

            <h5>Question 4: Build a Form containing First name, Last name and email. Use only one state to manage all fields.</h5>

            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(userData)}}>          
                <input placeholder="Enter First name" type="text" name="firstname" onChange={handleInputChange} />
                <input placeholder="Enter Last name" type="text" name="lastname" onChange={handleInputChange}/>
                <input placeholder="Enter email" type="email" name="email" onChange={handleInputChange} />
                <button>Submit</button>
            </form>
            
            

        </>
    )

}

export default UseStateHook;
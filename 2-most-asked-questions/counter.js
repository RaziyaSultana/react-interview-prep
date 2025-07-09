const Counter2 = () => {
    //Initailizing state with count and setCount function
    const [count, setCount] = React.useState(0);


    
    const increment = () => {
        //Udating the state using setCount function
        setCount(count + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
};

// export default Counter2;

//Named export
 export {Counter2};
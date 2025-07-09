// example 1 -- does not works without babel script 

/*
function App(){
    return <div>Counter : 1</div> 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// example 2 -- works without babel script also

/*
function App(){

    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1);
    }

    return React.createElement(
        "div",
        null,
        React.createElement("p", null, `Counter : ${count}`),
        React.createElement("button", {onClick: increment}, "Increment")
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

*/


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE - 3 --> full example - Works after including babel script -- transpiler( as it helps to understand JSX)

function App(){
    const [count, setCount] = React.useState(0)
    const increment = () => {
        setCount(count + 1);
    }
    return <div>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
    </div> 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
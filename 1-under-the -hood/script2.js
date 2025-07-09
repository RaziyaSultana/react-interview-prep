function App(){
    const [count, setCount] = React.useState(0)
    const [message, setMessage] = React.useState(false)
    const [frameworks, setFrameworks] = React.useState(['Angular', 'React'])
    const [members, setMembers] = React.useState(
        [
         {id:111, name:'Nisar'}, 
         {id:77777, name:'Raziya'}])


    //Normal variables
    const counter = 1; 
    // value of this will be lost across re-renders unlike state
    //this variable does not trigger re-rendering
    //these can be used for storing any CONSTANTS eg: const msg = 'Hello';


    // Diffing algorithm
    // comparing the virtual doms old and new is more cost effective than updating actual DOM

    const increment = () => {
       /*
       As the usestate hook works asynchronouly it updates any change in state after entire code is executed.
       below code updates state only once hence increment only one time
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        counter = counter + 1;
        */

        //to make above code to work actually modify code as below
        setCount((prevcount) => prevcount + 1);
        setCount((prevcount) => prevcount + 1);
        setCount((prevcount) => prevcount + 1);
        setCount((prevcount) => prevcount + 1);
        setCount((prevcount) => prevcount + 1);

    }

    const togglemsg = () => {
        setMessage(!message);
    }


    const counterVDOMTree =  React.createElement(
        "div",
        null,
        React.createElement("p", null, `Counter : ${count}`),
        React.createElement("button", {onClick: increment}, "Increment")
    )
    console.log("virtual dom ---> ",counterVDOMTree)

    return   (
    <div>
        <h1>Example 1</h1>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>

        <h1>Example 2</h1>
        <div>        
         <button onClick={togglemsg}>toggleMessage</button>
         {message ? <h2>Message On</h2> : ''}
        </div>
        
        <h1>Example 3</h1>
        <div>
        {frameworks.map((item, index) => {
                return (
                    <li>{item}</li>
                )
            })
        }
        <button onClick={() => setFrameworks([...frameworks, 'Vue'])}>Add Item to bottom</button>
        
        <button onClick={() => setFrameworks(['Vue', ...frameworks])}>Add Item to top</button>
        
        {frameworks.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })
        }
        <button onClick={() => setFrameworks(['Vue', ...frameworks])}>Add Item to top</button>
        

        {members.map((item, index) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
            })
        }
        <button onClick={() => setMembers([{id:999, name:'Haniya'}, ...members])}>Add Item to top</button>


         {/* NOTE: 
         --When we add item to the bottom of the list all the above item are not re-rendered and item is added to the list without any readjustment.
         --But when we have to add item to the top of the list then the other items are also re-rendered hence slows down the performance of the App.
         --To avoid  such re-rendering of the item we need to provide keys to the mapped elements.
         --But it should be noted that using index as the key does not solve the problem because when we give index as the keys to the items and try to add to the top of the list then react compares the keys and hence finds that there are two items with key the key 0 which is not allowed in react hence re-renders all the items 
        --So each element in the list should have unique key to avoid such issue. */}
        </div>

    </div> 
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
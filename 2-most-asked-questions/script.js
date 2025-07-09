// import RenamedCounter2 from "./counter"; // for default export

import { Counter2 } from "./counter"; // for named export


const App = () => {

    return (
        <div>
            <h2>Ques 1: What is React and why is it used?</h2>
            {
                /*
                 - React is a popular javascript Library used for building User interfaces (UIs) for web applications.
                - It's known for its efficiency, flexibility, and reusability in creating interactive UI components.
                - React allows developers to build coplex UIs by breaking them down into smaller reusable pieces called components.
                - These components can manage their state, making it easier to build and maintain large-scale applications
                */
            }

            <h2>Ques 2: What is JSX, and why is it used?</h2>
            {
                /*
                    - JSX -> Javascript XML .
                    - Allows you to write HTML-like code within JavaScript.
                    - JSX is used in React to define the structure of components.
                */
            }

            <h2>Ques 3: What is a React component?</h2>
            {
                /* 
                    - reusable building block for UI.
                    - It cab be a class or a function that returns JSX
                */
            }
            <MyComponent/>

            <h2>Ques 4: What is the difference between state and props?</h2>

            <StateVsProps propExample={"I am a prop"}/>
            {
              /*
              
                - **Mutability:** State is mutable and manages within the component itself,
                while props are immutable and passed from parent to child components.

                - **Ownership:** Components own and manage their own state, while props are owned and managed by the parent component.

                - **Usability:** State is used for internal component data that might change over time, while props are used to pass data from parent to child components.

              */
            }

            <h2>
                Ques 5: What is prop drilling?
            </h2>

            {/*
                Process of passing down props through multiple levels of nested components
            */}
            <GrandparentComponent/>

            <h2>Ques 6: What is a React fragment, and why is it used?</h2>
            {/**
             -React fragment is a way to group multiple elements without adding an extra HTML element to the DOM.

              ex:-

                <>
                  <div></div>
                  <div></div>
                </>

                    OR
                
                <React.Fragment>
                  <div></div>
                  <div></div>
                </React.Fragment>


             */}

            <h2>Ques 7: How do you define and use state in a React Functional component? How are they different from normal variables?</h2>
            {
                /**
                 *A state is responsible for re-rendering the component whenever there is a change unlike a normal variable
                 */
            }
            <Counter />
            
            <h2>Ques 8: How do you define and use state in a React class component?</h2>

            <CounterNew />

            <h2>Ques 9: How do you pass props to a functional component?</h2>
                {/** already explained above */}
            <h2>Ques 10: What are PropTypes?</h2>
                {/**
                 * define type of the prop that is passed to the children
                 * ex:- 
                     StateVsProps.propTypes = {
                            propExample: PropTypes.string,
                        } 
                
                 */}

                 <h2>Ques 11: How do you use props in a class component?</h2>

                <h2>Ques 12: In how many ways can we export/import things from a JS Module?</h2>

                {/**
                 ** Default Export/Import:
                    - Use it when you want to export something by default.
                    - Multiple default exports are not allowed from the same module
                    - We can refer to the default exported thing by any name, so the name not significant.

                    ** Named Export/Import:
                       - Use it when you have multiple things to be exported from a JS Module
                       - Named Exports ust be referred to by the Exact same name while importing them
                 */}
                
                {/*
                 for default export
                 <RenamedCounter2/> 
                 */}
                 {/* for named export  */}
                 <Counter2 />


                <h2>Ques 13: What is Virtual DOM?</h2>
                {/**
                 - A logical representation of the actual DOM in the form of React Elements.
                 - A programming concept where a virtual representation of the UI is kept in the memory.
                 - It is an object that has React Elements to represent the UI.
                 */}
                <h2>Ques 14: Reconciliation vs Rendering?</h2>
                {/**
                  - Recoonciliation: The process of computing the difference between the two VDOMs.
                  - Rendering: The actual updation of the information in the rendering environment. 
                 */}
                <h2>Ques 15: What is the Diff Algorithm?</h2>
                {/**
                  - Whenever the state or props get updated VDOM tree is generated.
                  -Diffing Algorithmcalculates the difference between the 2 VDOMs (the previous VDOM and the updated VDOM).
                  - After calculating this diff only the actual DOM is updated. This makes React capable of doing fast DOM manipulations.
                 */}

        </div>
    );
}


const MyComponent = () => {
    return <div>
     <h5>Hellow from a functional component</h5>
     <ul>
        <li>
             reusable building block for UI.
        </li>
        <li>
              It cab be a class or a function that returns JSX
        </li>
     </ul>
     </div>
}
///////////////
const StateVsProps = (props) => {
    const [stateExample, setSetstateExample] = React.useState('I am a state')
    return <div>
        <ul>
            <li>{stateExample}</li>
            <li>{props.propExample}</li>
        </ul>
    </div>
}

StateVsProps.propTypes = {
    propExample: PropTypes.string,
}
///////////////////
const GrandparentComponent = () => {
    const data = "Hellow from Grandparent";

    return <ParentComponent data={data} />
}

const ParentComponent = ({data}) => {
    return <ChildComponent data={data}/>
}

const ChildComponent = ({data}) => {
    return <GrandchildComponent data={data} />;
}

const GrandchildComponent = ({data}) => {
    return <p>{data}</p>
}
////////////////////


const Counter = () => {
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
}

////////////////////

class CounterNew extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        count: 0,
    };
   }
   incrementCount() {
    this.setState({count: this.state.count + 1});
   } 

   render(){
    return (
        <div>
             {/* <p>Count: {this.state.count}</p> */}
             <DisplayCount countProp={this.state.count}/>
            <button onClick={() => this.incrementCount()}>Increment</button>
        </div>
    )
   }
}

////////////////

class DisplayCount extends React.Component{
    render() {
        return <p>Count: {this.props.countProp}</p>;
    }
}

//////////////////

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App))
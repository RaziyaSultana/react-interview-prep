function App()
{
    return (
        <div>
            <h2>Types of Compoents</h2>
            <h5>Question 1: What are Smart / Stateful / Container components?</h5>

            {
                /**
                 * Manages state, handles business logic, and passes data down to presentational components.
                 */
            }

            <h5>Question 2: What are Dumb / Stateless /Presentaional components?</h5>
            {/* 
                - Only renders UI based on the props it receives.
                - Doesn't have its own state or life cycle methods.
            */}

            <h5> Question 3: What are Higher Order Components (HOC)?</h5>
            {/* 
                - Function that take a components and returns a new enhanced component.
                - Used for code reuse, logic sharing, and adding additional functionalities to components.
                - "with" is attached at the front before the component name for HOC
            */}
            <FeautureWithAuth />
            <EnhancedFeatureFn />

            <h5>Question 4: What are Pure Components?</h5>
            {/* 
                - Optimize the rendering performance of components by reducing unneccessary re-renders
            */}
            <Counter />
            
            <h5> Question 5: What are Controllled Components?</h5>
            {/* 
                - Value of the input feild is controlled by React through state.
                
            */}
            <ControlledInput />

            <h5> Question 5: What are Un-Controllled Components?</h5>
            {/* 
                - Input feild maintains its own state using the DOM.
                - React doesn't control the value, but it an still interact with the input using refs.
            */}
            <UnControlledInput />

        </div>
    );
}
//...................

const ControlledInput = () => {
    const  [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // input -> state -> input -> state

    return(
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Value: {value}</p>
        </div>
    )
}

const UnControlledInput = () => {
    const inputRef = React.useRef(null);
    function handleClick(){
        console.log(inputRef?.current?.value);
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <p>Value: </p>
            <button onClick={handleClick}>Get Value</button>
        </div>
    )
}

//...................
const Counter = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleClick}>Increment</button>
            <MemoizedComponent />
            <MemoizedComponentFn />
        </div>
    )
}

// class MemoizedComponent extends React.Component {
//     render() {
//         console.log("class component re-rendered!!");
//         return(
//             <div>Pure Class Component</div>
//         )
//     }
// }

class MemoizedComponent extends React.PureComponent {
    render() {
        console.log("class component re-rendered!!");
        return(
            <div>Pure Class Component</div>
        )
    }
}

// const MemoizedComponentFn = () =>{
//         console.log("Functional component re-rendered!!");
//         return(
//             <div>Pure Fn Component</div>
//         )
// }

const MemoizedComponentFn = React.memo( () =>{
        console.log("Functional component re-rendered!!");
        return(
            <div>Pure Fn Component</div>
        )
})

//HOC in functional
const withLoginFn = (WrappedComponent) => {
    return () => {

        function login() {
            //login logic
            console.log("Login Successful -- functional");
        }

        function logout(){
            //logout logic
            console.log("Logout Successfull -- functional");
        }

            return <WrappedComponent login={login} logout={logout}/>
    }
}

function FeatureComponentFn(props){
        return(
            <div>
            <button onClick={() => props.login()}>Login(Fn)</button>
            <button onClick={() => props.logout()}>Logout(Fn)</button>
            </div>
        )
}
const EnhancedFeatureFn = withLoginFn(FeatureComponentFn);

//HOC in class
const withLogin = (WrappedComponent) => {
    return class extends React.Component{

        login() {
            //login logic
            console.log("Login Successful");
        }

        logout(){
            //logout logic
            console.log("Logout Successfull");
        }

        render(){
            return <WrappedComponent login={this.login} logout={this.logout}/>
        }
    }
}

class FeatureComponent extends React.Component{
    render(){
        return(
            <div>
            <button onClick={() => this.props.login()}>Login</button>
            <button onClick={() => this.props.logout()}>Logout</button>
            </div>
        )
    }
}

const FeautureWithAuth = withLogin(FeatureComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
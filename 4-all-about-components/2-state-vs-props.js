function App(){


    return (
        <div>
            <h5>Question 1: Explain state vs props in both class and functional components.</h5>
            {
                /*
                Props : 
                 - Read-only data passed from parent component to child component.
                 - Immutable and used to communicate between components.
                */
            }

            <ParenComponent/>
            <ParenComponentFn/>

            {
                /*
                 State :
                  -  Mutable and represents the internal state of the component.
                  -  Managed and controlled within thecomponent itself.
                */
            }

            {
                /*
                  Difference: 
                   - Props are immutable data passed down from parent component.
                   - State is mutable and represents the internal state of the component.
                   - In class component, `this.props` and `this.state` are use to access props and state respectively.
                   - In functional components, props are passed as arguments to the component funtion and state is managed using hooks like `useState()`.
                 */
            }

            <h5> Question 2: What is a children prop?</h5>
            {
                /*

                */
            }
            <Card><b>This is Card 1</b></Card>
            <Card><b>This is Card 2</b></Card>

        </div>
    )

}

//parent component
class ParenComponent extends React.Component{

    render(){
        return(
            <ChildComponent name="raziya" age="27" />
            //  <ChildComponentFn name="haniya" age={0.9}/> --> can also call functional component inside class component
        )
    }
}

//child component
class ChildComponent extends React.Component{

    render(){
        const {name, age} = this.props;
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
{/* 
                 <p>{name}</p>
                <p>{age}</p> */}
            </div>
        )
    }
}

const ParenComponentFn = () => {
    return (
        <ChildComponentFn name="haniya" age={0.9}/>
    )
}

const ChildComponentFn =(props) => {
    return(
        <div>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    )
}

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    incrementCount= () => {
        this.setState({count : this.state.count + 1});
    }   

    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

const CounterFn = () => {
    const [count, setCount] = React.useState(0);

    incrementCount= () => {
        setCount(count + 1);
    } 
    return (
         <div>
                <p>Count : {count}</p>
                <button onClick={incrementCount}>Increment</button>
            </div>
    )
}

{
    /*
    destructuring the props

    const ChildComponentFn =({name, age}) => {
    return(
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    )
}
    */
}

const Card = (props) => {
    return (
        <div style={{color:'orangered'}}>
            <p>Card Title</p>
            {props.children}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
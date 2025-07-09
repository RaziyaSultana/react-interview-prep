
function App(){

    return (
        <div>
            <h2>Class-ic React vs Functional Component</h2>
            <h5> Question 1: Explain class based components in React.</h5>

            {/* 
                - way to creat components using ES6 Classes.
                - Older way of writing components compared to functional components.
                - Can contain state and have access to lifecycle methods, which gets executed at various points in a component's lifecycle.
            */}
            <Counter/>

            <h5> Question 2: Explain Constructor and super keyword here.</h5>
            {/* 
                constructor:-
                1. Initailizing State : It is used to initialize the component's state by assigning an initial value to this.state.
                2. Binding Event Handlers or Methods : It is also used to bind the event handlers and methods to the component instance. 
            */}

            {/* 
                super keyword :-
                 1. Used inside the constructor to call the constructor of the parent class.
                 2. Ensures that component's props are correctly initialised and available within the component.
            */}

            <h5> Question 3: Explain the component lifecycle method by adding them to this counter app.</h5>
            
            <h5> Question 4: Explain function based components and what are hooks. Explain any two.</h5>
             <PhotoGallery/>
             {/* 
                Hooks are functions that allows functional components to use state, lifecycle methods and other React features previosly available only in class components.
             */}

             <h5> Question 5: Convert this class based component into functional component and explain it.</h5>
                <DataList/>
                <DataListFn/>
        </div>
    )
}

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 0,
        }
    }

    incrementCount= () => {
        this.setState({count : this.state.count + 1});
    }

    incrementCountCopy= () => {
        this.setState({count2 : this.state.count2 + 1});
    }

    componentDidMount(){
        console.log("component mounted!!");
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevState,"hereeeeeeeeeee",prevState.count,"llll",this.state.count)
        if(prevState.count !== this.state.count)
         console.log("component updated!!");
    }

    componentWillUnmount(){
        console.log("component unmounted!!");
    }

    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <p>Count2 : {this.state.count2}</p>
                <button onClick={this.incrementCountCopy}>Increment count 2</button>
            </div>
        )
    }
}

const PhotoGallery = () => {

    // useState hook ---> allows to use state in functional components
    const [photos, setPhotos] = React.useState([]);
    
    
    {/**
         useEffect hook 
          ---> manages side effects in functional components
          ---> allows performing actions whenever the component renders

          when dependency array
           - empty --> useEffect hook is fired only once ex:- useEffect(() => {}, []); === componentDidMount()
           - has some dependency value --> useEffect hook is fired whenever it changes ex:- useEffect(() => {}, [count]); === componentDidUpdate()
           - no dependency is given --> useEffect hook is fired every single time ex:- useEffect(() => {});



            React.useEffect(() => { return () => {}  }, []); === componentDidUnmount()
    */}
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => setPhotos(data))
        .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <h2>PhotoGallery</h2>
            {
                photos.slice(0, 5).map((photo) => {
                    return (
                        <img key={photo.id} src={photo.thumbnailUrl}/>
                    )
                })
            }
        </div>
    )
}

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({data, isLoading: false});
      })
      .catch((error) => {
        this.setState({error: "Error fetching data", isLoading: false});
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const {data, isLoading, error} = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h3>Data List</h3>
        <ul>
          {data.splice(0, 6).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}


function DataListFn() {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setIsLoading(false);
        console.error("Error fetching data:", error);
      });
    }, [])

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
         <div>
        <h3>Data List Functional</h3>
        <ul>
          {data.splice(0, 6).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
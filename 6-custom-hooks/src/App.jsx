import './App.css'
import Counter from './components/counter'
import DebouncedInput from './components/debounced-input';
import IntersectionElement from './components/intersection-element';
import PostList from './components/post-lists';
import UserInfo from './components/user-info';
import useWindowSize from './hooks/use-window'


function App() {

  const {width, height} = useWindowSize();

  return (
    <div>
      <h2>Custom Hooks Interview Questions in React</h2>
      <h5>What are Custom Hooks ?</h5>
      {/* 
          Custom Hooks in React are functions that allows you to extract and reuse stateful logic from components.They enable you to separate logic and create reusable functions to manage state, side effects, and more within functional components.
      */}


      <h5>Why use custom hooks? Can't it be done using a normal function?</h5>
      {/* 
        1. Access to state and LifeCycle Hooks
        2. Avoid Prop Drilling - as custom hooks can access the context APIs and usereducer hooks and other react features without need to pass any props
        3. Preserving States - between renders state is preserved by using react's state management while retaining encapsulation and reusablility as well.
        4. Hook's Rules - custom hooks also follows the rules of a normal hook like ensuring it cannot be called inside of a condition or loop etc.
      */}
      <h5>Question 1: Build a Custom hook to manage and update a counter with appropriate functionalities.</h5>
      <Counter />

      <h5>Question 2: Build a Custom Hook to efficiently track and update window dimensions dynamically.</h5>

      <p>Width : {width}</p>
      <p>Height : {height}</p>

      <h5> Question 3: Build a Custom hook to fetch data from a given URL and handle loading and error states as well.</h5>

      {/* <PostList /> */}

      <h4>
        <u>Question 4: Build a Custom hook that delays updating a value until a specified time has passed after the last change ? </u></h4>
        <DebouncedInput />

        <h4>
          <u>
            Question 5: Build a Custom hook that stores and retrieves data from the browser localstorage.
          </u>
        </h4>

        <UserInfo />

        <h4>
          <u>
            Question 6: Build a custom React hook used to observe changes in the intersection of a target element with an ancestor element or the viewport? 
          </u>
        </h4>

         <IntersectionElement />

    </div>
  )
}

export default App

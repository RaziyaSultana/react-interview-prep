import './App.css';
import UseStateHook from './components/use-state-hook';
import UseEffectHook from './components/use-effect-hook';
import Counter from './components/counter';
import UseRefHook from './components/use-ref-hook';
import UseContextHook from './components/use-context-hook';
function App() {

  return (
    <>
      <h2>Hooks Interview Questions in React!!!</h2>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <Counter /> */}
      {/* <UseRefHook /> */}
       <UseContextHook />
    </>
  )
}

export default App

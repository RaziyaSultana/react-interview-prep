import './App.css';
import UseStateHook from './components/use-state-hook';
import UseEffectHook from './components/use-effect-hook';
import Counter from './components/counter';
import UseRefHook from './components/use-ref-hook';
import UseContextHook from './components/use-context-hook';
import UseReducerHook from './components/use-reducer-hook';
import UseMemoAndCallbackHook from './components/use-memo-and-use-callback-hook';
import UseImperativeHandleHook from './components/use-imperative-handle-hook';

function App() {

  return (
    <>
      <h2>Hooks Interview Questions in React!!!</h2>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <Counter /> */}
      {/* <UseRefHook /> */}
       {/* <UseContextHook /> */}
       {/* <UseReducerHook /> */}
       {/* <UseMemoAndCallbackHook /> */}
       <UseImperativeHandleHook />
    </>
  )
}

export default App

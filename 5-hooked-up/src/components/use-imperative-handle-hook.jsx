import React from 'react'
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useRef } from 'react'

const UseImperativeHandleHook = () => {
    const childRef = useRef();
  return (
    <div>
        <h3>
            <u>UseImperativeHandleHook hook</u>
        </h3>
        <h5>How do you call a function of child component from a parent component?</h5>
        <button onClick={() => childRef.current.focusOnClick()}>Click to Focus</button>
        <ChildComponent ref={childRef} />

    </div>
  )
}

const ChildComponent = forwardRef((props, ref) => {
    
    const inputRef = useRef();
    const focusOnClick = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref,() => {
        return {
        focusOnClick,
    }})


    return (
        <input type='text' ref={inputRef}/>
    )
})

export default UseImperativeHandleHook
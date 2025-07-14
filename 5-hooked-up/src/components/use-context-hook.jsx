import { createContext, useContext, useState } from "react";


const ThemeContext = createContext("light");
const UserContext = createContext(null);


const UseContextHook = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
     <UserContext.Provider value={{isLoggedIn: true}}>
       
        <div>
            <h3>
                <u>useContext hook</u>
            </h3>
            <h5> Question 1: What is useContext in React? </h5>
            {/* 
                - Used to consume values ( data or function ) from a context created by `createContext()`. 
                - It allows functional components to access context values without prop drilling.
                - In scenarios where passing props through multiple levels of components is impractical. 
            */}
                <GrandparentComponent data = {"light"}/>
            
            <h5> Question 2: Create an App to chnage theme in React? </h5>
            {/* Discussed in next lesson */}

            <h5> Question 2: Can you have multiple context in a single component ? </h5>


        </div>
        </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

const GrandparentComponent = ({data}) => {
    return <ParentComponent data={data} />
}

const ParentComponent = ({data}) => {
    return <ChildComponent data={data}/>
}

const ChildComponent = ({data}) => {
    return <GrandchildComponent data={data} />;
}

const GrandchildComponent = ({data}) => {
    const {theme, changeTheme} = useContext(ThemeContext)
    const {isLoggedIn} = useContext(UserContext)

    return (
        <div>
            <p>{data}</p>
            <p>Value from context : {theme}</p>
            <button onClick={changeTheme}>ChangeTheme</button>
            <p>{isLoggedIn ? "User is Logged In" : "User is not logged in"}</p>
        </div>
    )

}

export default UseContextHook
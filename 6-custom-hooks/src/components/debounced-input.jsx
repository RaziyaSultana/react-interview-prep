import {  useState } from "react";
import useDebounce from "../hooks/use-debounce";

const DebouncedInput = () => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    };

    const debouncedValue = useDebounce(inputText, 1000, () => {
        //API call
        console.log("Functional call !!")
    });


    /*
    For suppose a value is dependent on debouncedValue then we can do as below: 

    useEffect(() => {
        //use debouncedValue here for API call
    }, [debouncedValue])

    But more easy way is to pass callback as done above

    */
    return (
        <div>
            <p>{debouncedValue}</p>
            <input
                type="text"
                value={inputText}
                placeholder="Type something..."
                onChange={handleInputChange}
            />
        </div>
    )
}

export default DebouncedInput;
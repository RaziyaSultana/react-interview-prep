import { useSearchParams } from "react-router-dom";

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(...searchParams.entries());
    //searchParams.entries() only give non-readble iterator {} to read it we need to spread
    console.log(Object.fromEntries(searchParams.entries()));

    const updateSearchParams = (newParams) => {
        const paramsObject = Object.fromEntries(searchParams.entries());
        const mergedParams = {...paramsObject, ...newParams};
        setSearchParams(mergedParams);
    };

    return (
    <div>
        <h2>Colors</h2>
        <button onClick={() => updateSearchParams({color: "red"})}>Red</button>
        <button onClick={() => updateSearchParams({color: "white"})}>White</button>

        <h2>Size</h2>
        <button onClick={() => updateSearchParams({size: 10})}>10</button>
        <button onClick={() => updateSearchParams({size: 11})}>11</button>
        <button onClick={() => updateSearchParams({size: 12})}>12</button>
    </div>
  )
}

export default Product
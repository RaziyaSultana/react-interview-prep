const products = [
  {id: 1, name: "Product A", price: 20, category: "Electronics"},
  {id: 2, name: "Product B", price: 30, category: "Clothing"},
  {id: 3, name: "Product C", price: 15, category: "Electronics"},
  {id: 4, name: "Product D", price: 25, category: "Clothing"},
  {id: 5, name: "Product E", price: 50, category: "Electronics"},
  {id: 6, name: "Product F", price: 40, category: "Electronics"},
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];


function App(){
    return (
    <div>
        <h2>Redering List and Conditional operators</h2>
        <h5>
            Question 1: How do map function works in React for rendering list ?
            Can you provide an example ?
        </h5>
            {/* 
                - Commonly used to iterate through an array and render components dynamically.
                - It allows you to create new array of react elements based on original array.
            */}

        <ul>
            {
                products.map((item,i,arr) => {

                    return (
                        <li>
                            <strong> {item.name} </strong> -- ${item.price} -- Category: {item.category}
                        </li>
                    )
                })

               
                    /*
                     
                        other ways to write map
                        -----------------------
                products.map((item,i,arr) => (    
                        <li>
                            <strong> {item.name} </strong> -- ${item.price} -- Category: {item.category}
                        </li>
                   
                        ))

                    */
                
            }
        </ul>

        <h5>
            Question 2: How can you filter products with specific category?
        </h5>

        <ul>
            {
               products.filter((item) => item.category === "Electronics").map((prod) =>{
                return (
                    <li> {prod.name} </li>
                )
               }) 
            }
        </ul>

            <h5>Question 3: How can you render a summary of total price for products ?</h5>
            <div>
                Total Price Summary : 
                {
                    products.reduce(
                        (acc, product, index, arr) =>  {
                            return acc + product.price
                        },
                0)
                }
            </div>

                <h5>Question 4: Add discountedPrice key with 10% discount to all the products with price more than $20 and render it. </h5>


                {
                    products.filter((product, index) => product.price > 20)
                    .map((item) => {
                        return {
                            ...item,
                            discountedPrice: item.price - item.price*(10/100)
                        }
                    })
                    .map((prod, i) => {
                        return (
                            <li>
                            <strong> {prod.name} </strong> -- ${prod.price} -- Category: {prod.category} -- DiscountedPrice: {prod.discountedPrice}
                        </li>
                        )
                    })
                }


                <h5> Question 5: How can you filter and render unique elements from an array using filter in React ? </h5>

                {
                    names.filter((name, index) => {
                        return names.indexOf(name) === index
                    }).map((name, i) => {
                        return <div> {name} </div>
                    })
                }

                {/* Conditional Operators  */}
                <h5> Question 6: Difference between && and || operators</h5>

                <LogicalAnd/>
                <LogicalOR/>

                <h5>Question 7: Differrence between .? vs ??</h5>
{/*                 
                .? --> optional OptionalChaining

                ?? --> NullishCoalescing */}

                <OptionalChaining/>
                <NullishCoalescing/>


    </div> )
}

const LogicalAnd = () => {
    let x = 11;
    let y = 17;

    if(x > 0 && y > 0 ) {
        return <div>Both are greater than 0</div>;
    } else {
            return <></>;
     }
    }


const LogicalOR = () => {
    let isRaining = false;
    let isSunny = true;

    if(isRaining || isSunny){
        return <div>It's either raining or Sunny (or both) </div>;
    }else {
        return <></>;
    }

}


const OptionalChaining = () => {
    let user = {
        name: "John",
        address: {
            city: "New York",
        },
    }

    // return user && user.address &&<p>{user.address.city}</p>

    return <p>{user?.address?.city}</p>

}

const NullishCoalescing = () => {
    let userInput = null;
    let defaultValue = "Hello, default value";

    // return <p>{userInput ? userInput : defaultValue}</p>;

    return <p>{userInput ??  defaultValue}</p>;
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
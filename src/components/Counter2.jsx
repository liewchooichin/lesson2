import { useState } from "react";
import '../index.css';
import '../App.css';
import './MyApp.css';

const initialProduct = {
    name: "Fruits",
    count: 0
}

export function Counter2(){
    const [product, setProduct] = useState(initialProduct);

    function handleMinus(){
        const newCount = ((product.count - 1) > 0) 
            ? (product.count - 1) : 0;
        const newItem = {...product, count:newCount};
        console.log(newItem);
        setProduct({...product, count:newCount});
        return;
    }

    function handleAdd(){
        setProduct((p) => {
            const newCount = p.count + 1;
            return({
                ...p,
                count: newCount
            })
        });
    }

    function handleReset(){
        setProduct(initialProduct);
    }

    return(
        <>
        <h2>{product.name}</h2>
        <button onClick={handleMinus}>-</button>
        <span>{product.count}</span>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
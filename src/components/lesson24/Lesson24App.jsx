import { useState } from "react";
import "./Lesson24App.css";
import { useReducer } from "react";



export function Lesson24CounterApp() {
  const [count, setCount] = useState(0);
  //const [discount, setDiscount] = useState(0);
  // derived discount value
  const discount = (count >= 5) ? 20 : 0;

  const name = "Banana";
  const price = 2.99;

  const handlePlus = () => {
    
    function updatePlusCount(prevCount){
        let newCount = prevCount + 1;
        /* if(newCount >= 5){
            setDiscount(20);
        } */
        return newCount;
    }
    setCount(updatePlusCount);
  };

  const handleMinus = () => {
    
    function updateMinusCount(prevCount){
        let newCount = prevCount - 1;
        console.log(`New count ${newCount}`);
        newCount = (newCount > 0) ? newCount : 0;
        return newCount;
    }
    setCount(updateMinusCount);
  };

  

  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
    </>
  );
}

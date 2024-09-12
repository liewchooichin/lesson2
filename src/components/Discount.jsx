import { useState } from "react";

const initialState = {
  name: "Fruits",
  count: 0,
  price: 10,
  discount: 0
};

export function Discount() {
 
  const [product, setProduct] = useState(initialState);

  const discount = (product.count >= 5) ? 20 : 0;
  let totalPrice = parseFloat(product.count) * parseFloat(product.price);
  if(discount===20)
      totalPrice = totalPrice * parseFloat((100-discount)/100);
  
  console.log(totalPrice);

  const handlerPlus = () => {
    const newCount = product.count + 1;

    setProduct({
      ...product,
      count: newCount,
    });
    
  };
  const handlerMinus = () => {
    setProduct({
      ...product,
      count: product.count - 1,
    });
    
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <h2>Unit price: {`$ ${product.price}`}</h2>
      <h3>Total: {totalPrice}</h3>
      <h3>Discount: {discount}%</h3>    
    </>
  );
}

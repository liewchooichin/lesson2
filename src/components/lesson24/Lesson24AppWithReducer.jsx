import { useState } from "react";
import "./Lesson24App.css";
import { useReducer } from "react";
import { ProductList } from "./ProductList";
import { CountReducer } from "./CounterReducer";
import { ProductPrice } from "./ProductPrice";
import { ProductSum } from "./ProductSum";
import { ProductButton } from "./ProductButton";
import { ProductSearchReducer } from "./ProductSearchReducer";
import { ProductSearch } from "./ProductSearch";
import { UserBar } from "./UserBar";

export function Lesson24CounterApp() {
  //const [count, setCount] = useState(0);
  const [count, countDispatch] = useReducer(CountReducer, 0);
  const [productSearch, productSearchDispatch] = useReducer(ProductSearchReducer, "");
  //const [discount, setDiscount] = useState(0);
  // derived discount value
  const discount = (count >= 5) ? 20 : 0;

  const name = "Banana";
  const price = 2.99;

  function handlePlus(){
    countDispatch({
      type: "add_count"
    });
  };

  function handleMinus(){
    countDispatch({
      type: "minus_count"
    });
  };

  function handleReset (){
    countDispatch({
      type: "reset_count"
    })
  }
  function handleSearchChange(e, newText){
    productSearchDispatch({
      type: "search_change",
      newSearch: newText
    })
  }

  return (
    <>
      <UserBar></UserBar>
      <h1>Products</h1>
      <p>
      <ProductSearch
        value={""}
        label={"Search products"}
        searchTerm={productSearch}
        handleChange={handleSearchChange}
      >
      </ProductSearch>
      </p>
      <ProductButton label={"-"} handleClick={handleMinus}>
      </ProductButton>
      <span>{count}</span>
      <ProductButton label={"+"} handleClick={handlePlus}>
      </ProductButton>
      <p>
         <ProductButton label={"Reset"} handleClick={handleReset}>
        </ProductButton>
      </p>
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      
      <ProductPrice></ProductPrice>
      <ProductSum></ProductSum>
    </>
  );
}

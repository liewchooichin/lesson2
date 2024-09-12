import { products } from "./productData";
import { useState } from "react";


  /*
  Task 1: Use map to display all the product
  Task 2: Use filter to filter the products of a certain max price, say $4.  You hard code the max price first.
  Task 3: Use reduce method to sum up the total cost of all the product prices
  */
  
 export function ProductList({itemList}) {

    return (
      <>
        <h2>Product List</h2>
        <ul>
            {   
                itemList.map((p) => (
                    <li key={p.id}>
                        Name: {p.name} {p.pic}
                        Price: {p.price},
                    </li>
                ))
            }
        </ul>
      </>
    );
  }
  

  
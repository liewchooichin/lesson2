import { products } from "./productData";
import { useState } from "react";
import PropTypes from "prop-types";
import { ProductList } from "./ProductList";

function filterName(products, search){
    /**Change the search term to lowercase first */
    search = search.toLowerCase();

    /**In case of multiple words in a name,
     * split the name using space, then some will
     * return any words that starts with the
     * search term.
     */
    return (
        products.filter((p) =>
            p.name.split(' ').some((word) =>
            word.toLowerCase().startsWith(search))
        )
    )
}

export function ProductSearch({value, label, 
    searchTerm, handleChange}){

    /**Search term */
    const [search, setSearch] = useState("");
    const results = filterName(products, searchTerm);
    

    return(
        <>
        <div>
            <label htmlFor="productSearch">{label}</label>
            <input
                id="productSearch"
                name="productSearch"
                type="text"
                value={value}
                onChange={(e) => handleChange(e, e.target.value)}
            ></input>
        </div>
        <ProductList itemList={results}></ProductList>
        </>
    )
}
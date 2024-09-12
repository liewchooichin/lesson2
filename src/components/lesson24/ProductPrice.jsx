import { products } from "./productData";

export function ProductPrice(){

    const filteredProducts = products.filter((p) =>
        {return (p.price <= 4)}
    )

    return(
    <>
        <h2>Product Price</h2>
        <ul>
            {   
                filteredProducts.map((p) => (
                    <li key={p.id}>
                        Name: {p.name} {p.pic}
                        Price: {p.price},
                    </li>
                ))
            }
        </ul>
        
    </>)
}
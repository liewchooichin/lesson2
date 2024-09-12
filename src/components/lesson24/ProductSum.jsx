import { products } from "./productData";


export function ProductSum(){
    const total = products.reduce(
        (accumulate, p) => {return(accumulate+p.price)}, 0);

    return(
    <>
        <h2>Total: {total}</h2>
    </>
    )
}
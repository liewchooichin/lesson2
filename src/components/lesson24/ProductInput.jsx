

export function ProductInput({value, label, handleChange}){

    return(
        <div>
            <label htmlFor="productInput">{label}</label>
            <input
                id="productInput"
                name="productInput"
                type="text"
                onChange={handleChange}
            ></input>
        </div>
    )
}


export function ProductNameReducer(productName, action){
    switch (action.type){
        case "name_change":{
            const newProductName = action.productName;
            return newProductName;
        }
        default: {
            throw Error("Unknown error: " + action.type);
        }
    }
}
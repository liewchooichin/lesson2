

export function ProductSearchReducer(productSearch, action){

    switch (action.type) {
        console.log(`Action: ${action.type}`);

        case "name_change" : {
            const newSearch = action.newSearch;
            return newSearch;
        }
        default: {
            throw Error("Unknown error: " + action.type);
        }
    }
}
const myState = {
    watches: [],
    filteredwatches: [],
    brands: []
};

export const watchesReducer =  (state = myState, action) => {
    switch (action.type) {

        case 'FILTERED_WATCHES':
            var filteredProducts = [];
            state.products.map( product => {
                if(product.brand.includes(action.payload)) {
                    filteredProducts.push(product);
                }
            });
            return Object.assign(myState,{filteredwatches: filteredProducts});

        case 'GETWATCHES':
            return ({...state, watches: action.payload.data.response, brands: action.payload.data.brands});

        case 'DELETEWATCH':
            return(state);
            
        case 'PRODUCTADDED':
            return myState;

        default:
            return myState;
    }   
};

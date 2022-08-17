

export const productReducer = (state={products:[]}, action) =>{
    switch (action.type) {
        case 'ALL_PRODUCTS':
            return{
                products: action.payload 
            }
        case 'ADD_PRODUCT':
            return{
                products: action.payload
            }
        case 'DELETE_PRODUCT':
            return{
                products: action.payload
            }
        case 'SINGLE_PRODUCT':
            return{
                ...state.products._id,
                products: action.payload
            }
               
        default:
            return state
    }
}


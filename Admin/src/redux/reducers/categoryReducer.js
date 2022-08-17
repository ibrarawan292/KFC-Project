

export const categoryReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                categories: action.payload
            }
        case 'GET_CATEGORY':
            return {
                categories: action.payload
            }
        default:
            return state
    }
}
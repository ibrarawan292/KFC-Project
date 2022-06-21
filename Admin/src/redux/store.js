import {combineReducers, createStore, applyMiddleware} from 'redux'
import { productReducer } from './reducers/productReducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const rootReducer = combineReducers({
    products: productReducer
})


// The store now has the ability to accept thunk functions in `dispatch`
export const store = createStore(rootReducer, composedEnhancer)
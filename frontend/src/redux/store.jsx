import {combineReducers, createStore, applyMiddleware} from 'redux'
import { productReducer } from './reducers/productReducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const rootReducer = combineReducers({
    products: productReducer,
   
})


   
const persistConfig = {
    key: 'root',
    storage,
  }
 
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   


// The store now has the ability to accept thunk functions in `dispatch`
export const store = createStore(persistedReducer, composedEnhancer)
export const persistor = persistStore(store)
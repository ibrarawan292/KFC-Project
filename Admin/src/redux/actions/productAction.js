import axios from 'axios'
const URL = "http://localhost:8000"

export const getAllProducts = () => async dispatch => {
    const response = await axios.get(`${URL}/api/v1/product/all`)
    dispatch({
        type: 'ALL_PRODUCTS',
        payload: response.data
    })
  }

  
export const addNewProduct = (product) => async dispatch => {

    const config = {
        headers: {'Content-Type': 'application/json'},

    }
    const response = await axios.post(`${URL}/api/v1/product/new`, product, config)
    console.log(response)

    dispatch({
        type: 'ADD_PRODUCT',
        payload: response.data
    })
}
export const addCategory = (product) => async dispatch => {

    const config = {
        headers: {'Content-Type': 'application/json'},

    }
    const response = await axios.post(`${URL}/api/v1/product/new/category`, product, config)
    dispatch({
        type: 'ADD_CATEGORY',
        payload: response.data
    })
}
export const getCategory = () => async dispatch =>{
    
    const response = await axios.get(`${URL}/api/v1/product/all/category`)
    
    dispatch({
        type: 'GET_CATEGORY',
        payload: response.data.data
    })
}
export const deleteProduct = (_id) => async dispatch => {
    const response = await axios.delete(`${URL}/api/v1/product/delete/${_id}`)
    dispatch({
        type: 'DELETE_PRODUCT',
        payload: response.data
    })
}

export const getSingelProduct = (_id) => async dispatch => {
    const response = await axios.put(`${URL}/api/v1/product/update/${_id}`)
    
    dispatch({
        type: 'SINGLE_PRODUCT',
        payload: response.data
    })
}
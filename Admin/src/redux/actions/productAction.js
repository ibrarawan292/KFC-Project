import axios from 'axios'

export const getAllProducts = () => async dispatch => {
    const response = await axios.get(`http://localhost:9000/api/v1//product/all`)
    dispatch({
        type: 'ALL_PRODUCTS',
        payload: response.data
    })
  }

  
export const addNewProduct = (product) => async dispatch => {

    const config = {
        headers: {'Content-Type': 'application/json'},

    }
    const response = await axios.post('http://localhost:9000/api/v1/product/new', product,config)
    dispatch({
        type: 'ADD_PRODUCT',
        payload: response.data
    })
}
export const deleteProduct = (_id) => async dispatch => {
    const response = await axios.delete(`http://localhost:9000/api/v1/product/delete/${_id}`)
    dispatch({
        type: 'DELETE_PRODUCT',
        payload: response.data
    })
}

export const updateProduct = (_id) => async dispatch => {
    const response = await axios.put(`http://localhost:9000/api/v1/product/update/${_id}`)
    dispatch({
        type: 'UPDATE_PRODUCT',
        payload: response.data
    })
}
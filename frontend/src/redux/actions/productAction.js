import axios from 'axios'

export const getAllProducts = () => async dispatch => {
    const response = await axios.get(`http://localhost:9000/api/v1/product/all`)
    dispatch({
        type: 'ALL_PRODUCTS',
        payload: response.data.data
    })
  }


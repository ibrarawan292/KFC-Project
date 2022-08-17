import React from 'react'
import {useParams} from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getSingelProduct } from '../../redux/actions/productAction'

const EditModal = () => {

    const {id} = useParams()
    
    const product = useSelector((state) => state.products.products)
    console.log(product)
    const dispatch = useDispatch()

    useEffect(() => { 
      dispatch(getSingelProduct(id))
    }, [])
    
    
 
    const { handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue} = useFormik({
      initialValues: {
        title: '',
        description: '',
        price:'',
        productImage:''
      },
      validationSchema: Yup.object({
        title: Yup.string().required('title is required'),
        description: Yup.string()
          .required('description is required'),
          price:Yup.string()
          .required('please enter a price'),
        
     
      }),
      onSubmit: (values) => {
      console.log(values)
  
      }
    })

    const [preview, setPreview] = useState('')

  return (
    <div className="modal-overlay-wrappe">
    <div className="modal-overlay-inner">
    <form className='product-form' onSubmit={handleSubmit}>
            <input type="text" name='title' onChange={handleChange} onBlur={handleBlur} value={values.title} className="form-control" placeholder="title" id="title" />
            <p className='error'>{touched.title && errors.title ? errors.title : null}</p>

            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.password} name='description' className="form-control" placeholder='description' id="inputPassword4" />
            <p className='error'>{touched.description && errors.description ? errors.description : null}</p>

            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name='price' className="form-control" placeholder='price' id="price" min="0.00" max="10000.00" step="0.01" />
            <p className='error'>{touched.price && errors.price ? errors.price : null}</p>

            <input type="file" 
            onChange={(event) =>{
               let reader = new FileReader();
              
               reader.onload = () => {
                if (reader.readyState === 2){
                  setFieldValue('productImage', reader.result)
                   setPreview(reader.result)
                  
                }
               }
               reader.readAsDataURL(event.target.files[0])
            }} 
            onBlur={handleBlur} 
            value={values.image} 
            name='image' className="form-control" placeholder='Upload an image' id="image" />
            <p className='error'>{touched.image && errors.image ? errors.image : null}</p>
            <img src={preview} style={{width:'100px', height:'100px'}} alt="" />
             <br/>
             <br/>
            <button type="submit" className="btn btn-outline-danger add-btn">Add Now</button>
           
          </form>
    </div>
      </div>
  )
}

export default EditModal
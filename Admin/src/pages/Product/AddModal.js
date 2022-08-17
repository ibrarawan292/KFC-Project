import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addNewProduct, getCategory } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const AddModal = ({ setShowModal }) => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategory())

  }, [])
 
  const { categories } = useSelector((state) => state.categories)


  const { handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      categories: '',
      productImage: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('title is required'),
      description: Yup.string()
        .required('description is required'),
      price: Yup.string()
        .required('please enter a price'),
      categories: Yup.string()
        .required('please enter a categories'),
      



    }),
    onSubmit: (values) => {
      function convertToSlug(Text) {
        return Text.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');
      }
      const slg = convertToSlug(values.title)
      values.slug = slg
      dispatch(addNewProduct(values))
      setShowModal(false)

    }
  })
  const [preview, setPreview] = useState('')
  return (
    <div className="modal-overlay-wrapper">
      <div className="modal-overlay-inner">
        <form className='product-form' onSubmit={handleSubmit}>
          <input type="text" name='title' onChange={handleChange} onBlur={handleBlur} value={values.title} className="form-control" placeholder="title" id="title" />
          <p className='error'>{touched.title && errors.title ? errors.title : null}</p>

          <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.password} name='description' className="form-control" placeholder='description' id="inputPassword4" />
          <p className='error'>{touched.description && errors.description ? errors.description : null}</p>

          <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name='price' className="form-control" placeholder='price' id="price" min="0.00" max="10000.00" step="0.01" />
          <p className='error'>{touched.price && errors.price ? errors.price : null}</p>

          <select className="form-select " onChange={handleChange} onBlur={handleBlur} value={values.categories} name='categories'>
          <option selected>Select Categories</option>
            {
              categories && categories.map((category) => {
                return (
                  <>
                
                  <option >{category.categories}</option> 
                  </>
                )
              })
            }
          </select>
          <p className='error'>{touched.categories && errors.categories ? errors.categories : null}</p>

          <input type="file"
            onChange={(event) => {
              let reader = new FileReader();

              reader.onload = () => {
                if (reader.readyState === 2) {
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
          <img src={preview} style={{ width: '100px', height: '100px' }} alt="" />
          <br />
          <br />
          <button type="submit" className="btn btn-outline-danger add-btn">Add Now</button>
          <button type="submit" className="btn btn-danger add-btn ms-2" onClick={() => setShowModal(false)}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default AddModal
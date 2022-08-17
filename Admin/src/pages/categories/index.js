import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {addCategory} from '../../redux/actions/productAction'
import {useDispatch} from 'react-redux'

const CategoryModal = ({setModal}) => {

    const dispatch = useDispatch();

  const { handleChange, handleBlur, handleSubmit, touched, errors, values, } = useFormik({
    initialValues: {
      categories:''
    },
    validationSchema: Yup.object({
        categories: Yup.string().required('categories is required'),
     
    }),
    onSubmit: (values) => {
       function convertToSlug(Text) {
        return Text.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');
      }
      const slg = convertToSlug(values.categories)
      values.slug = slg
     
      dispatch(addCategory(values))
      
    }
  })

  return (
    <div className="modal-overlay-wrapper">
    <div className="modal-overlay-inner">
    <form className='product-form' onSubmit={handleSubmit}>
        <h5>Add New categories</h5>
            <input type="text" name='categories' onChange={handleChange} onBlur={handleBlur} value={values.categories} className="form-control" placeholder="Add New categories" id="categories" />
            <p className='error'>{touched.categories && errors.categories ? errors.categories : null}</p>
            <button type="submit" className="btn btn-outline-danger add-btn">Add Now</button>
            <button type="submit" className="btn btn-danger add-btn ms-2" onClick={() => setModal(false)}>Cancel</button>
          </form>
    </div>
      </div>
  )
}

export default CategoryModal
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ModalHeader, Modal, ModalBody } from 'reactstrap'
import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import './product.css'
import { addNewProduct } from '../../redux/actions/productAction';


const Product = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { handleChange, handleBlur, handleReset, handleSubmit, touched, errors, values } = useFormik({
    initialValues: {
      title: '',
      description: '',
      price:'',
      stock:'',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('title is required'),
      description: Yup.string()
        .required('description is required'),
        price:Yup.string()
        .required('please enter a price'),
        stock:Yup.string()
        .required('please enter a stock')

    }),
    onSubmit: (values) => {
     dispatch(addNewProduct(values))

    }
  })



  const [modal, setmodal] = useState(false)
  return (
    <>
      <Modal
        isOpen={modal}
        toggle={() => setmodal(!modal)}>
        <ModalHeader
          toggle={() => setmodal(!modal)}>
          Add New Product
        </ModalHeader>
        <ModalBody>
        <form className='product-form' onSubmit={handleSubmit}>
            <input type="text" name='title' onChange={handleChange} onBlur={handleBlur} value={values.title} className="form-control" placeholder="title" id="title" />
            <p className='error'>{touched.title && errors.title ? errors.title : null}</p>
            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.password} name='description' className="form-control" placeholder='description' id="inputPassword4" />
            <p className='error'>{touched.description && errors.description ? errors.description : null}</p>
            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name='price' className="form-control" placeholder='price' id="price" min="0.00" max="10000.00" step="0.01" />
            <p className='error'>{touched.price && errors.price ? errors.price : null}</p>
            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.stock} name='stock' className="form-control" placeholder='stock' id="stock" min="0.00" max="10000.00" step="0" />
            <p className='error'>{touched.stock && errors.stock ? errors.stock : null}</p>
            <button type="submit" className="btn btn-danger add-btn">Add Now</button>
          </form>

        </ModalBody>
      </Modal>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Products</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>

        <h2>Section title</h2>
        <button onClick={()=> setmodal(true)}>Add New product</button>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>

              {
                products && products.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <td>{i+1}</td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td><button className='btn btn-outline-danger'>Edit</button></td>
                      <td><button className='btn btn-outline-danger'>Delete</button></td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </main>
      {/* <div className="modal-overlay-wrapper">
    <div className="modal-overlay-inner">
    <form className='product-form' onSubmit={handleSubmit}>
            <input type="text" name='title' onChange={handleChange} onBlur={handleBlur} value={values.title} className="form-control" placeholder="title" id="title" />
            <p className='error'>{touched.title && errors.title ? errors.title : null}</p>
            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.password} name='description' className="form-control" placeholder='description' id="inputPassword4" />
            <p className='error'>{touched.description && errors.description ? errors.description : null}</p>
            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.price} name='price' className="form-control" placeholder='price' id="price" min="0.00" max="10000.00" step="0.01" />
            <p className='error'>{touched.price && errors.price ? errors.price : null}</p>
            <input type="number" onChange={handleChange} onBlur={handleBlur} value={values.stock} name='stock' className="form-control" placeholder='stock' id="stock" min="0.00" max="10000.00" step="0" />
            <p className='error'>{touched.stock && errors.stock ? errors.stock : null}</p>
            <button type="submit" className="btn btn-danger add-btn">Add Now</button>
          </form>
    </div>
      </div> */}
    </>
  )
}



export default Product
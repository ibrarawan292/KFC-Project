import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './product.css'
import { deleteProduct } from '../../redux/actions/productAction';
import AddModal from './AddModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryModal from '../categories';


const Product = () => {

  const dispatch = useDispatch();
  const  {products}  = useSelector((state) => state.products);

 
  
  const [showModal, setShowModal] = useState(false)
  const [Modal, setModal] = useState(false)
  
  const handleDelete=(_id) =>{
     if(window.confirm("Are you sure you want to delete the product ?")){
      dispatch(deleteProduct(_id))
     }     
  }

  
  return (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Products</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
            <button className='btn btn-dark me-2' onClick={() => setShowModal(true)}>Add New product</button>
            <button  className='btn btn-secondary me-2'onClick={() => setModal(true)}>Add Category</button>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope='col'>Category</th>
                <th scope="col">Price</th>
                <th scope='col'>Image</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
               
              </tr>
            </thead>
            <tbody>

              {
                products.data && products.data.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <td>{i+1}</td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.categories}</td>
                      <td>{product.price}</td>
                      <td><img src={product.productImage} style={{width:'50px'}} alt="" /></td>
                      <td><Link to={`/edit/${product._id}`}className='btn btn-outline-danger' >Edit</Link></td>
                      <td><button className='btn btn-outline-danger' onClick={() =>handleDelete(product._id)}>Delete</button></td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </main>
     {showModal ? <AddModal setShowModal={setShowModal}/>: null}
     {Modal ? <CategoryModal setModal={setModal}/>: null}
    </>
  )
}



export default Product
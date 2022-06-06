import React from 'react'
import './Register.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
 import * as Yup from 'yup';


const Register = () => {

  const {handleSubmit, handleBlur, handleChange, handleReset, touched, values, errors} = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      address:'',
      city:'',
      zip:'',

    },
    validationSchema:Yup.object({
           firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('first name is required'),
           lastName: Yup.string()
           .max(20, 'Must be 15 characters or less')
           .required('last name is required'),
           email: Yup.string()
           .email('Invalid email address')
           .required('Required'),
           password: Yup.string()
           .max(15, 'Maximum 15 characters or less')
           .required('password is required'),
           address: Yup.string().required('address is required'),
           city: Yup.string().required('zip is required'),
           zip: Yup.string().required('zip is required')
           
    }),
    onSubmit:(values)=>{
         console.log(values)
    }
  })
  return (
    <>
      <Header />
      <div className='Register-wrapper'>
        <div className="lead-text">
          <h3>NEW CUSTOMER</h3>
        </div>
        <p>Already Registered? <Link to="/login">Login</Link></p>
        <hr />
        <div className="reg-btn">
          <button type="button" className="btn btn-danger btn-gmail">LOGIN WITH GMAIL</button>
          <button type="button" className="btn btn-primary btn-fb"><i className="bi bi-facebook"></i> LOGIN WITH FACEBOOK</button>
        </div>
        <hr />
        <div className="register-form-wrapper">
          <form className="row g-3" onSubmit={handleSubmit}>
            <h3>USER ACCOUNT</h3> 
            <div className="col-md-6">
              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.firstName} name='firstName' className="form-control" placeholder='First Name*' id="inputfirstName" />
              <p className='error'>{touched.firstName && errors.firstName ? errors.firstName:null}</p>
            </div>        
            <div className="col-md-6">
              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.lastName} name='lastName' className="form-control" placeholder='LastName*' id="inputlastName" />
              <p className='error'>{touched.lastName && errors.lastName ? errors.lastName:null}</p>
            </div>
            <div className="col-md-6">
              <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' className="form-control" placeholder='Email*' id="inputEmail" />
              <p className='error'>{touched.email && errors.email ? errors.email:null}</p>
            </div>
            <div className="col-md-6">
              <input type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' className="form-control" placeholder='Password' id="inputPassword4" />
              <p className='error'>{touched.password && errors.password ? errors.password:null}</p>
            </div>
            <div className="col-12">
              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.address} name='address' className="form-control" id="inputAddress" placeholder="Address" />
              <p className='error'>{touched.address && errors.address ? errors.address:null}</p>
            </div>
            <div className="col-md-6">
              <input type="text"  onChange={handleChange} onBlur={handleBlur} value={values.city} placeholder='City' name='city' className="form-control" id="inputCity" />
              <p className='error'>{touched.city && errors.city ? errors.city:null}</p>
            </div>
            <div className="col-md-4">
              <select  name='state' onChange={handleChange} onBlur={handleBlur} value={values.state} id="State" className="form-select">
                <option >Choose...</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>Balochistan</option>
                <option>Kashmir</option>
              </select> 
              <p className='error'>{touched.state && errors.state ? errors.state:null}</p>        
            </div>
            <div className="col-md-2">
              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.zip} name='zip' className="form-control" id="inputZip" />
              <p className='error'>{touched.zip && errors.zip ? errors.zip:null}</p>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-danger">CREATE ACCOUNT</button>
            </div>
          </form>

        </div>

      </div>
      <Footer />
    </>

  )
}

export default Register
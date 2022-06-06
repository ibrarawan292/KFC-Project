import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './login.css'
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
 import * as Yup from 'yup';

const Login = () => {

    const {handleChange, handleBlur, handleReset, handleSubmit, touched, errors, values} = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
             email: Yup.string()
             .email('please provide a valid email')
             .required('email is required'),
             password: Yup.string()
           .max(15, 'Maximum 15 characters or less')
           .required('password is required'),
             
        }),
        onSubmit:(values) =>{
            console.log(values)
        }
    })
    return (
        <>
            <div className="login-wrapper">
                <Header />
                <div className="login-inner pt-5">
                    <div className="row">
                        <div className="col-md-6">
                           <div className="login-page-login">
                           <div className="login-inner-wrapper">
                                <div className="login-page">
                                    <h3>LOGIN WITH SOCIAL LINKS</h3>
                                </div>
                                <hr />
                                <div className="login-btn">
                                    <button type="button" className="btn btn-danger btn-gmail">LOGIN WITH GMAIL</button>
                                    <button type="button" className="btn btn-primary btn-fb"><i className="bi bi-facebook"></i> LOGIN WITH FACEBOOK</button>
                                </div>
                                <hr />
                            </div>
                            <div className="login-form-wrapper">
                                <h3>Login with your account</h3>
                                <p>Enter your e-mail address and password to log in.</p>
                                <form  className='login-form' onSubmit={handleSubmit}>
                                    <input type="text"  name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className="form-control" placeholder="Email" id="email" />
                                    <p className='error'>{touched.email && errors.email ? errors.email:null}</p>
                                    <input type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' className="form-control" placeholder='Password' id="inputPassword4" />
                                    <p className='error'>{touched.password && errors.password ? errors.password:null}</p>
                                    <p><a href="">Forgot Password?</a></p>
                                    <button type="button" className="btn btn-danger sign-in-btn">SIGN IN</button>
                                </form>
                            </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                            <div className="create-wrapper">
                                <h3>NEW CUSTOMER</h3>
                                <p>By creating an account with us, purchasing on our website becomes much faster and easier.</p>
                                <Link to="/register" className="btn btn-outline-danger">CREATE ACCOUNT</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Login
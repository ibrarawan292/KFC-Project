import React from 'react'
import './login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Login = () => {

    const { handleChange, handleSubmit, handleBlur, handleReset, errors, values, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onsubmit: (values) => {
            console.log(values)
        }

    })
    return (
        <div className="login-wrapper">
            <main class="form-signin">
                <form onSubmit={handleSubmit}>
                    <h1 class="h3 mb-3 fw-normal">Please sign in (Admin)</h1>

                    <div class="form-floating">
                        <input type="email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        <p style={{ color: "red" }}>{touched.email && errors.email ? errors.email : null}</p>
                    </div>
                    <div class="form-floating">
                        <input type="password" name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                        <p style={{ color: "red" }}>{touched.password && errors.password ? errors.password : null}</p>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login
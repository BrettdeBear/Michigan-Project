import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Authentication() {
    const [signUp, setSignUp] = useState(false)
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        username: yup.string().required("Please enter a username!"),
        email: yup.string().email()
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })


    return(
        <div class='loginform'>
            <h2>Please Log in or Sign up!</h2>
            <h2>{signUp?'Have an account?':'Not a member yet?'}</h2>
            <button class="button-30" onClick={handleClick}>{signUp?'Log In':'Signup'}</button>
            <br></br>
            <br></br>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Username:
                </label>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
                <br></br>
                <label>
                        Password: 
                </label>
                <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                {signUp&&(
                    <>
                    <br></br>
                    <label>
                        Email: 
                    </label>
                    <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
                    
                    </>
                )}
                <br></br>
                <input type='submit' value={signUp?'Sign Up!':'Log In!'} />
            </form>
        </div>
    )
}

export default Authentication;
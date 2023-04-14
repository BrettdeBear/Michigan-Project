import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Authentication({updateUser}) {
    const [signUp, setSignUp] = useState(false)
    const [error, setError] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        name: yup.string().required("Please enter a username!"),
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
            fetch(signUp ? '/signup' : '/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then(response => {
                if(response.ok){
                    response.json().then(user => {
                        console.log(user)
                        updateUser(user)
                        history.push('/')
                    })
                } else {
                    response.json().then(error => setError(error.message))
                }
            })
        }
    })


    return(
        <div className='loginform'>
            <h2 style={{color: 'red'}}>{formik.errors.name}</h2>
            {error&& <h2 style={{color: 'red'}}>{error}</h2>}
            <h2>Please Log in or Sign up!</h2>
            <h2>{signUp?'Have an account?':'Not a member yet?'}</h2>
            <button id='btn' onClick={handleClick}>{signUp?'Log In':'Signup'}</button>
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
                <input id='submit' type='submit' value={signUp?'Sign Up!':'Log In!'} />
            </form>
        </div>
    )
}

export default Authentication;
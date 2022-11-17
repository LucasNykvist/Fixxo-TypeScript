import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { contactSchema } from '../schemas/Index'

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const [notSubmitted, setNotSubmitted] = useState(false);

    const onSubmit = () => {

        let json = JSON.stringify(values)

        fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
            .then(res => {
                if (res.status === 200) {
                    setSubmitted(true)
                    setNotSubmitted(false)
                    resetForm()
                } else {
                    setNotSubmitted(true)
                    setSubmitted(false)
                }
            })
    }

    const { values, errors, touched, resetForm, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            comments: ""
        },
        validationSchema: contactSchema,
        onSubmit,
    })

    return (
        <>

            <div className="contact-form">
                <div className='container'>

                    {
                        submitted ? (
                            <div className="submitted-box">
                                <h1>Thank you for your comments!</h1>
                                <p>We will contact you as soon as possible.</p>
                            </div>
                        ) : (<></>)
                    }

                    {
                        notSubmitted ? (
                            <div className="submitted-box false">
                                <h1>Something went wrong!</h1>
                                <p>We could not submit your comments at this time.</p>
                            </div>
                        ) : (<></>)
                    }
                    <h3>Come in Contact with Us</h3>
                    <form data-testid="form" noValidate onSubmit={handleSubmit}>

                        <div className='name-email'>
                            <div className="form-input">
                                <input data-testid="name" className={errors.name && touched.name ? "input-error" : ""} id='name' value={values.name} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Your Name' />
                                <div data-testid="name" className="error">
                                    {errors.name && touched.name && <p data-testid="name-error" className='error-message'>{errors.name}</p>}
                                </div>

                            </div>

                            <div className="form-input">
                                <input data-testid="email" className={errors.email && touched.email ? "input-error" : ""} id='email' value={values.email} onBlur={handleBlur} onChange={handleChange} type="email" placeholder='Your Mail' />
                                <div className="error">
                                    {errors.email && touched.email && <p className='error-message'>{errors.email}</p>}
                                </div>

                            </div>
                        </div>

                        <div className="comments">
                            <input data-testid="comment" className={errors.comments && touched.comments ? "input-error" : ""} id='comments' value={values.comments} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Comments' />
                            {errors.comments && touched.comments && <p className='error-message'>{errors.comments}</p>}
                        </div>

                        <button type='submit'>Post Comments</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
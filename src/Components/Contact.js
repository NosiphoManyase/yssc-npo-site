import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import {MdEmail} from 'react-icons/md'
import {MdLocationPin} from 'react-icons/md'
import {AiFillFacebook} from 'react-icons/ai'

function Contact(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data)

    return(
        <>
            <div className='container get-in-touch d-flex justify-content-evenly clear-nav'>
                <div className='contact-headers donate-info'>
                    <div>
                        <h2>How to donate</h2>
                        <div className='container py-2'>
                            <h4>Account Details</h4>
                            <p>Account Name: </p>
                            <p>Account Number: </p>
                            <p>Account Type: </p>
                            <p>Bank Name: </p>
                            <p>Branch Code: </p>
                        </div>
                    </div>
                    <div className='container my-4'>
                        <h2>Want to get ahold of us?</h2>
                        <p> <MdEmail style={{fontSize: '30px'}}/>  <a href="tmanyase@rocketmail.com" target='_blank' >tmanyase@rocketmail.com</a></p>
                        <div className='d-flex'> <MdLocationPin style={{fontSize: '30px'}}/>  
                            <div className='d-flex flex-column address'>
                                <p>Masiphumelele Hall,</p>
                                <p>Corner Skina & Myeza Road,</p>
                                <p>Masiphumelele,</p>
                                <p>Cape Town,</p>
                                <p>South Africa</p>
                            </div>
                        </div>
                        <p> <AiFillFacebook style={{fontSize: '30px'}}/> <a href='#'>link to profile</a></p>
                    </div>
                </div>
                <div className='contact-headers form-section'>
                    <h2 className='text-center fw-bold'>Contact form</h2>
                    <form className='container contact-form py-2 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('firstname', {required: true, minLength: 2, maxLength: 20})}
                            aria-invalid={errors.firstName ? "true" : "false"} 
                            placeholder='First Name'
                            className='form-element'/>
                        <input  {...register('lastname', {required: true, minLength: 3, maxLength: 20})} 
                            aria-invalid={errors.lastname ? "true" : "false"}
                            placeholder='Last Name'
                            className='form-element'/>
                        <input {...register('email', {required: true, 
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })} 
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder='Email'
                            className='form-element'
                        />
                        <textarea {...register('message', {required: true, minLength: 0, maxLength: 300})} 
                            aria-invalid={errors.message ? "true" : "false"}
                            placeholder='type message here'
                            className='form-element text-area'
                        />
                        <button type='submit' className='form-element submit-btn'>Submit</button>
                        <ErrorMessage
                            errors={errors}
                            name="firstname"
                            render={() => <p className='red'>enter full name</p>}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="lastname"
                            render={() => <p className='red'>enter full lastname</p>}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={() => <p className='red'>invalid email address</p>}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="message"
                            render={() => <p className='red'>exceed word limit [300] characters</p>}
                        />
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Contact
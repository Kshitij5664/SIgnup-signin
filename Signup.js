import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 round w-25'>
            <from action="">
                <h2 className='text-items-center'>Sign Up</h2>
                <div className='mb-3'>
                <strong><label htmlFor="name">Name</label></strong>
                    <input type="text" placeholder='Enter Name' className='form-control round-0'/>
                </div>
                <div className='mb-3'>
                    <strong><label htmlFor="email">Email</label></strong>
                    <input type="email" placeholder='Enter Email' className='form-control round-0'/>
                </div>
                <div className='mb-3'>
                <strong><label htmlFor="password">Password</label></strong>
                    <input type="password" placeholder='Enter Password' className='form-control round-0'/>
                </div>
                <button className='btn btn-success w-100'>Sign up</button>
                <p className='align-items-center'>You are agree to all  the Terms & Conditions</p>
                <Link to="/" className='btn btn-default border w-100 bg-light textdecoration-non'>Log in</Link>

            </from>

        </div>
      
    </div>
  )
}

export default Signup

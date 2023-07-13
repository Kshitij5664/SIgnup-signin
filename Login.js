import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 round w-25'>
            <h2 className='align-items-center'>Singn In</h2>
            <from action="">
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control round-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control round-0'/>
                </div>
                <button className='btn btn-success w-100'>Log in</button>
                <p>You are agree to all  the Terms & Conditions</p>
                <Link to="/Signup" className='btn btn-default border w-100 bg-light textdecoration-non'>Cerate Account</Link>

            </from>

        </div>
      
    </div>
  )
}

export default Login

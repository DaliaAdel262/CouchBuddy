import React from 'react';
import './index.css'

export default function Register() {
  
  return (
    <div className=''>
      <div className='container w-50'>
        <h1 className='text-center'>Register</h1>
        <form action="" className='mt-4 mx-lg-5 d-flex flex-column'>
          <label htmlFor="" className='form-label fs-4'>Username</label>
          <input type="text" name='username' className='form-control rounded-5 mb-4'/>
          <label htmlFor="" className='form-label fs-4'>Email</label>
          <input type="text" name='email' className='form-control rounded-5 mb-4'/>
          <label htmlFor="" className='form-label fs-4'>Password</label>
          <input type="text" name='password' className='form-control rounded-5 mb-4'/>
          <button type='submit' className='custom-submit-button fs-5'>Submit</button>
        </form>
      </div>
    </div>
  )
}

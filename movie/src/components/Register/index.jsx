import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';
import './index.css'

export default function Register() {
  const navigate = useNavigate();
  let [validationError, setValidationError]= useState([]);
  let [errorMsg, setErrorMsg]= useState('');
  function validation(){
    const schema = Joi.object({
      userName:Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
      email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password : Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,20}$'))
    })
    return schema.validate(userData, {abortEarly:true})
  }
  let [userData,setUserData] = useState({
    userName:'',
    dateOfBirth:'',
    email:'',
    password:'',
    rePassword:'',
  })
  const getData = (e)=>{
    let data = {...userData};
    data[e.target.name]=e.target.value;
    setUserData(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let validate = validation();
    if(validate.error){
      setValidationError(validate.error.details)
    }
    else{
      axios.post('https://cors-anywhere.herokuapp.com/http://hawas.runasp.net/api/v1/Register', userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  return (
    <div className=''>
      <div className='container w-50'>
        <h1 className='text-center'>Register</h1>
        {errorMsg.length>0?(<h1>Error</h1>):<></>}
        <form onSubmit={handleSubmit} action="" className='mt-4 mx-lg-5 d-flex flex-column'>
          <label htmlFor="" className='form-label fs-4'>Username</label>
          <input type="text" name='userName' className='form-control rounded-5 mb-4' onChange={getData}/>
          <label htmlFor="" className='form-label fs-4'>Date of birth</label>
          <input type='date' name='dateOfBirth' className='form-control rounded-5 mb-4' onChange={getData}/>
          <label htmlFor="" className='form-label fs-4'>Email</label>
          <input type="email" name='email' className='form-control rounded-5 mb-4' onChange={getData}/>
          <label htmlFor="" className='form-label fs-4'>Password</label>
          <input type="password" name='password' className='form-control rounded-5 mb-4' onChange={getData}/>
          <label htmlFor="" className='form-label fs-4'>Confirm password</label>
          <input type="password" name='rePassword' className='form-control rounded-5 mb-4' onChange={getData}/>
          <button type='submit' className='custom-submit-button fs-5'>Submit</button>
        </form>
      </div>
    </div>
  )
}

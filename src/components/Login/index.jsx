import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import axios from 'axios';
import Joi from 'joi';
import './index.css'


export default function Login({saveUserData}) {
  const navigate = useNavigate();
  let [validationError, setValidationError]= useState([]);
  let [errorMsg, setErrorMsg]= useState('');

  // function validation(){
  //   const schema = Joi.object({
  //     email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),

  //     password : Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,20}$')).required().messages({'any.messages'}),

  //   })
  //   return schema.validate(userData, {abortEarly:false})         
  // }


  let [userData,setUserData] = useState({
    email:'',
    password:'',
  })


  const getData = (e)=>{
    let data = {...userData};
    data[e.target.name]=e.target.value;
    setUserData(data)
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
      const user = userCredential.user;

      saveUserData(user);
      navigate('/');
  } catch (err) {
      setErrorMsg(err.message);
  }
  };
  return (
    <div className=''>
      <div className='container w-50'>
        <h1 className='text-center mb-3'>Login</h1>
        {errorMsg.length>0 && (<h1 className='h6 alert alert-danger'>{errorMsg}</h1>)}
        {/* {validationError.length>0 && (validationError.map((error,index)=>(
          <h1 key={index} className='h6 alert alert-danger'>{error.message}</h1>
        )))} */}
        <form onSubmit={handleSubmit} action="" className='mt-4 mx-lg-5 d-flex flex-column'>
          <label htmlFor="" className='form-label fs-4'>Email</label>
          <input type="email" name='email' className='form-control rounded-5 mb-4' onChange={getData}/>
          <label htmlFor="" className='form-label fs-4'>Password</label>
          <input type="password" name='password' className='form-control rounded-5 mb-4' onChange={getData}/>
          <button type='submit' className='custom-submit-button fs-5'>Submit</button>
        </form>
      </div>
    </div>
  )
}

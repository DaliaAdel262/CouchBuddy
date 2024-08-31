import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/mdbootstrap/css/mdb.css'
import './App.css'
import Home from './components/Home/index.jsx';
import Register from './components/Register/index.jsx';
import Login from './components/Login/index';
import People from './components/People/index';
import Tv from './components/Tv/index';
import Movies from './components/Movies/index';
import Navbar from './components/Navbar/index';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div >
      <Navbar />
      <div className='container mt-5'>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='home' element={<Home />}/>
          {/* <Route path='movies' element={<Movies />}/> */}
          <Route path='people' element={<People />}/>
          <Route path='tv' element={<Tv />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    </div>
  )
}

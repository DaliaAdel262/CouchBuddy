import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/mdbootstrap/css/mdb.css'
import './App.css'
import Home from './components/Home/index.jsx';
import {jwtDecode} from 'jwt-decode';
import Register from './components/Register/index.jsx';
import Login from './components/Login/index';
import People from './components/People/index';
import Tv from './components/Tv/index';
import Movies from './components/Movies/index';
import Navbar from './components/Navbar/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import ContextMoviesProvider from './components/Store';
import Loading from './components/Loading'

export default function App() {

  const [userData, setUserData] = useState(null);

  function savaDataUser(){
    if(localStorage.getItem('token')){
      let encodedToken = localStorage.getItem('token');
      let decdodedToken = jwtDecode(encodedToken);
      setUserData(decdodedToken);
    }
  }

  function logOut(){
    setUserData(null)
    localStorage.removeItem('token');
  }

  function ProtectedRoute({children}){
    if(localStorage.getItem('token')){
      return children;
      
    }else{
      return <Navigate to={'/login'}/>;
    }
  }

  useEffect(()=>{
    savaDataUser();
  },[])

  return (
    <div >
      <Navbar userData = {userData} logOut={logOut}/>
      <div className='container mt-5'>
        <Routes>
          <Route path='' element={
            <ProtectedRoute>
              <ContextMoviesProvider>
                <Home />
              </ContextMoviesProvider>
            </ProtectedRoute>}/>
          <Route path='home' element={
            <ProtectedRoute>
              <ContextMoviesProvider>
                <Home />
              </ContextMoviesProvider>
          </ProtectedRoute>
          }/>
          <Route path='movies' element={
            <ProtectedRoute>
              <ContextMoviesProvider>
                <Movies />
              </ContextMoviesProvider>
            </ProtectedRoute>
          }/>
          <Route path='people' element={
            <ProtectedRoute>
              <ContextMoviesProvider>
                <People />
              </ContextMoviesProvider>
            </ProtectedRoute>
          }/>
          <Route path='tv' element={
            <ProtectedRoute>
              <ContextMoviesProvider>
                <Tv />
              </ContextMoviesProvider>
            </ProtectedRoute>
          }/>
          <Route path='login' element={
              <Login saveUserData={savaDataUser} />}/>
          <Route path='register' element={<Register />}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
          <Route path='details/:category/:id' element={<Details />}/>
        </Routes>
      </div>
    </div>
  )
}

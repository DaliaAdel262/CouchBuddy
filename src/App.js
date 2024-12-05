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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

export default function App() {

  const [userData, setUserData] = useState(null);

  function savaDataUser(user){
    if (user) {
      user.getIdToken()
          .then((idToken) => {
              localStorage.setItem('token', idToken);
              const decodedToken = jwtDecode(idToken);
              setUserData(decodedToken);
          })
          .catch((err) => {
              console.error("Failed to retrieve token:", err);
          });
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
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        setUserData(decodedToken);
    }
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

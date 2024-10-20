import React, {useState} from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import { motion } from 'framer-motion';

export default function Navbar({userData,logOut}) {
    const {pathname} = useLocation();
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-color">
    <div className="container">
        <Link className="navbar-brand fs-2" to="/">CouchBuddy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData && (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <motion.li 
            initial={pathname === '/' || pathname === '/home' ? { backgroundColor : '#2e1919', color: 'rgb(255,255,255)' } : {}}
            >
                <Link className="nav-link active fs-5" aria-current="page" to='home'>Home</Link>
            </motion.li>
            <motion.li 
            initial={pathname === '/movies' ? { backgroundColor : '#2e1919', color: 'rgb(255,255,255)' } : {}}
            >
                <Link className="nav-link active fs-5" aria-current="page" to='movies'>Movies</Link>
            </motion.li>
            <motion.li 
            initial={pathname === '/people' ? { backgroundColor : '#2e1919', color: 'rgb(255,255,255)' } : {}}
            >
                <Link className="nav-link active fs-5" aria-current="page" to='people'>People</Link>
            </motion.li>
            <motion.li 
            initial={pathname === '/tv' ? { backgroundColor : '#2e1919', color: 'rgb(255,255,255)' } : {}}
            >
                <Link className="nav-link active fs-5" aria-current="page" to='tv'>Tv</Link>
            </motion.li>
        </ul>)}
        

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-item d-flex align-items-center'>
                <form class="d-flex">
                    <input class="form-control me-2 rounded-5 border-0" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </li>
            {userData ? (
                <li className="nav-item">
                    <button className="nav-link active fs-5" aria-current="page" onClick={()=>{logOut(); navigate('/login')}}>Logout</button>
                </li>
            ):(<>
                <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to='login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to='register'>Register</Link>
                </li>
            </>
            )}
        </ul>
        </div>
    </div>
    </nav>
  )
}

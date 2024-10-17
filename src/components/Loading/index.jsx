import React from 'react';
import placeholder from '../../images/image-placeholder.png';
import { Link } from 'react-router-dom';
import './index.css'

export default function Loading() {
  return (
    <div className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to='' className='w-100 h-100'>
            <div className="w-100 h-100 p-3">
              <div className="img-style">
                <div className="overlay-for-placeholder"></div>
                <img src={placeholder} alt="CouchBuddy placeholder" className='w-100 h-100'/>
              </div>
              <h2 class="custom-placeholder mt-3">
                <span class="col-6"></span>
              </h2>
            </div>
          </Link>
    </div>
  )
}

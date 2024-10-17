import React, { useEffect, useState, useContext } from 'react'
import { ContextMovies } from '../../Store';
import {Link} from 'react-router-dom'
import imgPath from '../../../constfunction/imgPath';
import placeholder from '../../../images/image-placeholder.png';
import Loading from '../../Loading';

export default function MovieCard({movie}) {

  let {loading} = useContext(ContextMovies);
  return (
    <>
    {
      loading ? (
        <Loading/>
      ):(
        <div className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to={`/details/movie/${movie.id}`} className='w-100 h-100'>
            <div className="w-100 h-100 p-3">
              <div className="img-style">
                <img src={movie?.poster_path ? imgPath(movie.poster_path):placeholder} alt="" className='w-100 h-100'/>
              </div>
              <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={movie.title==undefined ? movie.name : movie.title}>
                {movie.title==undefined ? movie.name : movie.title}
              </h2>
            </div>
          </Link>
        </div>
      )
    }
    </>
  )
}

import React from 'react';
import {Link} from 'react-router-dom'
import imgPath from '../../../constfunction/imgPath';

export default function MovieCard({movie}) {
  return (
    
        <div className="col-md-2" role='button'>
          <Link to={`/details/movie/${movie.id}`}>
            <div className="w-100 h-100 p-3">
              <img src={imgPath(movie.poster_path)} alt="" className='img-style'/>
              <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={movie.title==undefined ? movie.name : movie.title}>
                {movie.title==undefined ? movie.name : movie.title}
              </h2>
            </div>
          </Link>
        </div>
      
  )
}

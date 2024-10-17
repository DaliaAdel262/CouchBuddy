import React from 'react';
import {Link} from 'react-router-dom'
import imgPath from '../../../constfunction/imgPath';
import imageMovie from '../../../images/placeholder-movie-img.png';

export default function MovieCard({movie}) {
  return (
    
        <div className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to={`/details/movie/${movie.id}`}>
            <div className="w-100 p-3">
              <img src={movie.poster_path? imgPath(movie.poster_path):imageMovie} alt="" className='img-style'/>
              <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={movie.title==undefined ? movie.name : movie.title}>
                {movie.title==undefined ? movie.name : movie.title}
              </h2>
            </div>
          </Link>
        </div>
      
  )
}

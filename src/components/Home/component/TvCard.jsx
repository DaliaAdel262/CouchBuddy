import React from 'react';
import {Link} from 'react-router-dom'
import imgPath from '../../../constfunction/imgPath';

export default function TvCard({tv}) {
  return (
    
        <div className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to={`/details/tv/${tv.id}`}>
            <div className="w-100 p-3">
              <img src={imgPath(tv.poster_path)} alt="" className='img-style'/>
              <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={tv.title==undefined ? tv.name : tv.title}>
                {tv.title==undefined ? tv.name : tv.title}
              </h2>
            </div>
          </Link>
        </div>
      
  )
}
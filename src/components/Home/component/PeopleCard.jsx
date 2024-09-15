import React from 'react';
import {Link} from 'react-router-dom';
import imgPath from '../../../constfunction/imgPath';

export default function PeopleCard({people}) {
  return (
        <div className="col-md-2" role='button'>
          <Link to={`/details/person/${people.id}`}>
          <div className="w-100 h-100 p-3">
            <img src={imgPath(people.profile_path)} alt="" className='img-style'/>
            <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={people.title==undefined ? people.name : people.title}>
              {people.title==undefined ? people.name : people.title}
            </h2>
          </div>
          </Link>
        </div>
  )
}

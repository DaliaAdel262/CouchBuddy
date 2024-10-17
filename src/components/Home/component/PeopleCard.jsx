import React from 'react';
import {Link} from 'react-router-dom';
import imgPath from '../../../constfunction/imgPath';
import imagePerson from '../../../images/placeholder-img.jpg';

export default function PeopleCard({people}) {
  return (

      <div className="col-xl-2 col-lg-3 col-md-6" role='button'>
          <Link to={`/details/person/${people.id}`}>
          <div className="w-100 h-100 p-3">
            <img src={people.profile_path?imgPath(people.profile_path) : imagePerson} alt="" className='img-style'/>
            <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={people.title==undefined ? people.name : people.title}>
              {people.title==undefined ? people.name : people.title}
            </h2>
          </div>
          </Link>
        </div>
        
  )
}

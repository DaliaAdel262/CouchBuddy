import React, {useEffect,useState} from 'react';
import axios from 'axios';
import imgPath from '../../constfunction/imgPath';
import {useParams} from 'react-router-dom';

export default function Details() {

  const {category, id} = useParams();
  const [details, setDetails] = useState(null);

  function getDetails(){
      axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=46d0f50dab9a20a02767ef100c483326`)
      .then((res)=>{
          setDetails(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  }

  useEffect(()=>{
      getDetails();
  },[])

  return (
    <div className='row'>
      <div className="col-md-4">
          <div className="w-100">
              <img src={category=='person' ? imgPath(details?.profile_path) : imgPath(details?.poster_path)} alt="" className='w-100' />
          </div>
      </div>

      {category === 'movie' ? (
          <div className="col-md-7 offset-1">
                <div className="">
                    <h1>{details?.title}</h1>
                    <p>{details?.overview}</p>
                </div>
          </div>
      ): (category === 'person' ? (
        <div className="col-md-7 offset-1">
            <div className="">
                <h1>{details?.name}</h1>
                <p>{details?.biography}</p>
            </div>
       </div>
      ):( category === 'tv' && (
        <div className="col-md-7 offset-1">
            <div className="">
                <h1>{details?.name}</h1>
                <p>{details?.overview}</p>
            </div>
       </div>
      )

      ))}
      
    </div>
  )
}

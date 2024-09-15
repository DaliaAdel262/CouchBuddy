import axios from 'axios'
import React, { useEffect, useState } from 'react'
import imgPath from '../../constfunction/imgPath';
import {Link} from 'react-router-dom';
import './index.css'
import PeopleCard from './component/PeopleCard';
import MovieCard from './component/MovieCard';

export default function Home() {

  const [movies,setMovies] = useState([]);
  const [people,setPeople] = useState([]);
  const [tv,setTv] = useState([]);

  function getData(type, callback){
    axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=46d0f50dab9a20a02767ef100c483326`)
    .then((res)=>{
      callback(res.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getData('movie', setMovies);
    getData('person', setPeople);
    getData('tv', setTv);
  },[]);

  return (
    <>
    <div className='row gy-3 border-bottom py-5'>
      <div className="col-md-4 d-flex align-items-center">
        <div className="title w-75">
          <h1>Trending Movies <br/> To Watch</h1>
          <p className='m-0'>Top trending movies by day</p>
        </div>
      </div>
      {movies.slice(0,10).map((movie,i)=>(
        <MovieCard key={i} movie={movie} />
      ))}
      <div className="d-flex justify-content-end">
        <Link to='/movies' className='load-more-btn-style'>Load more..</Link>
      </div>
      
    </div>

    <div className='row gy-3 border-bottom py-5'>
      <div className="col-md-4 d-flex align-items-center">
        <div className="title w-75">
          <h1>Trending TV Shows <br/> To Watch</h1>
          <p className='m-0'>Top trending tv shows by day</p>
        </div>
      </div>
      {tv.slice(0,10).map((tv,i)=>(
        <div key={i} className="col-md-2" role='button'>
          <Link to={`/details/tv/${tv.id}`}>
          <div className="w-100 h-100 p-3">
            <img src={imgPath(tv.poster_path)} alt="" className='img-style'/>
            <h2 className="text-truncate mt-3" data-toggle="tooltip" data-placement="start" title={tv.title==undefined ? tv.name : tv.title}>
              {tv.title==undefined ? tv.name : tv.title}
            </h2>
          </div>
          </Link>
        </div>
      ))}
      <div className="d-flex justify-content-end">
        <Link to='/tv' className='load-more-btn-style'>Load more..</Link>
      </div>
      
    </div>

    <div className='row gy-3 py-5'>
      <div className="col-md-4 d-flex align-items-center">
        <div className="title w-75">
          <h1>Trending People <br/> To Watch</h1>
          <p className='m-0'>Top trending people by day</p>
        </div>
      </div>
      {people.slice(0,10).map((people,i)=>(
        <PeopleCard key={i} people={people} />
      ))}
      <div className="d-flex justify-content-end">
        <Link to='/people' className='load-more-btn-style'>Load more..</Link>
      </div>  
    </div>
    </>



  )
}

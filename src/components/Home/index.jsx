import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import imgPath from '../../constfunction/imgPath';
import {Link} from 'react-router-dom';
import './index.css'
import PeopleCard from './component/PeopleCard';
import MovieCard from './component/MovieCard';
import TvCard from './component/TvCard';
import { ContextMovies } from '../Store';

export default function Home() {

  let {movies} = useContext(ContextMovies);
  let {people} = useContext(ContextMovies);
  let {tv} = useContext(ContextMovies);
  
  return (
    <>
    <div className='row gy-2 border-bottom py-5'>
      <div className="col-md-4 d-flex align-items-center justify-center-media-query">
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

    <div className='row gy-2 border-bottom py-5'>
      <div className="col-md-4 d-flex align-items-center justify-center-media-query">
        <div className="title w-75">
          <h1>Trending Tv Shows <br/> To Watch</h1>
          <p className='m-0'>Top trending tv shows by day</p>
        </div>
      </div>
      {tv.slice(0,10).map((tv,i)=>(
        <TvCard key={i} tv={tv} />
      ))}
      <div className="d-flex justify-content-end">

        <Link to='/tv' className='load-more-btn-style'>Load more..</Link>
      </div>  
    </div>

    <div className='row gy-2 py-5'>
      <div className="col-md-4 d-flex align-items-center justify-center-media-query">
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

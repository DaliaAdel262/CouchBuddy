import { ContextMovies } from '../Store';
import React, { useEffect, useState, useContext } from 'react'
import TvCard from '../Home/component/TvCard';

export default function Tv() {

  let {tv} = useContext(ContextMovies);

  return (
    <div className='row gy-2 py-5'>
      {tv.map((tv,i)=>(
        <TvCard key={i} tv={tv} />
      ))}
    </div>
  )
}

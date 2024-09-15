import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [movies,setMovies] = useState([]);

  function getMovies(){
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=46d0f50dab9a20a02767ef100c483326`)
    .then((res)=>{
      setMovies(res.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className='row gy-3'>
      {movies.map((movie,i)=>(
        <div key={i} className="col-md-2" role='button'>
          <div className="w-100">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className='w-75'/>
            <h2 className='text-truncate'>{movie.title==undefined ? movie.name : movie.title}</h2>
          </div>
        </div>
      ))}
      
    </div>
  )
}

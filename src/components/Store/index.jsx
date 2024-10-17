import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextMovies = createContext(null)

export default function ContextMoviesProvider({children}){

  const [movies,setMovies] = useState([]);
  const [people,setPeople] = useState([]);
  let [page,setPage] = useState(1);
  let [loading,setLoading] = useState(true);
  const [tv,setTv] = useState([]);

  function getData(type, callback){
    axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=46d0f50dab9a20a02767ef100c483326&page=${page}`)
    .then((res)=>{
      callback(res.data.results)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getData('movie', setMovies);
  },[page]);

  useEffect(()=>{
    getData('person', setPeople);
  },[page])

  useEffect(()=>{
    getData('tv', setTv);
  },[page])


  return <ContextMovies.Provider value={{movies,people,tv, setPage, loading}}>
    {children}
  </ContextMovies.Provider>
}
import {createContext} from 'react';

const ContextMovies = createContext(0)

export function ContextMoviesProvider({children}){

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


    return <ContextMovies.Provider>
        {props.children}
    </ContextMovies.Provider>
}
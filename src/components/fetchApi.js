import { useEffect, useState } from "react"
import "./fetchApi.css"

const Movies = () =>{
    //variables and constants
    const [status, setStatus] = useState(true);
    const [movies, setMovies] =useState([]);
    const imgURL = "https://image.tmdb.org/t/p/w300"
    const KEY = "fae07e181e6c52b98620429577af7c26"
    const URL = "https://api.themoviedb.org/3/trending/movie/day?api_key="

    //load info from the api and add it to the state on movie 
    useEffect(()=>{
        fetchApi()
    })

    const fetchApi = () => { 
        if (status === true){
            fetch(URL+KEY)
            .then(response => response.json())
            .then(data => {
                    const results = data.results;
                    setMovies(results);
            })
            setStatus(false)
        }
    }



    return (
        <div className="movie">
            {movies.map((movie, key) =>{
                return(
                    <div className="poster-name" key={key}>
                        <img loading="lazy" alt="poster" src={imgURL+movie.poster_path}/>
                        <h2>{movie.title}</h2>
                    </div>
                )
            })}
        </div>
    );
}

export default Movies;
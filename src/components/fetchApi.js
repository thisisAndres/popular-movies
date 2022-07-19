import { useEffect, useState } from "react"


const Movies = () =>{
    //variables and constants

    const [movies, setMovies] =useState({movieName: [], movieImgPath:[]})

    const imgURL = "https://image.tmdb.org/t/p/w200"
    const KEY = "fae07e181e6c52b98620429577af7c26"
    const URL = "https://api.themoviedb.org/3/trending/movie/day?api_key="

    //load info from the api and add it to the state on movie 
    useEffect(()=>{
        fetchApi()
    })

    const fetchApi = () => { 
        fetch(URL+KEY)
            .then(response => response.json())
            .then(data => {
                    const results = data.results;
                    const newResults = results.map(element => {return element.title});
                    const imagesPaths = results.map(element => {return element.poster_path})
                    setMovies({movieName:newResults, movieImgPath:imagesPaths})
            })
    }



    return (
        <div>
            {movies.movieImgPath.map( (img, key) => {return <img alt="movie" key={key} src={imgURL+img}/>})}
        </div>
    );
}

export default Movies;
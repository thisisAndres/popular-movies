import "./fetchApi.css"
import React, { useEffect, useState } from "react"

const Movies = () =>{
    const [titles, setTitles] = useState("")
    const KEY = "fae07e181e6c52b98620429577af7c26"
    const URL = "https://api.themoviedb.org/3/trending/movie/day?api_key="

    const fetchApi = () => { 
        fetch(URL+KEY)
            .then(response => response.json())
            .then(data => {
                    const results = data.results;
                    const newResults = results.map(element => {return element.title})
                    console.log(newResults)
            })
    }

   useEffect(()=>{
    fetchApi();
   })

    return(
        <div>
            hola
        </div>
    )
}

export default Movies;
import axios from "axios";
import React, { useEffect, useState } from "react";
// import data from '../api-response.json'
import movie from '../movie-response.json'

const MoviePage = ({searchTerm, setSearchTerm}) => {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
      axios.get(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_KEY}/${searchTerm}`)
      .then((res) => {setMovies(res.data.results)})
    },[])

  return (
    <div className="moviecontent">
    {movies.map((movie) => {
      return <div key={movie.id} className="movie">   <img src= {movie.image} loading="lazy"
              alt="No Preview" width="300" height="300" /><br /> {movie.title}</div>
    })}
  </div>
  );
};

export default MoviePage;

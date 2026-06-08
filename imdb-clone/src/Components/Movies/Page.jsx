import axios from "axios";
import React, { useEffect, useState } from "react";

const MoviePage = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);
    setError(null);
    axios
      .get(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_KEY}/${searchTerm}`)
      .then((res) => setMovies(res.data.results || []))
      .catch(() => setError("Failed to fetch movies. Check your API key."))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="moviecontent">
      {movies.length === 0 && <p>No results for "{searchTerm}"</p>}
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={movie.image} loading="lazy" alt={movie.title} width="300" height="300" />
          <br />
          {movie.title}
        </div>
      ))}
    </div>
  );
};

export default MoviePage;

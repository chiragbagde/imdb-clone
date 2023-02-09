import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import MoviePage from "./Movies/Page";

const MainPage = (props) => {
    const [movies,setMovies] = useState(true);
    const [searchTerm, setSearchTerm] = useState('Spiderman');

    const handleKeyPress = (event) => {
      if(event.key == 'Enter'){
        if(searchTerm == ''){
          setSearchTerm('Spiderman')
        }
        else setSearchTerm(event.target.value);
      }
    }

  return (
    <div className="mainpage">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        onKeyPress={handleKeyPress}
        label="Search Term"
        placeholder="Spiderman"
      />

      <div className="content">
        Browse or search for Actor, Movies, Producers <br />
        {movies && <MoviePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      </div>
    </div>
  );
};

export default MainPage;

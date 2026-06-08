import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MoviePage from "./Movies/Page";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("Spiderman");
  const [inputValue, setInputValue] = useState("Spiderman");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(inputValue.trim() || "Spiderman");
    }
  };

  return (
    <div className="mainpage">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        label="Search Movies"
        placeholder="Spiderman"
      />
      <div className="content">
        Browse or search for Actor, Movies, Producers <br />
        <MoviePage searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default MainPage;

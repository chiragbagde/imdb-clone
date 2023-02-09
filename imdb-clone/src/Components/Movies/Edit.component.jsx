import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "./Form";
import { useParams,useNavigate } from "react-router-dom";

const EditMovie = () => {
    const {id} = useParams();
    const history = useNavigate();
    const [ formValues, setFormValues ] = useState({
        name: "",
        boxoffice: null,
        imdb: null,
    })

const onSubmit = ( movieObject ) => {
    axios.put(
        "http://localhost:4000/movies/update-movie/" +
        id,
        movieObject
    )
    .then((res) => {
        if(res.status === 200){
            alert("Movie updated successfully");
            history("/movie-list");
        }else Promise.reject();
    })
    .catch((err) => alert('Something went wrong'));
}

useEffect(() => {
    console.log(id);
    axios
        .get("http://localhost:4000/movies/update-movie/"
        + id 
        )
        .then((res) => {
            const { name, boxoffice, imdb } = res.data;
            setFormValues({ name, boxoffice, imdb });
        })
        .catch((err) => console.log(err));
}, []);

    return (
        <MovieForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
        >
            Update Movie
        </MovieForm>
    )

};

export default EditMovie;
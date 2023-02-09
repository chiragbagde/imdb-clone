import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "./Form";

const CreateMovie = () => {
    const [formValues, setFormValues] = 
        useState({name: '', boxoffice: null, imdb: null});
    const onSubmit = movieObject => {
        axios.post(
            'http://localhost:4000/movies/create-movie',
        )
        .then(res => {
            if(res.status === 200)
                alert('Movie added successfully')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }

    return (
        <MovieForm initialValues={formValues}
            onSubmit={onSubmit} 
            enableReinitialize>Add Movie
    </MovieForm>)
}

// export createMovie

export default CreateMovie
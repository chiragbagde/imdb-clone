import React, { useState, useEfect, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MovieTableRow from "./TableRow";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:4000/movies")
        .then(({data}) => {
            setMovies(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const DataTable = () => {
        return movies.map((res, i) => {
            return <MovieTableRow obj={res} key={i} />
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Box Office</th>
                        <th>IMDB</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    )
}

export default MovieList;
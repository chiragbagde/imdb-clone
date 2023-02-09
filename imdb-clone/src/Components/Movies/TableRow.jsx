import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieTableRow = (props) => {
    const {_id, name, boxoffice, imdb} = props.obj;

    const deleteMovie = () => {
        axios
            .delete(
                "http://localhost:4000/movies/delete-movie/" + _id
            )
            .then((res) => {
                if(res.status === 200){
                    alert("Movie successfully deleted");
                    window.location.reload();
                }else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
        }

    return (
        <tr>
            <td>{name}</td>
            <td>{boxoffice}</td>
            <td>{imdb}</td>
            <td>
                <Link className="edit-link"
                    to={"/edit-movie/" + _id}>
                    Edit
                </Link>
                <Button onClick={deleteMovie}
                    size="sm" variant="danger"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default MovieTableRow;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

const Actors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:4000/actors")
        .then(({data}) => {
            setActors(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const deleteMovie = (id) => {
        axios
            .delete(
                "http://localhost:4000/movies/delete-movie/" + id
            )
            .then((res) => {
                if(res.status === 200){
                    alert("Movie successfully deleted");
                    window.location.reload();
                }else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
        }
        const DataTable = () => {
            return actors.map(({_id,name,height,awards}) => {
            return<tr key={_id}>
            <td>{name}</td>
            <td>{height}</td>
            <td>{awards}</td>
            <td>
                <Link className="edit-link"
                    to={"/edit-actor/" + _id}>
                    Edit
                </Link>
                <Button onClick={() => deleteMovie(_id)}
                    size="sm" variant="danger"
                >
                    Delete
                </Button>
            </td>
        </tr> 
        })};
    
    return (
        <div className="table-wrapper">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Awards</th>
                </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
        </Table>
        </div>
        )

};

export default Actors;

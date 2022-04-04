import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function ListUsers() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/crud-api/users').then(function(response) {
            console.log(response.data);
            setUsers(response.data)
        });
    }

    const deleteUser = (user_id) => {
        axios.delete(`http://localhost:80/crud-api/user/delete?user_id=${user_id}`).then(function(response) {
            console.log(response.data);
            getUsers();
        });
    }

return (
    <Container>
        {users != null &&
        <Row>
            <h1 className="titleText">List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.user_id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`user/update/${user.user_id}`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.user_id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </Row>
        }   
    </Container>
)}

export default ListUsers;


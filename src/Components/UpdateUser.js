import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

function UpdateUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([
    ]);


    const {user_id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:80/crud-api/?user_id=${user_id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const updateFieldChanged = index => e => {
        console.log('index: ' + index);
        console.log('property name: ' + e.target.name);
        console.log('property value: ' + e.target.value);
        let newArr = [...inputs];
        newArr[index] = e.target.value;

        setInputs(newArr);
    }

   /*  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    } */
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/crud-api/?user_id=${user_id}`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <Container>
            <h1 className="titleText">Edit user</h1>
            <Form onSubmit={handleSubmit}>

            {inputs.map((user, index) =>
            <div key={index}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={user.firstName}
                    name="firstName"
                    onChange={updateFieldChanged(index)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={user.lastName}
                    name="lastName"
                    onChange={updateFieldChanged(index)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="E-Mail"
                    value={user.email}
                    name="email"
                    onChange={updateFieldChanged(index)}
                    />
                </Form.Group>
            </div>
            )}
            </Form>
        </Container>
    )
}

export default UpdateUser;
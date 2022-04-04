import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CreateUser.css";

function CreatetUser() {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setSignupData(prevSignupData => {
            return {
                ...prevSignupData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (signupData.password === signupData.confirmPassword) {
            axios.post('http://localhost:80/crud-api/', signupData).then(function(response) {
            navigate('/');
        })
            alert("Successfully signed up");

        } else {
            alert("Passwords do not match, please try again");
            return
        }
    }
    
    return (
        <Container>
            <h1 className="titleText">Create User</h1>
            <Form onSubmit={handleSubmit}className="form">
                <Row>
                    <Col className="col-md-2 col-12">
                        <Form.Label>First Name:</Form.Label>
                    </Col>
                    <Col className="col-md-10 col-12">
                        <Form.Control 
                        type="text" 
                        name="firstName" 
                        onChange={handleChange}
                        value={signupData.firstName}
                        required 
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-12">
                        <Form.Label>Last Name:</Form.Label>
                    </Col>
                    <Col className="col-md-10 col-12">
                        <Form.Control 
                        type="text" 
                        name="lastName" 
                        onChange={handleChange}
                        value={signupData.lastName}
                        required  
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-12">
                        <Form.Label>E-mail:</Form.Label>
                    </Col>
                    <Col className="col-md-10 col-12">
                        <Form.Control 
                        type="email" 
                        name="email" 
                        onChange={handleChange}
                        value={signupData.email}
                        required  
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-12">
                        <Form.Label>Password:</Form.Label>
                    </Col>
                    <Col className="col-md-10 col-12">
                        <Form.Control 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                        value={signupData.password}
                        required  
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-2 col-12">
                        <Form.Label>Repeat Password:</Form.Label>
                    </Col>
                    <Col className="col-md-10 col-12">
                        <Form.Control 
                        type="password" 
                        name="confirmPassword" 
                        onChange={handleChange} 
                        value={signupData.confirmPassword}
                        required
                        />
                    </Col>
                </Row>
                <Row>
                    <Button variant="secondary" onClick={handleSubmit}>Register User</Button>
                </Row>
            </Form>
        </Container>   
    );
}

export default CreatetUser;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CreateUser.css";

function CreatetUser() {
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
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
                        name="repeatPassword" 
                        onChange={handleChange} 
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


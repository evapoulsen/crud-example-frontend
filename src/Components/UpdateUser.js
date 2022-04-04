import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

function UpdateUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {user_id} = useParams();

    useEffect(() => {
        getUser();
    }, []);
  
    function getUser() {
        axios.get(`http://localhost:80/crud-api/?user_id=${user_id}`).then(function(response) {
            setInputs(response.data);
        });
    }

    const userData = inputs.map((user, key) =>
    <Row key={key}>
        <Col className="col-md-1 col-1">{user.user_id}</Col>
        <Col className="col-md-6 col-11">{user.firstName} {user.lastName}</Col>
        <Col className="col-md-5 col-12">{user.email}</Col>
        </Row>
)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = (event) => {
        setFormData(prevInputs => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/crud-api/?user_id=${user_id}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            if (response.data.status === 1) {
                navigate('/') 
            return (
                alert ("The user has been updated!")
            )
            } else {
                return (
                    alert ("The user could not be updated!")
                )
            }
            
        })
        }
        
    return (
        <Container>
            <h1 className="titleText">Update user</h1>
            <Row>
                <Col className="col-md-6 col-6">
                    <Form onSubmit={handleSubmit} className="formupdate">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Update First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Update Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            placeholder="Update E-Mail Address"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <br />
                        <Button variant="info" type="submit">Update User</Button>
                    </Form>
                </Col>
                <Col className="col-md-6 col-6">
                    {userData}
                </Col>
            </Row>
        </Container>
    )
}
export default UpdateUser;
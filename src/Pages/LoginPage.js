import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GetLoggedInUserData, login } from '../Services/DataService';

export default function LoginPage() {
    let navigate = useNavigate();
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async () => {
        let userData = {
            Username: username,
            Password: password
        }
        let token = await login(userData);
        // console.log(token)
        if (token.token != null) {
            localStorage.setItem("Token", token.token);
            GetLoggedInUserData(Username);
            navigate("/Dashboard");

        }
    }

    return (
        <Container>
            <Row>
                <Col className='mt-5' style={{ backgroundColor: 'gray', borderRadius: 5, padding: 50 }}>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"
                                placeholder="Create Username"
                                onChange={({ target }) => setUsername(target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                placeholder="Create Password"
                                onChange={({ target }) => setPassword(target.value)} />
                        </Form.Group>
                        <Button variant="primary"
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                    <h5>Don't have an account?</h5>
                    <Button onClick={() => navigate("/Account")}>Create Account</Button>
                </Col>
            </Row>
        </Container>
    )
}

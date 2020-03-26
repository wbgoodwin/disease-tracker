import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/login.css'
//import { login } from '../accountManagement';
import { AUTH_TOKEN } from '../constants'
import { Link } from 'react-router-dom';

const Login = () => {
    const employeeLogin = {
        username: "",
        password: ""
    };

    const [isLoggingIn, setLoggingIn] = useState(false);

    const handleSubmit = () => console.log(employeeLogin);


    useEffect(() => {
        if (isLoggingIn) {
            console.log(employeeLogin);
            window.location.href = "/Landing"
            //login("Alice");
            setLoggingIn(false);
        }
    }, [isLoggingIn]);


    return (
        <div className="login-container">
            <div className="left" />

            <Form className="login-form">
                <h2>Enter Login Information</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control placeholder="Enter username" defaultValue={employeeLogin.username} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" defaultValue={employeeLogin.password} />
                </Form.Group>

                <Link to="/Landing" className="btn btn-secondary">{isLoggingIn ? 'Logging in…' : 'Submit'}</Link>
                {/* <Button variant="secondary"
                    type="submit"
                    disabled={isLoggingIn}
                    onClick={handleSubmit}>
                    {isLoggingIn ? 'Logging in…' : 'Submit'}
                </Button> */}
            </Form>
        </div >
    );
}


export default Login;

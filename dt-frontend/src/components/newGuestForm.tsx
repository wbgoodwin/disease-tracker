import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const NewGuestForm = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
          </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
          </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
          </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button type="submit" variant="secondary">Create New Guest</Button>
        </Form>
    );
}


export default NewGuestForm;
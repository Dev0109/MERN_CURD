import React, { Component, useState, useSelector } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"

const CreateStudent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rollon, setRollon] = useState("");
    const handlechange_name = (e) => {
        setName(e.target.value);
    }
    const handlechange_email = (e) => {
        setEmail(e.target.value);
    }
    const handlechange_rollon = (e) => {
        setRollon(e.target.value);
       
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const studentObject = {
            name: name,
            email: email,
            rollon: rollon
        };
        console.log("studentObject==>", studentObject);
        axios.post('http://localhost:4000/students/create-student', studentObject)
        // .then(res => console.log(res.data));
    }
    return (
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mt-3" controlId='Name' >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' value={name} onChange={handlechange_name} />
                </Form.Group>
                <Form.Group className="mt-3" controlId='Email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={handlechange_email} />
                </Form.Group>
                <Form.Group className="mt-3" controlId='Rollon'>
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control type='text' value={rollon} onChange={handlechange_rollon} />
                </Form.Group>
                <Button className="mt-3 w-100" variant="danger" size="lg" block="block" type="submit">
                    Create Student
                </Button>
            </Form>
        </div>
    );
}

export default CreateStudent;
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {

    const firebase = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // already logged in then back to home
    const navigate = useNavigate();
    useEffect(() => {
        if(firebase.isLoggedIn){
            navigate("/")
        }
    }, [firebase, navigate])
    
    // sign in user
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Signin up a user')
        const result = await firebase.signUpUser(email, password);
        console.log('Successful', result);
    }

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email" placeholder="Enter email" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password" placeholder="Password" />

                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    )
}

export default RegisterPage;
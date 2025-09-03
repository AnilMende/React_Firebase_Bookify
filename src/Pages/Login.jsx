import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const firebase = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // if a user is logged in return user back to home page
    const navigate = useNavigate();

    useEffect(() => {
        // if loggedin navigate to home
        if(firebase.isLoggedIn){
            navigate("/");
        }
    }, [firebase, navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login a User');
        const result = await firebase.signInUser(email, password);
        console.log("Success", result);
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
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password" placeholder="Password" />

                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <h1 className="mt-5 mb-5">OR</h1>
            <Button onClick={firebase.signInWithGoogle} variant="danger" >Sign In With Google</Button>
        </div>
    )
}

export default LoginPage;
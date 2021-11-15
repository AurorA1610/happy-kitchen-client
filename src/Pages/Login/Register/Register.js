import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('Password does not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container sx={ { mt: 5 } }>
            <Typography variant="h4" sx={ { fontWeight: 'bold' } } gutterBottom>
                Register
            </Typography>

                    { !isLoading && <form onSubmit={ handleLoginSubmit }>
                        <TextField
                            sx={ { width:"50%", m: 1 } }
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={ handleOnBlur }
                            variant="standard" />

                        <TextField
                            sx={ { width:"50%", m: 1 } }
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={ handleOnBlur }
                            variant="standard" />

                        <TextField
                            sx={ { width:"50%", m: 1 } }
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={ handleOnBlur }
                            type="password"
                            variant="standard" />

                        <TextField
                            sx={ { width:"50%", m: 1 } }
                            id="standard-basic"
                            label="Confirm Password"
                            name="password2"
                            onBlur={ handleOnBlur }
                            type="password"
                            variant="standard" />
                        <br /> <br />
                        <Button
                            sx={ { width:"30%", m: 1 } }
                            type="submit"
                            variant="contained"
                            color="success"
                        >Register</Button>
                        <br /> <br />
                        <NavLink
                            style={ { textDecoration: "none" } }
                            to="/login">
                            <Button color="success" variant="text" sx={ { mb: 5 } }>
                                Already Registered? Please Login
                            </Button>
                        </NavLink>
                    </form> }
                    {
                        isLoading && <CircularProgress sx={ { m: 3 } } />
                    }
                    {
                        user?.email && <Alert severity="success">Registered Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{ authError }</Alert>
                    }
        </Container>
    );
};

export default Register;
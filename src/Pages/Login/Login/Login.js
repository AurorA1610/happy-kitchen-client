import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container sx={ { mt: 5 } }>
            <Typography variant="h4" sx={ { fontWeight: 'bold' } } gutterBottom>
                Login
            </Typography>
            { <form onSubmit={ handleLoginSubmit }>
                <TextField
                    sx={ { width:"50%", m:1 } }
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    onBlur={ handleOnChange }
                    variant="standard" />

                <TextField
                    sx={ { width:"50%", m:1 } }
                    id="standard-basic"
                    label="Your Password"
                    name="password"
                    onBlur={ handleOnChange }
                    type="password"
                    variant="standard" />
                <br /> <br />
                <Button
                    sx={ { width:"30%", m:1, backgroundColor: '#239B56' } }
                    type="submit"
                    variant="contained"
                    color="success"
                >Login</Button>
                <br /> <br />
                <NavLink
                    style={ { textDecoration: "none" } }
                    to="/register">
                    <Button variant="text" color="success" sx={ { mb: 5 } }>
                        New User? Please Register
                    </Button>
                </NavLink>
            </form> }
            {
                isLoading && <CircularProgress sx={ { m: 3 } } />
            }
            {
                user?.email && <Alert severity="success">Logged in Successfully</Alert>
            }
            {
                authError && <Alert severity="error">{ authError }</Alert>
            }
        </Container>
    );
};

export default Login;
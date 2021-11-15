import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('email');
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://morning-basin-57336.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if(data.modifiedCount) {
                setSuccess(true);
                setEmail('');
            }
        })
        e.preventDefault();
    }

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h1 style={ { fontFamily: 'Lucida Console', marginTop: 50, marginBottom: 50, color: '#7FB3D5' } }>Make An admin</h1>
            <form onSubmit={ handleAdminSubmit }>
                <TextField id="standard-basic" label="Email" type="email" onBlur={ handleOnBlur } variant="standard" sx={ { width: '30%' } } />
                <br /> <br />
                <Button variant="contained" type="submit" color="success" sx={ { marginBottom: 20 } }>Make Admin</Button>
            </form>
            
            {
                success && <Alert severity="success">Made An Admin Successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;
import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

const SingleOrder = ({ singleOrder }) => {
    const [_id, setId] = useState(singleOrder?._id);
    const [success, setSuccess] = useState(false);

    const handleOnClick = e => {
        const order = { _id };
        fetch('http://localhost:5000/orders', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        }).then(res => res.json()).then(data => {
            if(data.modifiedCount) {
                setSuccess(true);
            }
        });
    };


    return (
        <Container>
            <Card sx={{ maxWidth: 900, m: 5, backgroundColor: '#D4E6F1', border: '1px solid gray' }}>
                <CardContent>
                    <Typography sx={ { m: 1, color: '#5B2C6F'} } gutterBottom variant="h3" component="div">
                        { singleOrder?.email }
                    </Typography>

                    <hr />

                    <Typography sx={ { m: 1 } } gutterBottom variant="h5" component="div">
                        Product: { singleOrder?.order.name }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="h5" component="div">
                        Price: <span style={ { color: 'red' } }>$ { singleOrder?.order.price }</span>
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Color: </span>{ singleOrder?.order.color }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Material: </span>{ singleOrder?.order.material }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Brand: </span>{ singleOrder?.order.brand }
                    </Typography>

                    <Typography sx={ { m: 1 } } gutterBottom variant="p" component="div">
                        <span style={ { fontWeight: 'bold' } }>Quantity: </span>{ singleOrder?.order.quantity }
                    </Typography>
                </CardContent>
                <Button variant="contained" onClick={ handleOnClick } sx={ { mb: 3 } } color="success">Update Status</Button>
            </Card>
        </Container>
    );
};

export default SingleOrder;
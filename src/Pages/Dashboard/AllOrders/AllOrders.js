import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, []);

    return (
        <Container>
            <h1 style={ { fontFamily: 'Lucida Console', margin: 20, color: '#7FB3D5' } }>My Orders</h1>
            {
                orders.map(singleOrder => <SingleOrder
                    key={ singleOrder._id }
                    singleOrder={ singleOrder }
                ></SingleOrder>)
            }
        </Container>
    );
};

export default AllOrders;
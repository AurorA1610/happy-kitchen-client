import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
        const [orders, setOrders] = useState([]);
        const { user } = useAuth();
        const email = user?.email;
    
        useEffect(() => {
            fetch(`http://localhost:5000/orders?email=${ email }`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                });
        }, [email]);
    
        // Delete an order
        const handleDelete = id => {
            const proceedToDelete = window.confirm("Are you sure if you want to cancel this booking?");
            if(proceedToDelete) {
                fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if(data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = orders.filter(singleOrder => singleOrder._id !== id);
                    setOrders(remainingOrders);
                }
            });
            }
        };
    return (
        <Container>
            <h1>Your Orders</h1>
            {
                orders.map(singleOrder => <MyOrder
                    key={ singleOrder._id }
                    singleOrder={ singleOrder }
                    handleDelete={ handleDelete }
                ></MyOrder>)
            }
        </Container>
    );
};

export default MyOrders;
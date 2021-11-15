import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../ProductDetails/ProductDetails';

const Purchase = () => {
    const { productId } = useParams(); 
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${ productId }`).then(res => res.json()).then(data => setProductDetails(data));
    }, []);
    return (
        <div>
            <ProductDetails
                productDetails={ productDetails }
            ></ProductDetails>
        </div>
    );
};

export default Purchase;
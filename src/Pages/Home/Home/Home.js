import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <> 
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Awards></Awards>
        </>
    );
};

export default Home;
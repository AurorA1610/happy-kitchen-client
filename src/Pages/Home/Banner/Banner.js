import { Typography } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="banner-img">
            <div id="banner-content">
                <Typography sx={ { p: 2, borderRadius: 10, fontWeight: 'bold', color: '#145A32', backgroundColor: 'rgba(213, 245, 227, 0.671)' } } variant="h3" component="h2">
                    Shop With Us To Make Your Kitchen Gorgeous
                    
                    <Typography sx={ { mt: 5, backgroundColor: '#F9E79F', borderRadius: 10, p: 2 } } variant="h6" component="p">
                        The Best Brands With Their Best Products. Hurry Up And Get Your Cart Ready.
                    </Typography>
                </Typography>
            </div>
        </div>
    );
};

export default Banner;
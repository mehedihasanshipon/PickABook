import React from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is checkout section {id} </h2>
        </div>
    );
};

export default CheckOut;
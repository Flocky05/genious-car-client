import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title } = useLoaderData();

    return (
        <div>
            <h3>{title}</h3>

        </div>
    );
};

export default CheckOut;
import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ service }) => {
    const { img, title, name, details, price, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 text-xl font-semibold'>Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="text-orange-600 text-xl"><HiArrowRight></HiArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
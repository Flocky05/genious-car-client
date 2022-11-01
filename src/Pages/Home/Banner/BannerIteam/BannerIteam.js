import React from 'react';
import '../BannerIteam.css';

const BannerIteam = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-10">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex top-1/4  transform -translate-y-1/2 left-5 ml-24 w-2/5 ">
                <h2 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing <br />
                </h2>
            </div>
            <div className="absolute flex top-1/2  transform -translate-y-1/2 left-5 ml-24 w-1/2 ">
                <p className=' text-white text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis magnam cupiditate esse voluptatum ad enim veniam inventore rem
                </p>
            </div>

            <div className="absolute flex top-2/3  transform -translate-y-1/2 left-5 ml-24 w-1/2 ">
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline btn-accent ml-5">Button</button>

            </div>
        </div>
    );
};

export default BannerIteam;
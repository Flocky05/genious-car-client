import React from 'react';

import img1 from '../../../assets/icons/check.svg'
import img2 from '../../../assets/icons/deliveryt.svg'
import img3 from '../../../assets/icons/Wrench.svg'


const MoreServices = () => {
    return (
        <div>
            <div className='text-center m-16'>
                <button className="btn btn-outline text-orange-600">more services</button>
            </div>
            <div className='bg-black rounded-lg grid grid-cols-1 lg:grid-cols-3 p-20'>
                <div className='flex text-white'>
                    <div className='text-5xl mr-4'>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <p >We are open monday-friday</p>
                        <h2 className='text-white text-3xl font-semibold'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div className='text-5xl mr-4'>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <p >Have a question?</p>
                        <h2 className='text-white text-3xl font-semibold'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div className='text-5xl'>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <p >Need a repair? our address</p>
                        <h2 className='text-white text-3xl font-semibold'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreServices;
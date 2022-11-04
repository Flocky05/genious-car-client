import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
            <div>
                <img className='w-full max-h-96 rounded-lg mb-24' src={img} alt="" />
                <div className="absolute flex top-1/2  transform -translate-y-1/2 left-5 ml-24 w-2/5 ">
                    <h2 className='text-4xl font-bold text-white p-8'>
                        Add New Service
                    </h2>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder} className='bg-slate-200 p-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-secondary w-full " />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-secondary w-full " />
                    <input name="phone" type="text" placeholder="phone" className="input input-bordered input-secondary w-full " required />
                    <input name="email" type="email" defaultValue={user?.email} className="input input-bordered input-secondary w-full " />
                </div>
                <div>
                    <textarea name='message' className="textarea textarea-secondary w-full h-52 mt-4" placeholder="your message" required></textarea>
                    <button className="btn bg-orange-600 text-white w-full mt-4">Warning</button>
                </div>
            </form>

        </div>
    );
};

export default CheckOut;
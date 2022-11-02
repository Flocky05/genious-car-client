import React from 'react';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoGoogle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="hero">
            <div className="hero-content  ">
                <div className="text-center lg:text-left">

                    <img className='p-4 my-4' src={img} alt="" />
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <h1 className="text-4xl font-semibold text-center my-4">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text my-2">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text my-2">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white">Sign In</button>
                        </div>
                        <div>
                            <p className='text-center'>Or Sign In with</p>
                        </div>
                        <div className='flex justify-items-end'>
                            <Link to='/facebook'> <IoLogoFacebook></IoLogoFacebook></Link>
                            <Link to=''><IoLogoLinkedin></IoLogoLinkedin></Link>
                            <Link to=''><IoLogoGoogle></IoLogoGoogle></Link>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
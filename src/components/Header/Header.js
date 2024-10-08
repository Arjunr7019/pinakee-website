import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroungImg from '../../img/homebackgroundImg.png'
import logo from '../../img/logotest.png';

export default function Header() {
    return (
        <div className='mb-5' style={{
            backgroundImage: `url(${BackgroungImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <nav className='w-100 d-flex justify-content-between align-item-center flex-row px-4 py-2 mb-4'>
                <div>
                    <img className='w-25' src={logo} alt="logo" />
                </div>
                <ul className='w-25 d-flex justify-content-around align-item-center flex-row m-0'>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Home</a></li>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Services</a></li>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}
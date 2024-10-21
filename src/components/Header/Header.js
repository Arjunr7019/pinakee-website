import React, { useState } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroungImg from '../../img/homebackgroundImg.png'
import logo from '../../img/logotest.png';
import menuIcon from '../../img/bx-menu.svg';
import menuX from '../../img/bx-x.svg';

export default function Header() {
    const [menu, setMenu] = useState(false);
    // const [size, setSize] = useState(0);
    // useLayoutEffect(() => {
    //     function updateSize() {
    //         setSize(window.innerWidth);
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);


    return (
        <div className='mb-5' style={{
            backgroundImage: `url(${BackgroungImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <nav className='w-100 d-flex justify-content-between align-items-center flex-row px-4 py-2 mb-4'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={() => menu ? setMenu(false) : setMenu(true)} className='d-flex d-sm-none' style={{ cursor: "pointer" }}>
                    <img src={menu ? menuX : menuIcon} alt="icon" />
                </div>
                <ul className='w-25 d-none d-sm-flex justify-content-around align-items-center flex-row m-0'>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Home</a></li>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Services</a></li>
                    <li className='list-unstyled m-auto'><a className='text-black text-decoration-none' href="/">Contact Us</a></li>
                </ul>
            </nav>
            {menu?<div className='w-100 d-flex justify-content-end align-items-center flex-row'>
                <ul className='w-50 d-flex justify-content-center align-items-center flex-column m-0'>
                    <li className='mb-2 w-100 list-unstyled'><a className='text-black text-decoration-none' href="/">Home</a></li>
                    <li className='mb-2 w-100 list-unstyled'><a className='text-black text-decoration-none' href="/">Services</a></li>
                    <li className='mb-2 w-100 list-unstyled'><a className='text-black text-decoration-none' href="/">Contact Us</a></li>
                </ul>
            </div>:<></>}
        </div>
    )
}
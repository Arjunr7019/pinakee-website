import React from 'react';
import logo from '../../img/logotest.png';

export default function Footer(){
    return(
        <div className='p-5 d-flex justify-content-between align-items-center flex-row' style={{backgroundColor:"#F0F0F0"}}>
            <p className='m-0'>Pinake digitech &#169; 2024</p>
            <img style={{width:"15%"}} src={logo} alt="logo" />
        </div>
    )
}
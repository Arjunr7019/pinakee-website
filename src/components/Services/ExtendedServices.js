import React from 'react';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExtendedServicesImg from '../../img/extendedServices.svg';

export default function ExtendedServices() {
    return (
        <div className='ExtendedServices py-5 py-sm-0 d-flex justify-content-center align-items-center flex-column flex-sm-row'>
            <img className='mb-3 mb-sm-0' src={ExtendedServicesImg} alt="img" />
            <div className='GetMoreWithUs-Container px-3 px-sm-5 d-flex justify-content-center flex-column'>
                <h1 className='mb-3'>Get More With Us</h1>
                <div>
                    <h5 className='fw-bold'>FREE APP</h5>
                    <p>We regularly upload new free apps to our website, which is fully accessible to our
                        clients and subscribers. You can also find out about free apps in our blog.</p>
                </div>
                <div>
                    <h5 className='fw-bold'>GET SOCIAL</h5>
                    <p>Every app we develop has built-in social support that allows you to stay
                        connected to your accounts on Facebook, Instagram, Twitter and other networks.</p>
                </div>
                <div>
                    <h5 className='fw-bold'>CUSROMER SERVICE</h5>
                    <p>Every customer of Pinakee can get access to our friendly and qualified 24/7
                        support via chat or phone. Fell free to ask us any question!</p>
                </div>
                <div>
                    <h5 className='fw-bold'>GREAT USABILITY</h5>
                    <p>All our apps are designed to have great usability in order to easily operate our applications.
                        That is why our software has high ratings and lots of awards.</p>
                </div>
                <div className='mt-2'>
                    <button className='px-4 py-2 border-0 rounded-pill text-light' style={{
                        background: "linear-gradient(0deg, rgba(249,90,30,1) 0%, rgba(255,149,32,1) 100%)"
                    }}>Get Start</button>
                </div>
            </div>
        </div>
    )
}
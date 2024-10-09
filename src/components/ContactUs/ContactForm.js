import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from '../../img/bxl-instagram.svg';
import linkedIn from '../../img/bxl-linkedin.svg';
import twitter from '../../img/bxl-twitter.svg';

export default function ContactForm() {
    return (
        <div className='mx-5 py-5 d-flex justify-content-around align-items-center flex-row' style={{height:"80vh"}}>
            <div className='w-50 d-flex justify-content-center align-items-center flex-column'>
                <h2 className='w-50 fw-bold mb-3'>Our Contacts</h2>
                <p className='w-50 mb-5' style={{ lineHeight: "180%" }}>Bengaluru,India <br />+91-86608 87277 <br />hello@pinakeedigitech.com</p>
                <p className='w-50 m-0'>Follow us:</p>
                <div className='w-50 my-2 d-flex justify-content-start align-items-center flex-row'>
                    <img className='me-1' style={{ fill: "#F95A1E", cursor:"pointer" }} src={instagram} alt="icon" />
                    <img className='mx-1' style={{ fill: "#F95A1E", cursor:"pointer" }} src={linkedIn} alt="icon" />
                    <img className='mx-1' style={{ fill: "#F95A1E", cursor:"pointer" }} src={twitter} alt="icon" />
                </div>
            </div>
            <div className='w-50'>
                <form className='w-100 d-flex justify-content-center align-items-center flex-column'>
                    <input style={{ border: "2px solid #E5E5E5" }} className='w-50 rounded-5 px-3 py-2 mb-3' type="text" name="name" id="name" placeholder='Name' />
                    <input style={{ border: "2px solid #E5E5E5" }} className='w-50 rounded-5 px-3 py-2 mb-3' type="text" name="email" id="email" placeholder='Email' />
                    <textarea style={{ border: "2px solid #E5E5E5", resize: "none" }} className='w-50 rounded-5 px-3 py-2 mb-3' name="comment" id="comment" rows="6" placeholder='Type your message here..' ></textarea>
                    <div className='w-50 d-flex justify-content-end align-items-center'>
                        <button className='px-4 py-2 border-0 rounded-pill text-light' style={{
                            background: "linear-gradient(0deg, rgba(249,90,30,1) 0%, rgba(255,149,32,1) 100%)"
                        }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
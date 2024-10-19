import React from "react";
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from '../../img/icon1.svg';
import Icon2 from '../../img/icon2.svg';
import Icon3 from '../../img/icon3.svg';

export default function ContactUs() {
    return (
        <div className="py-5" style={{backgroundColor:"#F0F0F0"}}>
            <h1 className="fw-bold text-center mb-4">Contact us</h1>
            <div className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
                <div className="w-25 d-flex justify-content-center flex-column">
                    <img className="m-auto" style={{height:"50%"}} src={Icon1} alt="icon" />
                    <h5 className="fw-bold text-center" style={{ color: "#F95A1E" }}>Contacts</h5>
                    <p className="text-center">hello@pinakeedigitech.com <br />+91-86608 87277</p>
                </div>
                <div className="w-25 d-flex justify-content-center flex-column">
                    <img className="m-auto" style={{height:"50%"}} src={Icon2} alt="icon" />
                    <h5 className="fw-bold text-center" style={{ color: "#F95A1E" }}>Location</h5>
                    <p className="text-center">Bengaluru,India</p>
                </div>
                <div className="w-25 d-flex justify-content-center flex-column">
                    <img className="m-auto" style={{height:"50%"}} src={Icon3} alt="icon" />
                    <h5 className="fw-bold text-center" style={{ color: "#F95A1E" }}>We are open</h5>
                    <p className="text-center">24&#215;7</p>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponetOne from '../../img/c1.svg'
import ComponetTwo from '../../img/c2.svg'
import ComponetThree from '../../img/c1.svg'

export default function Services() {
    return (
        <div className='px-5' style={{ backgroundColor: "#252525" }}>
            <h1 className="text-center fw-bold pt-5" style={{ color: "#F95A1E" }}>Services</h1>
            <div className="d-flex justify-content-around align-item-center flex-row flex-wrap">
                <div className="d-flex justify-content-center align-items-center flex-column p-4 m-4">
                    <img className="mb-3" style={{ width: "15%" }} src={ComponetOne} alt="icon" />
                    <h2 className="text-light mb-3">CORPORAT SOLUTIONS</h2>
                    <p className="text-light text-center">Need specific software for your company? We are ready to develop it!</p>
                    <a className="text-decoration-none" style={{ color: "#F95A1E" }} href="/">Learn more &#10095;</a>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column p-4 m-4">
                    <img className="mb-3" style={{ width: "15%" }} src={ComponetTwo} alt="icon" />
                    <h2 className="text-light mb-3">SOFTWARE SOLUTIONS</h2>
                    <p className="text-light text-center">Over experts provide custom products of any complexity for our clinets.</p>
                    <a className="text-decoration-none" style={{ color: "#F95A1E" }} href="/">Learn more &#10095;</a>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column p-4 m-4">
                    <img className="mb-3" style={{ width: "15%" }} src={ComponetThree} alt="icon" />
                    <h2 className="text-light mb-3">CLOUD DEVELOPMENT</h2>
                    <p className="text-light text-center">We can also offer you reliable cloud development sloutions.</p>
                    <a className="text-decoration-none" style={{ color: "#F95A1E" }} href="/">Learn more &#10095;</a>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroungImg from '../../img/homebackgroundImg.png';
import HomeComponentImg from '../../img/homeComponentImg.png';


export default function Home() {
    return (
        <div className='d-flex justify-content-end  flex-column pt-3' style={{ 
            height: "100%",
            backgroundImage: `url(${BackgroungImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
             }}>
            <div className='d-flex justify-content-around flex-row ' style={{ height: "100%" }}>
                <div className='d-flex justify-content-center flex-column'>
                    <h1 className='fw-bold m-0' style={{ color: '#F95A1E' }}>EVERTYTHING YOU DESIRE,</h1>
                    <h1 className='fw-bold mb-4'>dersires you back more</h1>
                    <p className='mb-4'>If you knew you are attract want, what would you want?<br />Let us help you shape your desires.</p>
                    <div>
                        <button className='px-4 py-2 border-0 rounded-pill text-light' style={{ background: "linear-gradient(0deg, rgba(249,90,30,1) 0%, rgba(255,149,32,1) 100%)" }}>Get Start</button>
                    </div>
                    <div className='d-flex justify-content-between  flex-row mt-5'>
                        <div>
                            <h1>2</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <h1>3</h1>
                            <p>In House Products</p>
                        </div>
                        <div>
                            <h1>4</h1>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
                <div className='d-none d-sm-flex justify-content-center align-items-start ' style={{ height: "fit-content" }}>
                    <img className='w-75 pt-5' src={HomeComponentImg} alt="img" />
                </div>
            </div>
        </div>
    )
}
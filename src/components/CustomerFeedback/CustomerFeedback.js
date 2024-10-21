import React from 'react';
import './CustomerFeedback.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerImg from '../../img/customerImg.png';
import CustomerIcon from '../../img/customerIcon.svg';

export default function CustomerFeedback() {

    const customerFeedback = [
        {
            name: "Ashok Panikar",
            company: "Metaculture",
            comment: "Pinakee team worked with me for many months to create an e-commerce enabled website for my company. The team has always been unfailingly polite and cooperative, despite my technological ignorance of what this might entail. Team has also been a good problem solvers, coming up with clever ideas to cut costs. I would heartily recommend him to entrepreneurs like me."
        },
        {
            name: "Senith Mathew",
            company: "AccountingTutor",
            comment: "Pinakee powered us with a competent team to develop products for Accounting services. The team has been delivering results within budget and time, which is amazing."
        },
        {
            name: "Venu",
            company: "ICSF",
            comment: "Pinakee is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success."
        }
    ]
    return (
        <div className='CustomerFeedback py-5 py-sm-0 d-flex justify-content-center align-items-center flex-column' style={{backgroundColor:"#F0F0F0"}}>
            <h1 className='fw-bold text-center mb-5' style={{ color: "#F95A1E" }}>Let our customers speak for us!</h1>
            <div className='d-flex justify-content-around align-items-center align-items-sm-start flex-column flex-sm-row pt-4'>
                {customerFeedback.map((data) =>
                    <div className='p-4 mx-sm-0 mx-2 mb-5 mb-sm-0 comments-card rounded-3 position-relative' style={{ 
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                        height:"fit-content" }} key={data.name}>
                        <img className='position-absolute' style={{ left: "10%", top: "-5%" }} src={CustomerIcon} alt="icon" />
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className='d-flex justify-content-start align-items-center flex-row'>
                                <img style={{ width: "20%" }} src={CustomerImg} alt="img" />
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <h5 className='fw-bold m-0'>{data.name}</h5>
                                    <p className='m-0'>{data.company}</p>
                                </div>
                            </div>
                            <p>{data.comment}</p>
                            <hr style={{ color: "#F95A1E" }} />
                        </div>
                    </div>)}
            </div>
        </div>
    )
}
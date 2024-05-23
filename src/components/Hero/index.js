import React, { useState } from 'react';
import './index.css';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='hero-container'>
            <div className='hero-section-first-container'>
                <h1 className='hero-section-heading'>Become ACCA in 18 months</h1>
                <p className='hero-section-description'>ACCA (Association of Chartered Certified Accountants) is a globally recognized professional accounting body offering qualifications that equip individuals with financial expertise and business acumen, opening doors to diverse career opportunities in finance and management.</p>
                <div>
                    <button type="button" className='brochure-btn'>Download Brochure</button>
                    <button type="button" className='read-more-btn'>Read more</button>
                </div>
            </div>
            <div className='hero-section-second-container'>
                <h1 className='hero-section-second-heading'>Aspiring to be an ACCA? Get in touch with us!</h1>
                <input type="text" placeholder='Enter your Name' className='get-in-touch-input' />
                <input type="mail" placeholder='Enter your Email ID' className='get-in-touch-input' />
                <input type="text" placeholder='Educational Qualifications' className='get-in-touch-input' />
                <input type="number" placeholder='Enter your Mobile Number' className='get-in-touch-input' />
                <button type="button" className='request-call-back-btn' onClick={openModal}>Request Call Back</button>
            </div>

            {isModalOpen && (
                <>
                    <div className='modal-overlay show' onClick={closeModal}></div>
                    <div className='modal show'>
                        <h2>Success</h2>
                        <p>Your request has been submitted. We will get back to you soon!</p>
                        <button className='close-btn' onClick={closeModal}>Close</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hero;

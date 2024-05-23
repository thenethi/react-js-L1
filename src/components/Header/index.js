import React, { useState } from 'react';
import './index.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='header-container'>
            <h1 className='nav-text'>ACCA</h1>
            <button className='hamburger-btn' onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </button>
            <div className={`nav-items-container ${menuOpen ? 'open' : ''}`}>
                <h1 className='nav-text'>Home</h1>
                <h1 className='nav-text'>Why Choose Us</h1>
                <h1 className='nav-text'>Eligibility</h1>
                <h1 className='nav-text'>Placement</h1>
                <button type="button" className='contact-us-btn'>Contact us</button>
            </div>
        </nav>
    );
}

export default Header;

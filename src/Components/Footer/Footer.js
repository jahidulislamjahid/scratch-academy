import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>section 1</h1>
                    </div>
                    <div className="col">
                        <h1>section 2</h1>
                    </div>
                    <div className="col">
                        <h1>section 3</h1>
                    </div>
                </div>
                <p>&copy;{new Date().getFullYear()}All Right Reserved </p>
            </div>
        </div>
    );
};

export default Footer;
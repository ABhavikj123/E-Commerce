import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-dark text-white py-3 mt-auto'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>About Us</h5>
                        <p>
                            We are a leading e-commerce platform providing top quality products at unbeatable prices.
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
                            <li><Link to="/shipping" className="text-white text-decoration-none">Shipping & Returns</Link></li>
                            <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li><Link to="#" className="text-white me-4 text-decoration-none"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="#" className="text-white me-4 text-decoration-none"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="#" className="text-white me-4 text-decoration-none"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="#" className="text-white text-decoration-none"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Your E-Commerce Website. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

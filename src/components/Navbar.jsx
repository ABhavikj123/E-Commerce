import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Profile from './Profile'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">e-Bazaar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addtocard"><i class="fa-solid fa-cart-shopping"></i></Link>
                            </li>
                        </ul>
                        <SearchBar />
                        <button 
        className="btn btn-primary" 
        onClick={toggleSidebar}
        style={{ marginLeft: '10px' }}
      >
        <i className="fa-solid fa-user"></i>
      </button>
      <Profile isOpen={isOpen} toggleSidebar={toggleSidebar} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
           <div className="logo-grid">
                <h1 className="item-1">#</h1>
                <h2 className="item-2">SiteName</h2>
           </div>
           <div className="options-grid">
                {/* <img src="images/avatar.png" className="item-1" /> */}
                <i className="fas fa-user item-1"></i>
                <a href="#" className="item-2">Login</a>
                {/* <a href="#" className="item-3">Register</a> */}
           </div> 
        </div>
    );
}

export default Navbar;
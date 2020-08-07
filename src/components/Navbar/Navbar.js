import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
           <div className="logo-grid">
                <i class="item-1 fas fa-tasks"></i>
                <h2 className="item-2">MyTasks</h2>
           </div>
           <a href="#">Login</a>
        </div>
    );
}

export default Navbar;
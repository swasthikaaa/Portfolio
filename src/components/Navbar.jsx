import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo">Swasthika</h1>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

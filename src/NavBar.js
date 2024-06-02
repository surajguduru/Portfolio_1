import React, { useState, useEffect, useRef } from 'react';
import "./NavBar.css";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className="header">
                <div onClick={toggleMenu}><i className="zmdi zmdi-menu menu"></i></div>
                <h2>Suraj Guduru</h2>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#interests">Interests</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div ref={dropdownRef} className="more-vert" onClick={toggleDropdown}><i className="zmdi zmdi-more-vert vert"></i></div>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li><i className="zmdi zmdi-download font-blue"></i><a href="your-resume-url" download>Download Resume</a></li>
                            <li><i className="zmdi zmdi-email font-green"></i><a href="mailto:your-email@example.com">Drop me an Email</a></li>
                            <li><i className="zmdi zmdi-comment-more font-yellow"></i><a href="https://telegram.me/your-telegram-username" target="_blank" rel="noopener noreferrer">Telegram me</a></li>
                        </ul>
                    </div>
                )}
            </header>
            <div ref={menuRef} className={`side-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                <div onClick={toggleMenu} className="side-menu-close"><i className="zmdi zmdi-close"></i></div>
                <img src="https://avatars.githubusercontent.com/u/140954256?s=400&v=4" alt="Profile-Photo" />
                <h3>Suraj Guduru</h3>
                <div>
                    <a href="#" className="nav-social-media-logo"><i className="zmdi zmdi-facebook font-white"></i></a>
                    <a href="#" className="nav-social-media-logo"><i className="zmdi zmdi-github font-white"></i></a>
                    <a href="#" className="nav-social-media-logo"><i className="zmdi zmdi-twitter font-white"></i></a>
                    <a href="#" className="nav-social-media-logo"><i className="zmdi zmdi-instagram font-white"></i></a>
                    <a href="#" className="nav-social-media-logo"><i className="zmdi zmdi-youtube-play font-white"></i></a>
                </div>
                <ul>
                    <li><i className="zmdi zmdi-border-color"></i><a href="#about">About</a></li>
                    <li><i className="zmdi zmdi-case"></i><a href="#portfolio">Portfolio</a></li>
                    <li><i className="zmdi zmdi-coffee"></i><a href="#interests">Interests</a></li>
                    <li><i className="zmdi zmdi-code"></i><a href="#projects">Projects</a></li>
                    <li><i className="zmdi zmdi-email"></i><a href="#contact">Contact</a></li>
                </ul>
                <p>Suraj Guduru © 2024</p>
            </div>
        </div>
    );
}

export default NavBar;

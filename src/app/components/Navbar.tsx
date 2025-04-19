"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no saved preference, use system preference
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <Image src="/images/userAsset/NavLogo.jpg" alt="Logo" width={80} height={80} className="logo" />
        <div className="logo-text">akil Ahmed</div>
      </div>
      
      <div className="nav-items">
        <div><Link href="#projects">Projects</Link></div>
        <div><Link href="#skills">Skills</Link></div>
        <div><Link href="#contactme">Contact Me</Link></div>
        <div className="theme-toggle">
          <button 
            onClick={() => toggleTheme('light')} 
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            title="Light Mode"
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
          <button 
            onClick={() => toggleTheme('dark')} 
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            title="Dark Mode"
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button 
            onClick={() => toggleTheme('night')} 
            className={`theme-btn ${theme === 'night' ? 'active' : ''}`}
            title="Night Mode"
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

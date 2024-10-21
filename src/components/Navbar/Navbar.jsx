import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../Navbar/Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    const menu = document.querySelector('.show-menu');
    const toggleButton = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(event.target) && !toggleButton.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside); // เพิ่มตัวจัดการเหตุการณ์คลิก
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside); // ลบตัวจัดการเหตุการณ์คลิก
    };
  }, []);

  return (
    <nav className={`navbar d-flex justify-content-between align-items-center px-5 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-brand" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
      <div className={`show-menu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/home" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/my-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

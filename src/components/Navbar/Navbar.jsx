import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../Navbar/Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY; // ตรวจสอบตำแหน่งการเลื่อน
    if (offset > 100) { 
      setIsScrolled(true); // เปลี่ยนค่า isScrolled เป็น true
    } else {
      setIsScrolled(false); // เปลี่ยนค่า isScrolled เป็น false
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // เพิ่ม event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // ลบ event listener เมื่อ component ถูกทำลาย
    };
  }, []);

  return (
    <nav className={`navbar d-flex justify-content-between align-items-center px-5 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-brand" />
      </div>
      <div className="d-flex gap-5">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

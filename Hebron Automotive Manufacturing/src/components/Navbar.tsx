import { useState, useEffect } from 'react';
import InternshipModal from './InternshipModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <nav id="navbar">
  <div className="nav-inner">
    <a href="#hero" className="nav-logo">
      <div className="nav-logo-icon">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" stroke="#009edb" strokeWidth="8" fill="white"/>
          <g transform="rotate(-15 50 50)">
            <ellipse cx="50" cy="50" rx="32" ry="14" fill="none" stroke="#1e3a8a" strokeWidth="4.5"/>
            <rect x="15" y="38" width="70" height="24" fill="white"/>
            <text x="50" y="56" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20" fill="#1e3a8a" textAnchor="middle" letterSpacing="0.5">HEBRON</text>
          </g>
        </svg>
      </div>
      <div>
        <div className="nav-logo-text">HEBRON AUTOMOTIVE</div>
        <div className="nav-logo-sub">IATF 16949:2016 Certified</div>
      </div>
    </a>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#journey">Journey</a></li>
      <li><a href="#facilities">Facilities</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#quality">Quality</a></li>
      <li><a href="#customers">Customers</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); setIsInternshipModalOpen(true); }}>Internship</a></li>
      <li><a href="#contact" className="nav-cta">Contact Us →</a></li>
    </ul>
    <div className="hamburger" id="hamburger" onClick={() => setIsOpen(!isOpen)}>
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>

      </nav>
      <div className={"mobile-menu " + (isOpen ? "open" : "")} id="mobileMenu">
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#journey" onClick={() => setIsOpen(false)}>Journey</a>
        <a href="#facilities" onClick={() => setIsOpen(false)}>Facilities</a>
        <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
        <a href="#quality" onClick={() => setIsOpen(false)}>Quality</a>
        <a href="#customers" onClick={() => setIsOpen(false)}>Customers</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(false); setIsInternshipModalOpen(true); }}>Internship</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
      </div>
      <InternshipModal isOpen={isInternshipModalOpen} onClose={() => setIsInternshipModalOpen(false)} />
    </>
  );
}
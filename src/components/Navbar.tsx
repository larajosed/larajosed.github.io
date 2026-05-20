import { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-dot" />
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
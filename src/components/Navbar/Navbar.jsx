import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Infrastructure', href: '#infra' },
  { label: 'Quality & Safety', href: '#quality' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a className="navbar-logo" href="#home" onClick={() => handleNavClick('#home')} aria-label="DHI Home">
            <img src="/images/company-logo-full.png" alt="Delevering Heights INFRA Logo" className="navbar-logo-full" />
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.replace('#', '') ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <ul
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="list"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            style={{ background: 'var(--color-accent-red)', color: '#fff', borderRadius: '999px', padding: '14px 36px' }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
}

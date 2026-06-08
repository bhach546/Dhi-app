import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'OFC Backbone Infrastructure',
  'FTTH & Last Mile',
  'HDD & Underground Utility',
  'Telecom O&M Services',
  'Smart City Networks',
  'Enterprise Connectivity',
];

const socials = [
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaFacebook />, href: '#', label: 'Facebook' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="DHI Logo" />
            <div className="footer-logo-text">
              <h2>Delevering Heights <span>INFRA</span></h2>
            </div>
          </div>
          <p>
            DHI is India's trusted telecom infrastructure partner specializing in
            OFC backbone, FTTH, HDD, smart city networks and enterprise connectivity.
            Connecting communities, building networks.
          </p>
          <div className="footer-social">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-link"
                aria-label={s.label}
                rel="noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
            <a href="mailto:info@dh-infra.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              <FaEnvelope style={{ color: 'var(--color-accent-red)' }} /> info@dhiinfra.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href.replace('#', '')); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {services.map((svc) => (
              <li key={svc}>{svc}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {year} <span>Delevering Heights INFRA (DHI)</span>. All Rights Reserved.
        </p>
        <p>
          Connecting Communities, Building Networks
        </p>
      </div>
    </footer>
  );
}

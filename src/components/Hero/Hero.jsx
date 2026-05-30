import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          India's Premier Telecom Infrastructure Partner
        </div>

        <h2>
          Building India's <span className="highlight">Next Generation</span> Telecom Networks
        </h2>

        <p>
          DHI delivers high-quality telecom infrastructure solutions including FTTH,
          OFC Backbone, HDD, telecom maintenance, enterprise connectivity,
          smart city networks and underground utility deployments.
        </p>

        <div className="hero-buttons">
          <button
            id="hero-explore-btn"
            className="hero-btn-primary"
            onClick={() => scrollToSection('services')}
          >
            Explore Services
          </button>
          <button
            id="hero-contact-btn"
            className="hero-btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

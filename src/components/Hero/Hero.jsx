import { useState } from 'react';
import './Hero.css';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const dashboardSections = [
  {
    id: 'dash-whoweare',
    image: '/images/home/Whoweare.png',
    title: 'Who We Are',
    notes: 'DH-INFRA is a trusted telecom infrastructure company delivering end-to-end fiber network solutions, including OFC backbone deployment, FTTH rollouts, HDD crossings, last-mile connectivity, and fiber operations support.',
    details: null,
  },
  {
    id: 'dash-whychoose',
    image: '/images/home/Why Choose DHINFRA.png',
    title: 'Why DH-INFRA',
    notes: 'DH-INFRA delivers dependable telecom infrastructure solutions backed by experienced professionals, advanced equipment, quality-driven processes, and a strong commitment to project success.',
    details: [
      'End-to-End Telecom Infrastructure Expertise',
      'Advanced Equipment & Resources',
      'Skilled & Experienced Workforce',
      'Quality & Safety Driven Execution',
      'On-Time Project Delivery',
      'Reliable Operational Support',
      'Customer-Centric Approach',
      'Long-Term Partnership Commitment',
    ],
    detailsTitle: 'Why Choose Us',
  },
  {
    id: 'dash-expertise',
    image: '/images/home/Coreexpertise.png',
    title: 'Our Core Expertise',
    notes: 'DH-INFRA brings extensive expertise across telecom infrastructure planning, deployment, testing, and maintenance, delivering reliable connectivity solutions that support network expansion and long-term operational performance.',
    tags: [
      'OFC Backbone', 'FTTH Rollouts', 'FTTB Deployments',
      'HDD Crossings', 'Last Mile Connectivity', 'Fiber O&M',
      'Pole Installation', 'Route Planning', 'Network Maintenance',
      'Fiber Splicing', 'OTDR Testing', 'Network Commissioning',
    ],
    detailsTitle: 'Our Expertise',
  },
  {
    id: 'dash-commitment',
    image: '/images/home/ourcommitment.png',
    title: 'Client Commitment',
    notes: 'DH-INFRA prioritizes client success through quality-driven execution, responsive support, reliable delivery, and long-term partnership commitment.',
    details: [
      'Timely Project Execution',
      'Reliable Network Delivery',
      'End-to-End Project Support',
      'Transparent Communication',
      'Scalable Telecom Infrastructure',
      'Quality & Safety Compliance',
      'Long-Term Partnership Focus',
    ],
    detailsTitle: 'Our Promise',
  },
  {
    id: 'dash-segments',
    image: '/images/home/Industrysegmentsweserve.png',
    title: 'Industry Segments',
    notes: 'DH-INFRA supports telecom operators, broadband providers, enterprises, government organizations, and infrastructure projects with dependable telecom connectivity solutions.',
    segments: [
      { emoji: '📡', label: 'Telecom Operators' },
      { emoji: '🌐', label: 'ISPs & Broadband Providers' },
      { emoji: '🏢', label: 'Enterprises & Corporate Campuses' },
      { emoji: '🏙', label: 'Smart City Infrastructure Projects' },
      { emoji: '🏘', label: 'Residential Communities' },
      { emoji: '🏭', label: 'Industrial Facilities' },
      { emoji: '🛣', label: 'Highway & Utility Corridors' },
      { emoji: '🏛', label: 'Government Organizations' },
    ],
    detailsTitle: 'Industries We Serve',
  },
  {
    id: 'dash-lifecycle',
    image: '/images/home/Projectlifecycle.png',
    title: 'Project Lifecycle',
    notes: 'DH-INFRA offers end-to-end telecom project execution capabilities, guiding projects from survey and planning through deployment, commissioning, and long-term operational support.',
    lifecycle: [
      { step: '01', label: 'Route Survey & Feasibility' },
      { step: '02', label: 'Network Planning & Design' },
      { step: '03', label: 'Material Mobilization' },
      { step: '04', label: 'Infrastructure Deployment' },
      { step: '05', label: 'Testing & Commissioning' },
      { step: '06', label: 'Operations & Maintenance' },
    ],
    detailsTitle: 'How We Execute',
  },
];

export default function Hero() {
  const [activeModal, setActiveModal] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (section) => {
    setActiveModal(section);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="hero" id="home" aria-label="Hero section">
      <div className="hero-content">

        {/* LEFT COLUMN: Original Hero Content */}
        <div className="hero-content-left">
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

        {/* RIGHT COLUMN: Dashboard Bento Grid */}
        <div className="hero-content-right">
          <div className="hero-dashboard-grid">
            {dashboardSections.map((section, idx) => (
              <button 
                key={section.id} 
                className={`hero-dash-card reveal reveal-delay-${(idx % 3) + 1}`}
                onClick={() => openModal(section)}
              >
                <div className="hero-dash-card-content">
                  <h4>{section.title}</h4>
                  <p className="line-clamp-3">{section.notes}</p>
                  <div className="hero-dash-card-action">
                    Explore <FaArrowRight />
                  </div>
                </div>
                <div className="hero-dash-card-thumb">
                  {section.image && <img src={section.image} alt="" loading="lazy" />}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="hero-modal-overlay" onClick={closeModal}>
          <div className="hero-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="hero-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="hero-modal-header">
              {activeModal.image && (
                <div className="hero-modal-image">
                  <img src={activeModal.image} alt={activeModal.title} />
                </div>
              )}
              <div className="hero-modal-title-area">
                <h3>{activeModal.title}</h3>
                <p>{activeModal.notes}</p>
              </div>
            </div>

            <div className="hero-modal-body">
              {activeModal.detailsTitle && <h4 className="hero-modal-subtitle">{activeModal.detailsTitle}</h4>}

              {activeModal.details && (
                <ul className="hero-modal-list">
                  {activeModal.details.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>
              )}

              {activeModal.tags && (
                <div className="hero-modal-tags">
                  {activeModal.tags.map((tag, i) => (
                    <span className="hero-modal-tag" key={i}>{tag}</span>
                  ))}
                </div>
              )}

              {activeModal.segments && (
                <div className="hero-modal-segments">
                  {activeModal.segments.map((seg, i) => (
                    <div className="hero-modal-segment-item" key={i}>
                      <span className="hero-modal-segment-emoji">{seg.emoji}</span>
                      <span>{seg.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeModal.lifecycle && (
                <div className="hero-modal-lifecycle">
                  {activeModal.lifecycle.map((step, i) => (
                    <div className="hero-modal-lifecycle-step" key={i}>
                      <span className="hero-modal-step-num">{step.step}</span>
                      <span className="hero-modal-step-label">{step.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './About.css';

const sections = [
  {
    id: 'about-overview',
    image: '/images/aboutus/Aboutus_Mainpg_.png',
    title: 'Company Overview',
    notes: 'DH-INFRA is a telecom infrastructure solutions provider specializing in OFC backbone deployment, FTTH & FTTB rollouts, HDD execution, last-mile connectivity, fiber operations, and network maintenance services. We support telecom operators, ISPs, enterprises, government organizations, and infrastructure projects with reliable and scalable connectivity solutions.',
    detailsTitle: 'Key Highlights',
    details: [
      'OFC Backbone Infrastructure',
      'FTTH & FTTB Deployment',
      'HDD & Underground Utility Solutions',
      'Last Mile Connectivity',
      'Fiber Operations & Maintenance',
      'Telecom Project Execution',
    ],
  },
  {
    id: 'about-leadership',
    image: '/images/aboutus/1_aboutus.png',
    title: 'Leadership Vision',
    notes: 'DH-INFRA is committed to building reliable, scalable, and future-ready telecom infrastructure that supports digital transformation, connectivity expansion, and sustainable growth across communities and industries.',
    detailsTitle: 'Vision Focus Areas',
    details: [
      'Customer Success',
      'Quality Excellence',
      'Safe Operations',
      'Technology Adoption',
      'Long-Term Partnerships',
      'Sustainable Growth',
    ],
  },
  {
    id: 'about-expertise',
    image: '/images/aboutus/2_aboutus.png',
    title: 'Telecom Expertise',
    notes: 'DH-INFRA combines skilled manpower, advanced equipment, and proven execution methodologies to successfully deliver telecom infrastructure projects across backbone, access, and last-mile networks.',
    detailsTitle: 'Our Areas of Expertise',
    details: [
      'OFC Backbone Infrastructure Deployment',
      'FTTH & FTTB Network Rollouts',
      'HDD & Underground Utility Crossings',
      'Last Mile Connectivity Solutions',
      'Route Survey & Feasibility Studies',
      'Telecom Network Planning & Design',
      'OFC Blowing & Cable Installation',
      'Fiber Splicing & Jointing Services',
      'OTDR Testing & Network Certification',
      'Network Commissioning & Activation',
      'Fiber Operations & Maintenance',
      'Network Restoration & Fault Management',
    ],
  },
  {
    id: 'about-mission',
    image: '/images/aboutus/3_aboutus.png',
    title: 'Mission & Core Values',
    notes: 'To deliver reliable telecom infrastructure solutions through quality execution, operational excellence, safety, and customer-focused service.',
    detailsTitle: 'Core Values',
    details: [
      'Integrity & Transparency',
      'Commitment to Quality',
      'Safety First',
      'Customer Focus',
      'Teamwork & Accountability',
      'Continuous Improvement',
    ],
  },
  {
    id: 'about-why',
    image: '/images/aboutus/4_aboutus.png',
    title: 'Why Choose DH-INFRA',
    notes: 'DH-INFRA delivers dependable telecom infrastructure solutions backed by experienced professionals, advanced equipment, quality-driven processes, and a strong commitment to project success.',
    detailsTitle: 'Strengths',
    details: [
      'End-to-End Project Execution',
      'Skilled Telecom Workforce',
      'Advanced Equipment Fleet',
      'Quality & Safety Compliance',
      'Timely Project Delivery',
      'Reliable Operational Support',
    ],
  },
  {
    id: 'about-glance',
    image: '/images/aboutus/5_aboutus.png',
    title: 'DH-INFRA at a Glance',
    notes: 'DH-INFRA combines technical expertise, skilled manpower, advanced equipment, and quality-driven execution to deliver end-to-end telecom infrastructure solutions across backbone, access, and last-mile networks.',
    detailsTitle: 'Highlights',
    highlights: [
      { emoji: '📡', label: 'Telecom Infrastructure Specialist' },
      { emoji: '🏠', label: 'FTTH & FTTB Deployment' },
      { emoji: '🛣', label: 'OFC Backbone Networks' },
      { emoji: '🚜', label: 'HDD Crossings' },
      { emoji: '🌐', label: 'Last Mile Connectivity Solutions' },
      { emoji: '🔧', label: 'Fiber Operations & Maintenance' },
      { emoji: '📍', label: 'Multi-Location Project Delivery' },
      { emoji: '👷', label: 'Skilled Workforce' },
      { emoji: '⚙', label: 'Advanced Equipment Fleet' },
      { emoji: '📋', label: 'Route Survey & Network Planning' },
      { emoji: '🔬', label: 'Fiber Testing & Commissioning' },
      { emoji: '🛠', label: 'Network Restoration Services' },
    ],
  },
];

export default function About() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="about" id="about" aria-label="About DH-INFRA section">
      <div className="section-title">
        <span className="label">Who We Are</span>
        <h2>About <span>DH-INFRA</span></h2>
        <p>Professional telecom infrastructure company driven by innovation and connectivity.</p>
      </div>

      <div className="about-grid">
        {sections.map((card, i) => (
          <div
            className={`about-card reveal reveal-delay-${(i % 3) + 1}`}
            key={card.id}
            id={card.id}
          >
            <div className="about-card-image">
              <img src={card.image} alt={card.title} loading="lazy" />
            </div>
            <div className="about-card-body">
              <h3>{card.title}</h3>
              <p>{card.notes}</p>

              <div className={`about-details${expanded[card.id] ? ' expanded' : ''}`} aria-hidden={!expanded[card.id]}>
                <h4>{card.detailsTitle}</h4>

                {card.details && (
                  <ul>
                    {card.details.map((item, j) => <li key={j}>✔ {item}</li>)}
                  </ul>
                )}

                {card.highlights && (
                  <div className="about-highlights">
                    {card.highlights.map((h, j) => (
                      <div className="highlight-item" key={j}>
                        <span className="highlight-emoji">{h.emoji}</span>
                        <span>{h.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                id={`toggle-${card.id}`}
                className={`about-toggle-btn${expanded[card.id] ? ' active' : ''}`}
                onClick={() => toggle(card.id)}
                aria-expanded={!!expanded[card.id]}
              >
                {expanded[card.id] ? 'Hide Details' : 'View Details'}
                <FaChevronDown />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

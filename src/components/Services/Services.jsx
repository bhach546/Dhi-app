import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    id: 'service-ofc',
    tag: 'Core Infrastructure',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop',
    alt: 'OFC Backbone Infrastructure',
    title: 'OFC Backbone Infrastructure',
    description:
      'High-capacity optical fiber backbone deployment for telecom operators and enterprise networks.',
    details: [
      'End-to-end OFC backbone planning and route survey',
      'Trenching, blowing, splicing and OTDR testing',
      'Commissioning and 24/7 restoration support',
    ],
  },
  {
    id: 'service-ftth',
    tag: 'Last Mile',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    alt: 'FTTH Last Mile Connectivity',
    title: 'FTTH & Last Mile Connectivity',
    description:
      'Fiber-to-the-home deployment solutions for broadband and smart connectivity.',
    details: [
      'GPON network planning and deployment',
      'Customer activation and indoor cabling',
      'SLA-based broadband rollout management',
    ],
  },
  {
    id: 'service-hdd',
    tag: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    alt: 'HDD Underground Utility Solutions',
    title: 'HDD & Underground Utility Solutions',
    description:
      'Safe underground cable crossings and trenchless infrastructure installations.',
    details: [
      'HDD crossings for highways, railways and rivers',
      'Utility corridor trenchless installations',
      'Advanced machines and experienced operators',
    ],
  },
  {
    id: 'service-om',
    tag: 'O&M',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Telecom Operations and Maintenance',
    title: 'Telecom O&M Services',
    description:
      'Reliable telecom operations and maintenance support to keep networks running 24/7.',
    details: [
      'Preventive and corrective maintenance',
      'Fault restoration and network uptime management',
      'Network testing, reporting and documentation',
    ],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="services" id="services" aria-label="Services section">
      <div className="section-title">
        <span className="label">What We Do</span>
        <h2>Our <span>Services</span></h2>
        <p>Comprehensive telecom infrastructure solutions delivered with precision and quality.</p>
      </div>

      <div className="services-grid">
        {services.map((svc, i) => (
          <article className={`service-card reveal reveal-delay-${i + 1}`} key={svc.id} id={svc.id}>
            <div className="service-card-image">
              <img src={svc.image} alt={svc.alt} loading="lazy" />
              <span className="tag">{svc.tag}</span>
            </div>
            <div className="service-card-body">
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>

              <div className={`service-details${expanded[svc.id] ? ' expanded' : ''}`} aria-hidden={!expanded[svc.id]}>
                <ul>
                  {svc.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>

              <button
                id={`toggle-${svc.id}`}
                className={`toggle-btn${expanded[svc.id] ? ' active' : ''}`}
                onClick={() => toggle(svc.id)}
                aria-expanded={!!expanded[svc.id]}
                aria-controls={`details-${svc.id}`}
              >
                {expanded[svc.id] ? 'Hide Details' : 'View Details'}
                <FaChevronDown />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

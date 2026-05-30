import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './QualitySafety.css';

const items = [
  {
    id: 'quality-qa',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    alt: 'QA/QC Process',
    title: 'QA/QC Process',
    desc: 'Strict quality control process for telecom deployment projects ensuring highest standards.',
    details: 'Regular site inspections, OTDR testing procedures, quality documentation and punch list closure. ISO-compliant processes for every project phase.',
  },
  {
    id: 'quality-ehs',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop',
    alt: 'EHS Compliance',
    title: 'EHS Compliance',
    desc: 'Safety-first work culture with complete environment, health and safety regulatory compliance.',
    details: 'PPE standards enforced on all sites, daily safety toolbox talks, risk assessments, incident reporting and workforce safety training programs.',
  },
  {
    id: 'quality-cert',
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Certifications and Standards',
    title: 'Standards & Certifications',
    desc: 'Committed to telecom industry standards and regulatory compliance in all deployments.',
    details: 'Adherence to TEC/DOT norms, CPRI fiber standards and client-specific SLA requirements across all project deliveries.',
  },
];

export default function QualitySafety() {
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="quality" id="quality" aria-label="Quality and Safety section">
      <div className="section-title light">
        <span className="label">Our Commitment</span>
        <h2>Quality & <span style={{ color: 'var(--color-accent-red)' }}>Safety</span></h2>
        <p>Committed to excellence, safety and compliance in every deployment.</p>
      </div>

      <div className="quality-grid">
        {items.map((item, i) => (
          <article
            className={`quality-card reveal reveal-delay-${i + 1}`}
            key={item.id}
            id={item.id}
          >
            <div className="quality-card-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="quality-card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className={`quality-details${expanded[item.id] ? ' expanded' : ''}`} aria-hidden={!expanded[item.id]}>
                {item.details}
              </div>

              <button
                id={`toggle-${item.id}`}
                className={`quality-btn${expanded[item.id] ? ' active' : ''}`}
                onClick={() => toggle(item.id)}
                aria-expanded={!!expanded[item.id]}
              >
                {expanded[item.id] ? 'Hide Details' : 'View Details'}
                <FaChevronDown />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

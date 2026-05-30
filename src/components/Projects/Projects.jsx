import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 'proj-highway',
    tag: 'National Highway',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    alt: 'Highway OFC Deployment',
    title: 'Highway OFC Deployment',
    desc: 'National highway optical fiber backbone implementation with protected underground infrastructure.',
    details: 'Large-scale OFC rollout across NH corridors with HDD crossings, restoration and 24/7 maintenance support.',
  },
  {
    id: 'proj-ftth',
    tag: 'Residential',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    alt: 'FTTH Rollout Project',
    title: 'FTTH Rollout Programs',
    desc: 'Rapid fiber-to-home deployment projects for residential and enterprise broadband.',
    details: 'Last-mile fiber rollout with customer integration, GPON commissioning and SLA-based network activation.',
  },
  {
    id: 'proj-network',
    tag: 'Network Expansion',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    alt: 'Network Expansion Project',
    title: 'Network Expansion',
    desc: 'Expanding telecom reach through strategic infrastructure deployment across urban and rural India.',
    details: 'Metro, semi-urban and rural network expansion projects executed on time with advanced telecom deployment standards.',
  },
  {
    id: 'proj-smartcity',
    tag: 'Smart City',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    alt: 'Smart City Infrastructure',
    title: 'Smart City Infrastructure',
    desc: 'Integrated city-wide digital infrastructure for smart governance and connectivity.',
    details: 'Underground ducting, fiber layout and network commissioning for smart city surveillance, IoT and broadband needs.',
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="projects" id="projects" aria-label="Projects section">
      <div className="section-title light">
        <span className="label">Our Work</span>
        <h2>Key <span style={{ color: 'var(--color-accent-red)' }}>Projects</span></h2>
        <p>Delivering telecom infrastructure excellence across India.</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <article
            className={`project-card reveal reveal-delay-${(i % 4) + 1}`}
            key={proj.id}
            id={proj.id}
          >
            <div className="project-card-image">
              <img src={proj.image} alt={proj.alt} loading="lazy" />
              <span className="project-tag">{proj.tag}</span>
            </div>
            <div className="project-card-body">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className={`project-details${expanded[proj.id] ? ' expanded' : ''}`} aria-hidden={!expanded[proj.id]}>
                {proj.details}
              </div>

              <button
                id={`toggle-${proj.id}`}
                className={`project-toggle-btn${expanded[proj.id] ? ' active' : ''}`}
                onClick={() => toggle(proj.id)}
                aria-expanded={!!expanded[proj.id]}
              >
                {expanded[proj.id] ? 'Hide Details' : 'View Details'}
                <FaChevronDown />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

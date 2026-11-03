import { useState, useEffect, useRef } from 'react';
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
  const [minHeights, setMinHeights] = useState({});
  const cardRefs = useRef([]);

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    const updateHeights = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024;
      const cols = isMobile ? 1 : isTablet ? 2 : 3;

      if (cols === 1) {
        setMinHeights({});
        return;
      }

      const heights = {};
      for (let r = 0; r < projects.length; r += cols) {
        const slice = projects.slice(r, r + cols);
        let maxH = 0;

        slice.forEach((_, idx) => {
          const el = cardRefs.current[r + idx];
          if (el) {
            const imgEl = el.querySelector('.project-card-image');
            const titleEl = el.querySelector('h3');
            const descEl = el.querySelector('.project-card-body > p');
            const btnEl = el.querySelector('.project-toggle-btn');
            if (imgEl && titleEl && descEl && btnEl) {
              const collapsedH =
                imgEl.offsetHeight +
                52 +
                titleEl.offsetHeight +
                10 +
                descEl.offsetHeight +
                20 +
                btnEl.offsetHeight;
              if (collapsedH > maxH) maxH = collapsedH;
            }
          }
        });

        slice.forEach((proj) => {
          if (maxH > 0) heights[proj.id] = maxH;
        });
      }

      setMinHeights(heights);
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    if (document.fonts) {
      document.fonts.ready.then(updateHeights);
    }
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

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
            ref={(el) => { cardRefs.current[i] = el; }}
            style={minHeights[proj.id] ? { minHeight: `${minHeights[proj.id]}px` } : undefined}
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

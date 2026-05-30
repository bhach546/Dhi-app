import {
  FaHardHat, FaNetworkWired, FaUserCog, FaClipboardList,
  FaRoute, FaDraftingCompass, FaShieldAlt, FaChartBar,
} from 'react-icons/fa';
import './Careers.css';

const roles = [
  { id: 'career-hdd', icon: <FaHardHat />, title: 'HDD Operators', desc: 'Operate horizontal directional drilling machines for trenchless installations.' },
  { id: 'career-ofc', icon: <FaNetworkWired />, title: 'OFC Technicians', desc: 'Handle fiber splicing, blowing and OTDR testing on live projects.' },
  { id: 'career-engineer', icon: <FaUserCog />, title: 'Field Engineers', desc: 'Manage on-site telecom deployment and quality assurance activities.' },
  { id: 'career-coord', icon: <FaClipboardList />, title: 'Project Coordinators', desc: 'Coordinate between field teams, clients and project management offices.' },
  { id: 'career-survey', icon: <FaRoute />, title: 'Route Surveyors', desc: 'Conduct route surveys, feasibility analysis and GIS mapping.' },
  { id: 'career-cad', icon: <FaDraftingCompass />, title: 'Telecom CAD Drafters', desc: 'Prepare as-built drawings and network layout designs for fiber projects.' },
  { id: 'career-safety', icon: <FaShieldAlt />, title: 'EHS Officers', desc: 'Enforce safety standards, conduct audits and manage compliance reporting.' },
  { id: 'career-pm', icon: <FaChartBar />, title: 'Project Managers', desc: 'Lead end-to-end telecom infrastructure project delivery across regions.' },
];

export default function Careers() {
  return (
    <section className="careers" id="careers" aria-label="Careers section">
      <div className="section-title">
        <span className="label">Join Our Team</span>
        <h2>Career <span>Opportunities</span></h2>
        <p>Be part of a growing telecom infrastructure company building India's digital future.</p>
      </div>

      <div className="careers-grid">
        {roles.map((role, i) => (
          <div
            className={`career-card reveal reveal-delay-${(i % 4) + 1}`}
            key={role.id}
            id={role.id}
          >
            <div className="career-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.desc}</p>
          </div>
        ))}
      </div>

      <div className="careers-cta reveal">
        <h3>Ready to Build India's Digital Future?</h3>
        <p>Send your resume and we'll get back to you within 2 working days.</p>
        <button
          id="careers-apply-btn"
          className="careers-cta-btn"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
}

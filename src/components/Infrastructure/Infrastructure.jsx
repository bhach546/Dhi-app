import {
  FaTools, FaCogs, FaPlug, FaChartLine, FaMap, FaTruck,
  FaHardHat, FaWrench,
} from 'react-icons/fa';
import './Infrastructure.css';

const equipments = [
  {
    id: 'infra-hdd',
    icon: <FaTools />,
    title: 'HDD Machines',
    desc: 'Advanced horizontal directional drilling rigs for trenchless utility crossings.',
  },
  {
    id: 'infra-blowing',
    icon: <FaCogs />,
    title: 'OFC Blowing Machines',
    desc: 'High-speed cable blowing equipment for efficient fiber installation.',
  },
  {
    id: 'infra-splicer',
    icon: <FaPlug />,
    title: 'Fusion Splicers',
    desc: 'Precision fusion splicers for low-loss fiber optic connections.',
  },
  {
    id: 'infra-otdr',
    icon: <FaChartLine />,
    title: 'OTDR Equipment',
    desc: 'Optical time-domain reflectometers for network testing and commissioning.',
  },
  {
    id: 'infra-survey',
    icon: <FaMap />,
    title: 'Survey Equipment',
    desc: 'GPS and GIS-enabled tools for accurate route survey and mapping.',
  },
  {
    id: 'infra-fleet',
    icon: <FaTruck />,
    title: 'Fleet & Logistics',
    desc: 'Dedicated fleet of vehicles for material transport and field operations.',
  },
  {
    id: 'infra-safety',
    icon: <FaHardHat />,
    title: 'Safety Gear',
    desc: 'Full PPE and EHS-compliant safety equipment for all field activities.',
  },
  {
    id: 'infra-tools',
    icon: <FaWrench />,
    title: 'Specialized Tools',
    desc: 'Comprehensive toolkit for civil and telecom infrastructure operations.',
  },
];

export default function Infrastructure() {
  return (
    <section className="infrastructure" id="infra" aria-label="Infrastructure and Equipment section">
      <div className="section-title">
        <span className="label">Our Assets</span>
        <h2>Infrastructure & <span>Equipment</span></h2>
        <p>Advanced telecom machinery and resources that power our delivery capability.</p>
      </div>

      <div className="infra-grid">
        {equipments.map((item, i) => (
          <div
            className={`infra-card reveal reveal-delay-${(i % 4) + 1}`}
            key={item.id}
            id={item.id}
          >
            <div className="infra-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

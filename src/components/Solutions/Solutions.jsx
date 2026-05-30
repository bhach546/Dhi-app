import {
  FaSatelliteDish, FaWifi, FaBuilding, FaServer,
  FaRoad, FaHome,
} from 'react-icons/fa';
import './Solutions.css';

const solutions = [
  {
    id: 'sol-telecom',
    icon: <FaSatelliteDish />,
    title: 'Telecom Operators',
    desc: 'High-performance OFC backbone network rollout solutions for leading telecom operators.',
  },
  {
    id: 'sol-isp',
    icon: <FaWifi />,
    title: 'ISP & Broadband',
    desc: 'Scalable FTTH and last-mile broadband deployments for ISPs of all sizes.',
  },
  {
    id: 'sol-smartcity',
    icon: <FaBuilding />,
    title: 'Smart City',
    desc: 'Integrated city-wide digital infrastructure for smart governance and connectivity.',
  },
  {
    id: 'sol-enterprise',
    icon: <FaServer />,
    title: 'Enterprise Connectivity',
    desc: 'Secure, high-availability enterprise telecom networks for corporate campuses.',
  },
  {
    id: 'sol-highway',
    icon: <FaRoad />,
    title: 'Highway Projects',
    desc: 'National highway OFC and underground utility corridor deployments at scale.',
  },
  {
    id: 'sol-residential',
    icon: <FaHome />,
    title: 'Residential FTTH',
    desc: 'Rapid residential broadband activation with GPON and fiber distribution networks.',
  },
];

export default function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-label="Solutions section">
      <div className="section-title">
        <span className="label">Industry Verticals</span>
        <h2>Our <span>Solutions</span></h2>
        <p>Industry-specific connectivity solutions built for performance and scale.</p>
      </div>

      <div className="solutions-grid">
        {solutions.map((sol, i) => (
          <div
            className={`solution-card reveal reveal-delay-${(i % 4) + 1}`}
            key={sol.id}
            id={sol.id}
          >
            <div className="solution-icon">{sol.icon}</div>
            <h3>{sol.title}</h3>
            <p>{sol.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

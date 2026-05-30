import {
  FaBuilding, FaBullseye, FaAward,
} from 'react-icons/fa';
import './About.css';

const cards = [
  {
    id: 'about-overview',
    icon: <FaBuilding />,
    title: 'Company Overview',
    description:
      'DHI is a professional telecom infrastructure company delivering OFC backbone, FTTH deployment, HDD solutions and smart city connectivity projects across India.',
    list: [
      'Founded by telecom industry veterans',
      'Pan-India project execution capability',
      'Trusted partner for leading telecom operators',
      'Integrated civil and telecom delivery',
    ],
  },
  {
    id: 'about-mission',
    icon: <FaBullseye />,
    title: 'Mission & Values',
    description:
      'To connect communities through reliable, scalable and future-ready telecom infrastructure solutions while maintaining the highest standards of quality and safety.',
    list: [
      'Customer-centric delivery model',
      'Zero compromise on quality',
      'Safety-first work culture',
      'Sustainable infrastructure practices',
    ],
  },
  {
    id: 'about-why',
    icon: <FaAward />,
    title: 'Why Choose DHI',
    description:
      'Experienced teams, advanced equipment, strong project management and operational excellence that set us apart from the competition.',
    list: [
      '180+ skilled telecom professionals',
      'Advanced HDD and OFC machinery',
      'On-time, within-budget delivery',
      '24/7 operations and maintenance support',
    ],
  },
];

export default function About() {
  return (
    <section className="about" id="about" aria-label="About DHI section">
      <div className="section-title">
        <span className="label">Who We Are</span>
        <h2>About <span>DHI</span></h2>
        <p>Professional telecom infrastructure company driven by innovation and connectivity.</p>
      </div>

      <div className="about-grid">
        {cards.map((card, i) => (
          <div
            className={`about-card reveal reveal-delay-${i + 1}`}
            key={card.id}
            id={card.id}
          >
            <div className="about-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.list.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

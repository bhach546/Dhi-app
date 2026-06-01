import './Infrastructure.css';

const equipments = [
  {
    id: 'infra-hdd',
    image: '/images/infrastructure/HDD.png',
    title: 'HDD Machines',
    desc: 'Advanced horizontal directional drilling rigs for trenchless utility crossings.',
  },
  {
    id: 'infra-blowing',
    image: '/images/infrastructure/OFC.png',
    title: 'OFC Blowing Machines',
    desc: 'High-speed cable blowing equipment for efficient fiber installation.',
  },
  {
    id: 'infra-splicer',
    image: '/images/infrastructure/Fusionsplicer.png',
    title: 'Fusion Splicers',
    desc: 'Precision fusion splicers for low-loss fiber optic connections.',
  },
  {
    id: 'infra-otdr',
    image: '/images/infrastructure/OTDR.png',
    title: 'OTDR Equipment',
    desc: 'Optical time-domain reflectometers for network testing and commissioning.',
  },
  {
    id: 'infra-survey',
    image: '/images/infrastructure/Surveyequipemt.png',
    title: 'Survey Equipment',
    desc: 'GPS and GIS-enabled tools for accurate route survey and mapping.',
  },
  {
    id: 'infra-fleet',
    image: '/images/infrastructure/Fleet_logistic.png',
    title: 'Fleet & Logistics',
    desc: 'Dedicated fleet of vehicles for material transport and field operations.',
  },
  {
    id: 'infra-field',
    image: '/images/infrastructure/Fieldteams.png',
    title: 'Field Teams',
    desc: 'Skilled field teams equipped for on-site telecom infrastructure deployment.',
  },
  {
    id: 'infra-restoration',
    image: '/images/infrastructure/Restorationteams.png',
    title: 'Restoration Teams',
    desc: 'Dedicated restoration teams for emergency network repair and fault resolution.',
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
            <div className="infra-card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="infra-card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

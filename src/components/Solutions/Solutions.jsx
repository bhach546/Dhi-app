import { useState } from 'react';
import { FaChevronDown, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';
import './Solutions.css';

/* ─── 9 SOLUTIONS DATA (per TABS.docx) ─── */
const solutions = [
  {
    id: 'sol-telecom',
    image: '/images/solutions/Telecomoperators.png',
    title: 'Telecom Operator s',
    note: 'DH-INFRA delivers end-to-end telecom infrastructure solutions that support network expansion, backbone deployment, FTTH rollouts, and reliable fiber connectivity for telecom operators.',
    overview: 'DH-INFRA delivers end-to-end telecom infrastructure solutions that enable operators to expand network coverage, accelerate fiber deployment, improve service reliability, and support growing bandwidth demands.',
    challengesNote: 'Telecom operators face increasing pressure to expand network reach, support growing subscriber demand, reduce deployment timelines, and maintain reliable connectivity across diverse geographies.',
    challenges: [
      'Rapid Network Expansion Requirements',
      'Growing Data & Bandwidth Demand',
      'Fiber Deployment Complexity',
      'Last-Mile Connectivity Challenges',
      'Network Reliability & Uptime Requirements',
      'Utility Crossing & ROW Constraints',
    ],
    dhSolutions: [
      'OFC Backbone Infrastructure',
      'FTTH & FTTB Deployment',
      'Last Mile Connectivity',
      'HDD & Underground Utility Solutions',
      'Route Survey & Network Planning',
      'Fiber Testing & Commissioning',
      'Fiber Operations & Maintenance',
      'Network Restoration Services',
    ],
    dhSolutionsNote: 'DH-INFRA supports telecom operators through comprehensive infrastructure deployment and operational services.',
    coverage: [
      '📡 Backbone Fiber Networks',
      '📡 Metro Fiber Networks',
      '📡 FTTH Expansion Projects',
      '📡 Mobile Tower Backhaul Connectivity',
      '📡 Utility Corridor Fiber Deployments',
      '📡 Access & Distribution Networks',
      '📡 Network Upgrade Projects',
    ],
    coverageNote: 'DH-INFRA supports telecom infrastructure projects across multiple network domains.',
  },
  {
    id: 'sol-isp',
    image: '/images/solutions/ISP&Braodband.png',
    title: 'ISP & Broadband Solutions',
    note: 'DH-INFRA provides scalable broadband infrastructure solutions that help ISPs expand coverage, connect subscribers, and deliver high-speed internet services.',
    overview: 'DH-INFRA provides telecom infrastructure solutions that help ISPs and broadband providers expand fiber networks, increase subscriber reach, and deliver reliable high-speed internet services.',
    challenges: [
      'Expanding broadband coverage',
      'Increasing subscriber demand',
      'Faster network rollout requirements',
      'Maintaining service reliability',
      'Last-mile connectivity challenges',
    ],
    dhSolutions: [
      'FTTH & FTTB Deployment',
      'OFC Backbone Infrastructure',
      'Last Mile Connectivity',
      'Route Survey & Network Planning',
      'Fiber Testing & Commissioning',
      'Fiber Operations & Maintenance',
    ],
    coverage: [
      '🌐 Urban Broadband Networks',
      '🌐 Semi-Urban Connectivity',
      '🌐 Residential Connectivity',
      '🌐 Enterprise Broadband Services',
    ],
  },
  {
    id: 'sol-enterprise',
    image: '/images/solutions/Enterpriseconnectivity.png',
    title: 'Enterprise Connectivity Solutions',
    note: 'DH-INFRA delivers dedicated fiber connectivity solutions that enable secure, high-performance communication networks for enterprises, corporate campuses, and business facilities.',
    overview: 'DH-INFRA delivers dedicated fiber connectivity solutions for enterprises, corporate campuses, IT parks, industrial facilities, and business environments.',
    challenges: [
      'Reliable business connectivity',
      'High bandwidth requirements',
      'Network scalability',
      'Business continuity requirements',
    ],
    dhSolutions: [
      'Dedicated Fiber Infrastructure',
      'Enterprise Network Connectivity',
      'OFC Backbone Deployment',
      'Fiber Operations & Maintenance',
      'Network Testing & Commissioning',
    ],
    coverage: [
      '🏢 Corporate Offices',
      '🏢 IT Parks',
      '🏢 Business Campuses',
      '🏢 Industrial Facilities',
    ],
  },
  {
    id: 'sol-smartcity',
    image: '/images/solutions/Smartcity.png',
    title: 'Smart City Infrastructure Solutions',
    note: 'DH-INFRA provides advanced telecom infrastructure solutions that support smart city initiatives, surveillance systems, public Wi-Fi networks, and digital connectivity programs.',
    overview: 'DH-INFRA provides telecom infrastructure solutions that enable smart city connectivity, surveillance networks, public Wi-Fi systems, and digital infrastructure initiatives.',
    challenges: [
      'Large-scale infrastructure deployment',
      'Multiple network integrations',
      'Public connectivity requirements',
      'Future-ready digital infrastructure',
    ],
    dhSolutions: [
      'OFC Backbone Infrastructure',
      'Smart City Fiber Networks',
      'Surveillance Connectivity',
      'Public Wi-Fi Infrastructure',
      'Fiber Operations Support',
    ],
    coverage: [
      '🏙 Surveillance Systems',
      '🏙 Smart Governance Networks',
      '🏙 Public Connectivity Infrastructure',
      '🏙 Digital City Initiatives',
    ],
  },
  {
    id: 'sol-highway',
    image: '/images/solutions/Highway_utilitycoridors.png',
    title: 'Highway & Utility Corridor Solutions',
    note: 'DH-INFRA executes fiber infrastructure solutions along highways, utility corridors, and large-scale infrastructure projects requiring reliable and long-distance connectivity.',
    overview: 'DH-INFRA executes fiber infrastructure deployments along highways, utility corridors, industrial zones, and large-scale infrastructure projects.',
    challenges: [
      'Utility crossings',
      'Long-distance deployments',
      'ROW management',
      'Network reliability requirements',
    ],
    dhSolutions: [
      'HDD Crossings',
      'OFC Backbone Deployment',
      'Utility Corridor Fiber Networks',
      'Route Survey & Planning',
      'Fiber Testing & Commissioning',
    ],
    coverage: [
      '🛣 National Highways',
      '🛣 Expressways',
      '⚡ Utility Corridors',
      '🏭 Industrial Corridors',
    ],
  },
  {
    id: 'sol-lastmile',
    image: '/images/solutions/Lastmile.png',
    title: 'Last Mile & Access Network Solutions',
    note: 'DH-INFRA delivers last-mile connectivity solutions that extend network access from backbone infrastructure to residential, commercial, and institutional end users.',
    overview: 'DH-INFRA delivers last-mile connectivity solutions that extend fiber networks to residential communities, commercial establishments, institutions, and end users.',
    challenges: [
      'Subscriber connectivity gaps',
      'Network accessibility',
      'Service activation timelines',
      'Customer experience requirements',
    ],
    dhSolutions: [
      'Last Mile Deployment',
      'Access Network Installation',
      'FTTH Rollouts',
      'Fiber Termination',
      'Network Activation',
    ],
    coverage: [
      '🏘 Residential Areas',
      '🏢 Commercial Buildings',
      '🏫 Educational Institutions',
      '🏥 Healthcare Facilities',
    ],
  },
  {
    id: 'sol-residential',
    image: '/images/solutions/Residentialcomunity.png',
    title: 'Residential Community Connectivity Solutions',
    note: 'DH-INFRA provides high-speed fiber connectivity solutions for residential communities, apartments, gated townships, and housing developments.',
    overview: 'DH-INFRA enables high-speed fiber connectivity solutions for gated communities, apartments, townships, and residential developments.',
    challenges: [
      'Broadband demand growth',
      'Multi-dwelling connectivity',
      'Reliable service requirements',
      'Network scalability',
    ],
    dhSolutions: [
      'FTTH Deployment',
      'Pole-Based Fiber Networks',
      'Last Mile Connectivity',
      'Subscriber Activation',
      'Network Maintenance',
    ],
    coverage: [
      '🏘 Apartments',
      '🏘 Gated Communities',
      '🏘 Residential Townships',
      '🏘 Housing Projects',
    ],
  },
  {
    id: 'sol-industrial',
    image: '/images/solutions/Industrial Manufacturing.png',
    title: 'Industrial & Manufacturing Connectivity Solutions',
    note: 'DH-INFRA delivers robust fiber infrastructure solutions that support industrial facilities, manufacturing plants, logistics hubs, and operational communication networks.',
    overview: 'DH-INFRA provides robust fiber infrastructure solutions that support manufacturing facilities, industrial parks, logistics hubs, and operational technology networks.',
    challenges: [
      'Reliable industrial communications',
      'Large-area connectivity',
      'High network availability',
      'Operational continuity',
    ],
    dhSolutions: [
      'Enterprise Fiber Networks',
      'Industrial Backbone Deployment',
      'Utility Corridor Connectivity',
      'Fiber Operations & Maintenance',
      'Network Restoration Services',
    ],
    coverage: [
      '🏭 Manufacturing Facilities',
      '🏭 Industrial Parks',
      '🏭 Logistics Hubs',
      '🏭 Warehousing Facilities',
    ],
  },
  {
    id: 'sol-govt',
    image: '/images/solutions/Govt_publicsector.png',
    title: 'Government & Public Sector Connectivity Solutions',
    note: 'DH-INFRA provides telecom infrastructure solutions that enable secure, scalable, and reliable connectivity for government agencies, public institutions, and digital governance initiatives.',
    overview: 'DH-INFRA provides telecom infrastructure solutions that support government agencies, municipal corporations, public institutions, and digital governance initiatives.',
    challenges: [
      'Public infrastructure requirements',
      'Large-scale connectivity projects',
      'Secure communication networks',
      'Long-term network sustainability',
    ],
    dhSolutions: [
      'OFC Backbone Infrastructure',
      'Smart Governance Connectivity',
      'Institutional Fiber Networks',
      'Utility Corridor Deployments',
      'Operations & Maintenance',
    ],
    coverage: [
      '🏛 Government Departments',
      '🏛 Municipal Corporations',
      '🏛 Public Institutions',
      '🏛 Digital Governance Projects',
    ],
  },
];

/* ─── SOLUTION CARD: Left image | Right note | Bottom tabs ─── */
function SolutionCard({ sol, index }) {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(prev => (prev === tab ? null : tab));
  };

  return (
    <article
      className={`sol-card reveal reveal-delay-${(index % 3) + 1}`}
      id={sol.id}
    >
      {/* TOP: Image LEFT | Short note RIGHT */}
      <div className="sol-card-top">
        <div className="sol-card-image">
          <img src={sol.image} alt={sol.title} loading="lazy" />
        </div>
        <div className="sol-card-info">
          <h3 className="sol-card-title">{sol.title}</h3>
          <p className="sol-card-note">{sol.note}</p>
        </div>
      </div>

      {/* BOTTOM: Two-button row and single content area */}
      <div className="sol-card-bottom">
        <div className="sol-tabs">
          <button
            id={`challenges-btn-${sol.id}`}
            className={`sol-tab-btn sol-tab-btn--challenges${activeTab === 'challenges' ? ' active' : ''}`}
            onClick={() => toggleTab('challenges')}
            aria-expanded={activeTab === 'challenges'}
            aria-controls={`content-${sol.id}`}
          >
            <FaExclamationTriangle className="sol-btn-icon" />
            <span>Industry Challenges</span>
            <FaChevronDown className={`sol-chevron${activeTab === 'challenges' ? ' rotated' : ''}`} />
          </button>

          <button
            id={`solutions-btn-${sol.id}`}
            className={`sol-tab-btn sol-tab-btn--solutions${activeTab === 'solutions' ? ' active' : ''}`}
            onClick={() => toggleTab('solutions')}
            aria-expanded={activeTab === 'solutions'}
            aria-controls={`content-${sol.id}`}
          >
            <FaLightbulb className="sol-btn-icon" />
            <span>Our Solutions</span>
            <FaChevronDown className={`sol-chevron${activeTab === 'solutions' ? ' rotated' : ''}`} />
          </button>
        </div>

        <div
          id={`content-${sol.id}`}
          className={`sol-panel-content${activeTab ? ' sol-panel-content--open' : ''}`}
          aria-hidden={!activeTab}
        >
          {activeTab === 'challenges' && (
            <div className="sol-panel-section">
              {sol.overview && (
                <>
                  <h4 className="sol-panel-heading">Overview</h4>
                  <p className="sol-panel-text">{sol.overview}</p>
                </>
              )}
              {sol.challengesNote && (
                <p className="sol-panel-text sol-panel-text--sub">{sol.challengesNote}</p>
              )}
              {sol.challenges && (
                <>
                  <h4 className="sol-panel-heading">Industry Challenges</h4>
                  <ul className="sol-list">
                    {sol.challenges.map((c, j) => (
                      <li key={j}><span className="sol-check">✔</span>{c}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="sol-panel-section">
              {sol.dhSolutions && (
                <>
                  <h4 className="sol-panel-heading">DH-INFRA Solutions</h4>
                  {sol.dhSolutionsNote && <p className="sol-panel-text sol-panel-text--sub">{sol.dhSolutionsNote}</p>}
                  <ul className="sol-list">
                    {sol.dhSolutions.map((s, j) => (
                      <li key={j}><span className="sol-dot">●</span>{s}</li>
                    ))}
                  </ul>
                </>
              )}
              {sol.coverage && (
                <>
                  <h4 className="sol-panel-heading">Solution Coverage</h4>
                  {sol.coverageNote && <p className="sol-panel-text sol-panel-text--sub">{sol.coverageNote}</p>}
                  <ul className="sol-list sol-list--coverage">
                    {sol.coverage.map((c, j) => (
                      <li key={j}>{c}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── MAIN EXPORT ─── */
export default function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-label="Solutions section">
      <div className="section-title">
        <span className="label">Industry Verticals</span>
        <h2>Our <span>Solutions</span></h2>
        <p className="solutions-intro-text">
          Industry-specific connectivity solutions built for performance and scale.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((sol, i) => (
          <SolutionCard key={sol.id} sol={sol} index={i} />
        ))}
      </div>
    </section>
  );
}

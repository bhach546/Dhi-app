import { useState } from 'react';
import { FaChevronDown, FaTools, FaNetworkWired } from 'react-icons/fa';
import './Services.css';

/* ─── ALL 12 SERVICES (5 primary + 7 additional per document) ─── */
const primaryServices = [
  {
    id: 'service-ofc',
    image: '/images/services/OFCBackboneInfra.png',
    alt: 'OFC Backbone Infrastructure',
    title: 'OFC Backbone Infrastructure',
    note: 'DH-INFRA specializes in end-to-end OFC backbone infrastructure deployment, delivering high-capacity fiber networks through route planning, cable laying, splicing, testing, commissioning, and maintenance services.',
    overview: 'DH-INFRA specializes in designing, deploying, and maintaining high-capacity Optical Fiber Cable (OFC) backbone networks that serve as the foundation of modern telecommunications infrastructure.',
    servicesList: [
      'Route Survey & Feasibility Assessment',
      'Network Design & Engineering',
      'OFC Trenching & Cable Laying',
      'OFC Blowing & Installation',
      'HDD Crossings',
      'Fiber Splicing & Jointing',
      'OTDR Testing & Certification',
      'Network Commissioning',
      'Preventive Maintenance',
      'Corrective Maintenance',
    ],
    equipment: ['HDD Machines', 'OFC Blowing Machines', 'Fusion Splicers', 'OTDR Equipment', 'Survey Equipment'],
  },
  {
    id: 'service-ftth',
    image: '/images/services/FTTH&FTTBSolution.png',
    alt: 'FTTH & FTTB Deployment',
    title: 'FTTH & FTTB Deployment',
    note: 'DH-INFRA delivers comprehensive FTTH and FTTB deployment solutions, connecting residential communities, apartments, commercial buildings, and enterprises with reliable fiber connectivity.',
    overview: 'DH-INFRA delivers end-to-end FTTH and FTTB deployment solutions, enabling reliable fiber connectivity for residential, commercial, and enterprise environments.',
    servicesList: [
      'FTTH Network Rollout',
      'FTTB Deployment',
      'Distribution Network Installation',
      'Fiber Termination',
      'Splitter Installation',
      'Customer Premise Connectivity',
      'Pole-Based Fiber Deployment',
      'Testing & Activation',
    ],
    equipment: ['Fusion Splicers', 'OTDR Equipment', 'Fiber Cleavers', 'OFC Blowing Machines', 'Testing Instruments'],
  },
  {
    id: 'service-lastmile',
    image: '/images/services/Lastmileconnectivity.png',
    alt: 'Last Mile Connectivity',
    title: 'Last Mile Connectivity',
    note: 'DH-INFRA provides last-mile connectivity solutions that bridge backbone networks with end users, ensuring seamless broadband access and network reach expansion.',
    overview: 'DH-INFRA provides reliable last-mile connectivity solutions that connect backbone infrastructure directly to end users.',
    servicesList: [
      'Access Network Deployment',
      'Drop Fiber Installation',
      'Subscriber Connectivity',
      'Fiber Termination',
      'Distribution Point Installation',
      'Network Activation',
      'Customer Integration',
    ],
    equipment: ['Fusion Splicers', 'OTDR Equipment', 'Fiber Testing Tools', 'Installation Equipment'],
  },
  {
    id: 'service-hdd',
    image: '/images/services/HDD&undergroundutility.png',
    alt: 'HDD & Underground Utility Solutions',
    title: 'HDD & Underground Utility Solutions',
    note: 'DH-INFRA executes Horizontal Directional Drilling (HDD) and underground utility installations for telecom and infrastructure projects while minimizing surface disruption and ensuring safe utility crossings.',
    overview: 'DH-INFRA executes trenchless HDD solutions for telecom and utility infrastructure projects, ensuring safe underground installations.',
    servicesList: [
      'HDD Route Planning',
      'Utility Crossings',
      'Road Crossings',
      'River Crossings',
      'Duct Installation',
      'Underground Cable Deployment',
      'Bore Path Execution',
    ],
    equipment: ['HDD Rigs', 'Locators & Tracking Systems', 'Drilling Tools', 'Utility Detection Equipment', 'Excavation Equipment'],
  },
  {
    id: 'service-fom',
    image: '/images/services/fibreoperations&maintenance.png',
    alt: 'Fiber Operations & Maintenance',
    title: 'Fiber Operations & Maintenance',
    note: 'DH-INFRA manages preventive maintenance, fault detection, restoration activities, and 24×7 operational support to ensure maximum network uptime and reliability.',
    overview: 'DH-INFRA manages preventive maintenance and restoration services to ensure continuous network performance and reliability.',
    servicesList: [
      'Preventive Maintenance',
      'Fault Localization',
      'Fiber Restoration',
      'Emergency Repairs',
      'Network Audits',
      'Health Checks',
      '24×7 Support Services',
    ],
    equipment: ['OTDR Equipment', 'Fusion Splicers', 'Fault Detection Tools', 'Restoration Vehicles', 'Testing Instruments'],
  },
];

const additionalServices = [
  {
    id: 'service-survey',
    image: '/images/services/routesurvey_services.png',
    alt: 'Route Survey & Network Planning',
    title: 'Route Survey & Network Planning',
    note: 'DH-INFRA conducts detailed route surveys, feasibility assessments, GIS mapping, and network planning activities to support efficient and scalable telecom infrastructure deployment.',
    overview: 'DH-INFRA conducts detailed route surveys and planning activities to support efficient telecom infrastructure deployment.',
    servicesList: [
      'Route Reconnaissance',
      'GIS Mapping',
      'Feasibility Studies',
      'Utility Identification',
      'Route Documentation',
      'BOQ Preparation',
      'Network Planning',
    ],
    equipment: ['Total Stations', 'GPS Devices', 'Survey Equipment', 'GIS Tools', 'Mapping Software'],
  },
  {
    id: 'service-testing',
    image: '/images/services/Fibretesting.png',
    alt: 'Fiber Testing & Commissioning',
    title: 'Fiber Testing & Commissioning',
    note: 'DH-INFRA performs comprehensive fiber testing, OTDR analysis, network certification, and commissioning services to ensure quality standards and optimal network performance.',
    overview: 'DH-INFRA performs comprehensive testing and commissioning services to validate network readiness before handover.',
    servicesList: [
      'OTDR Testing',
      'Power Meter Testing',
      'Fiber Certification',
      'Acceptance Testing',
      'Network Validation',
      'Commissioning Support',
    ],
    equipment: ['OTDR Equipment', 'Optical Power Meters', 'Light Sources', 'Testing Instruments'],
  },
  {
    id: 'service-pm',
    image: '/images/services/Telecomprojectmanagement.png',
    alt: 'Telecom Project Management',
    title: 'Telecom Project Management',
    note: 'DH-INFRA manages telecom infrastructure projects from planning and execution to monitoring and reporting, ensuring timely delivery, quality compliance, and cost efficiency.',
    overview: 'DH-INFRA manages telecom infrastructure projects from planning through execution and successful completion.',
    servicesList: [
      'Project Planning',
      'Resource Management',
      'Execution Monitoring',
      'Vendor Coordination',
      'Quality Assurance',
      'Safety Compliance',
      'Project Reporting',
    ],
    equipment: ['Project Management Software', 'Survey Tools', 'Monitoring Systems', 'Reporting Platforms'],
  },
  {
    id: 'service-pole',
    image: '/images/services/FTTHPole.png',
    alt: 'FTTH Pole Installation',
    title: 'FTTH Pole Installation',
    note: 'DH-INFRA specializes in FTTH pole installation services, supporting aerial fiber deployment through safe, reliable, and standards-compliant network expansion activities.',
    overview: 'DH-INFRA provides professional FTTH pole installation for aerial fiber deployment across residential and commercial areas.',
    servicesList: [
      'Pole Route Planning',
      'Pole Installation',
      'Aerial Cable Deployment',
      'Fiber Drop Installation',
      'Standards Compliance',
      'Safety Procedures',
    ],
    equipment: ['Pole Installation Equipment', 'Aerial Cable Tools', 'Safety Gear', 'Testing Equipment'],
  },
  {
    id: 'service-splicing',
    image: '/images/services/Fibresplicing.png',
    alt: 'Fiber Splicing & Jointing',
    title: 'Fiber Splicing & Jointing Services',
    note: 'DH-INFRA provides precision fiber splicing and jointing services using advanced fusion splicing equipment to ensure low-loss, high-performance optical fiber connectivity.',
    overview: 'DH-INFRA delivers precision fiber splicing and jointing services to ensure reliable optical connectivity.',
    servicesList: [
      'Fusion Splicing',
      'Joint Closure Installation',
      'Fiber Termination',
      'Patch Panel Integration',
      'Loss Testing',
      'Documentation',
    ],
    equipment: ['Fusion Splicers', 'Fiber Cleavers', 'OTDR Equipment', 'Testing Instruments'],
  },
  {
    id: 'service-restoration',
    image: '/images/services/Networkrestoration.png',
    alt: 'Network Restoration Services',
    title: 'Network Restoration Services',
    note: 'DH-INFRA delivers rapid network restoration solutions through dedicated field teams capable of fault localization, emergency repairs, and service recovery operations.',
    overview: 'DH-INFRA provides rapid-response restoration services to minimize downtime and maintain network continuity.',
    servicesList: [
      'Fault Detection',
      'Emergency Restoration',
      'Fiber Replacement',
      'Joint Repair',
      'Route Recovery',
      'Service Recovery',
    ],
    equipment: ['Restoration Vehicles', 'Fusion Splicers', 'OTDR Equipment', 'Fault Detection Tools'],
  },
  {
    id: 'service-row',
    image: '/images/services/ROw_permit.png',
    alt: 'ROW & Permit Management',
    title: 'ROW & Permit Management Services',
    note: 'DH-INFRA manages Right of Way (ROW) approvals, permit coordination, stakeholder engagement, and compliance activities to facilitate smooth telecom project execution.',
    overview: 'DH-INFRA manages permit approvals and Right of Way (ROW) compliance to facilitate smooth project execution.',
    servicesList: [
      'ROW Coordination',
      'Permit Acquisition Support',
      'Utility Approvals',
      'Regulatory Documentation',
      'Stakeholder Coordination',
      'Compliance Monitoring & Reporting',
    ],
    equipment: ['Documentation Systems', 'Survey Equipment', 'GIS Tools', 'Compliance Software'],
  },
];

/* ─── CARD: Image top → short note → "View Details" button → expands overview + services + equipment ─── */
function ServiceCard({ svc, index, isPrimary }) {
  const [openOverview, setOpenOverview] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <article
      className={`svc-card${isPrimary ? ' svc-card--primary' : ' svc-card--additional'} reveal reveal-delay-${(index % 4) + 1}`}
      id={svc.id}
    >
      {/* IMAGE */}
      <div className="svc-card-image">
        <img src={svc.image} alt={svc.alt} loading="lazy" />
        {isPrimary && <span className="svc-badge">Core Service</span>}
      </div>

      {/* BODY */}
      <div className="svc-card-body">
        <h3 className="svc-card-title">{svc.title}</h3>

        {/* Short note always visible */}
        <p className="svc-card-note">{svc.note}</p>

        {/* Expandable: Overview */}
        <div
          id={`svc-overview-${svc.id}`}
          className={`svc-details${openOverview ? ' svc-details--open' : ''}`}
          aria-hidden={!openOverview}
        >
          {svc.overview && (
            <div className="svc-detail-block">
              <h4 className="svc-detail-heading">Overview</h4>
              <p className="svc-detail-text">{svc.overview}</p>
            </div>
          )}
        </div>

        {/* Expandable: Services & Equipment */}
        <div
          id={`svc-services-${svc.id}`}
          className={`svc-details${openServices ? ' svc-details--open' : ''}`}
          aria-hidden={!openServices}
        >
          <div className="svc-detail-columns">
            {svc.servicesList && (
              <div className="svc-detail-block">
                <h4 className="svc-detail-heading">
                  <FaTools className="svc-detail-icon" /> Services We Provide
                </h4>
                <ul className="svc-checklist">
                  {svc.servicesList.map((item, j) => (
                    <li key={j}><span className="svc-check">✔</span>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {svc.equipment && (
              <div className="svc-detail-block">
                <h4 className="svc-detail-heading">
                  <FaNetworkWired className="svc-detail-icon" /> Equipment Utilized
                </h4>
                <ul className="svc-checklist svc-checklist--equip">
                  {svc.equipment.map((item, j) => (
                    <li key={j}><span className="svc-dot">●</span>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="svc-card-actions">
          <button
            id={`toggle-overview-${svc.id}`}
            className={`svc-toggle-btn${openOverview ? ' svc-toggle-btn--active' : ''}`}
            onClick={() => setOpenOverview(p => !p)}
            aria-expanded={openOverview}
            aria-controls={`svc-overview-${svc.id}`}
          >
            {openOverview ? 'Hide Details' : 'View Details'}
            <FaChevronDown className="svc-toggle-icon" />
          </button>

          <button
            id={`toggle-services-${svc.id}`}
            className={`svc-toggle-btn${openServices ? ' svc-toggle-btn--active' : ''}`}
            onClick={() => setOpenServices(p => !p)}
            aria-expanded={openServices}
            aria-controls={`svc-services-${svc.id}`}
          >
            {openServices ? 'Hide Services' : 'Services we provide & equipments'}
            <FaChevronDown className="svc-toggle-icon" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── MAIN EXPORT ─── */
export default function Services() {
  return (
    <section className="services" id="services" aria-label="Services section">

      {/* SECTION HEADER */}
      <div className="section-title">
        <span className="label">What We Do</span>
        <h2>Our <span>Services</span></h2>
        <p className="services-intro-text">
          What DH-INFRA Does — Comprehensive telecom infrastructure solutions delivered with precision and quality.
        </p>
      </div>

      {/* TAGLINE BAR */}
      <div className="services-tagline-bar">
        <p>
          <strong>What work can DH-INFRA perform for clients?</strong> From backbone fiber rollouts to last-mile access
          and intelligent O&amp;M — we deliver end-to-end telecom infrastructure solutions at every layer of the network.
        </p>
      </div>

      {/* ── PRIMARY: 5 core services ── */}
      <div className="services-tier-label">
        <span className="tier-badge tier-badge--core">Core Services</span>
        <h3 className="tier-heading">OUR Services — What DH-INFRA Does</h3>
        <p className="tier-sub">Five fundamental service areas that define our capabilities</p>
      </div>

      <div className="services-grid services-grid--primary">
        {primaryServices.map((svc, i) => (
          <ServiceCard key={svc.id} svc={svc} index={i} isPrimary={true} />
        ))}
      </div>

      {/* ── ADDITIONAL: 7 services ── */}
      <div className="services-tier-label services-tier-label--mt">
        <span className="tier-badge tier-badge--add">Additional Services</span>
        <h3 className="tier-heading">Specialized Capabilities</h3>
        <p className="tier-sub">Extended service portfolio for complete project delivery</p>
      </div>

      <div className="services-grid services-grid--additional">
        {additionalServices.map((svc, i) => (
          <ServiceCard key={svc.id} svc={svc} index={i} isPrimary={false} />
        ))}
      </div>

    </section>
  );
}

import { useState } from 'react';
import { FaChevronDown, FaProjectDiagram, FaTimes } from 'react-icons/fa';
import './QualitySafety.css';

const items = [
  {
    id: 'quality-qaqc',
    image: '/images/quality/QAQC.png',
    processFlow: '/images/quality/processflow/QC_Processflow.png',
    title: 'QA/QC Process',
    desc: 'DH-INFRA follows structured Quality Assurance (QA) and Quality Control (QC) processes to ensure telecom infrastructure projects are executed in accordance with industry standards, project specifications, and client requirements.',
    detailsTitle: 'QA/QC Activities',
    details: [
      'Project Quality Planning',
      'Material Inspection & Verification',
      'Installation Quality Checks',
      'Process Compliance Monitoring',
      'Network Performance Validation',
      'Final Quality Acceptance Reviews',
    ],
  },
  {
    id: 'quality-otdr',
    image: '/images/quality/OTDRTesting.png',
    processFlow: '/images/quality/processflow/OTDRTesting_flow.png',
    title: 'OTDR Testing Standards',
    desc: 'DH-INFRA performs comprehensive OTDR testing and network validation activities to verify fiber integrity, identify losses, and ensure optimal network performance before commissioning.',
    detailsTitle: 'Testing Activities',
    details: [
      'OTDR Trace Analysis',
      'Fiber Loss Measurement',
      'Splice Loss Verification',
      'Link Performance Validation',
      'Acceptance Testing',
      'Network Certification & Reporting',
    ],
  },
  {
    id: 'quality-ehs',
    image: '/images/quality/EHSCompilance.png',
    processFlow: '/images/quality/processflow/EHScompilance_flow.png',
    title: 'EHS Compliance',
    desc: 'DH-INFRA adheres to Environmental, Health, and Safety (EHS) standards to promote safe working conditions, environmental responsibility, and regulatory compliance across all project activities.',
    detailsTitle: 'Compliance Areas',
    details: [
      'Environmental Protection Measures',
      'Health & Safety Compliance',
      'Risk Assessment Procedures',
      'Incident Prevention Programs',
      'Site Safety Audits',
      'Regulatory Compliance Management',
    ],
  },
  {
    id: 'quality-safety',
    image: '/images/quality/Sitesafety.png',
    processFlow: '/images/quality/processflow/sitesafety_flow.png',
    title: 'Site Safety Practices',
    desc: 'DH-INFRA implements comprehensive site safety practices to protect personnel, assets, and the public while ensuring safe execution of telecom infrastructure projects.',
    detailsTitle: 'Safety Practices',
    details: [
      'Personal Protective Equipment (PPE)',
      'Toolbox Safety Meetings',
      'Hazard Identification & Control',
      'Work Permit Procedures',
      'Emergency Response Preparedness',
      'Safe Work Method Statements',
    ],
  },
  {
    id: 'quality-route',
    image: '/images/quality/Routedocumentation.png',
    processFlow: '/images/quality/processflow/routedocumentation_flow.png',
    title: 'Route Documentation',
    desc: 'DH-INFRA maintains accurate route documentation and project records to support quality control, operational efficiency, project tracking, and future maintenance activities.',
    detailsTitle: 'Documentation Activities',
    details: [
      'Route Mapping & Records',
      'Survey Documentation',
      'As-Built Drawings',
      'Fiber Route Information',
      'Testing & Commissioning Reports',
      'Project Handover Documentation',
    ],
  },
  {
    id: 'quality-permit',
    image: '/images/quality/permit&row.png',
    processFlow: '/images/quality/processflow/permit&row_flow.png',
    title: 'Permit & ROW Compliance',
    desc: 'DH-INFRA manages permit approvals and Right of Way (ROW) compliance activities to facilitate smooth project execution while meeting regulatory and stakeholder requirements.',
    detailsTitle: 'Compliance Activities',
    details: [
      'ROW Coordination',
      'Permit Acquisition Support',
      'Utility Approvals',
      'Regulatory Documentation',
      'Stakeholder Coordination',
      'Compliance Monitoring & Reporting',
    ],
  },
  {
    id: 'quality-training',
    image: '/images/quality/workforcetraining.png',
    processFlow: '/images/quality/processflow/workforcetraining_processflow.png',
    title: 'Workforce Training & Safety Awareness',
    desc: 'DH-INFRA promotes continuous workforce training and safety awareness programs to enhance employee competency, operational excellence, and safe work practices.',
    detailsTitle: 'Training Programs',
    details: [
      'Safety Induction Training',
      'PPE Usage Training',
      'Equipment Handling Training',
      'Emergency Response Training',
      'EHS Awareness Programs',
      'Technical Skill Development Programs',
    ],
  },
];

const safetyStatement = {
  id: 'quality-commitment',
  image: '/images/quality/safetycommitmentstatement.png',
  title: 'Safety Commitment Statement',
  text: 'At DH-INFRA, safety is an integral part of our culture. We are committed to protecting our workforce, clients, communities, and the environment through responsible project execution and continuous improvement in quality and safety performance.',
};

export default function QualitySafety() {
  const [expanded, setExpanded] = useState({});
  const [processFlowImage, setProcessFlowImage] = useState(null);

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="quality" id="quality" aria-label="Quality and Safety section">
      <div className="section-title light">
        <span className="label">Our Commitment</span>
        <h2>Quality & <span style={{ color: 'var(--color-accent-red)' }}>Safety</span></h2>
        <p>Committed to excellence, safety and compliance in every deployment.</p>
      </div>

      <div className="quality-list">
        {items.map((item, i) => (
          <article
            className={`quality-row reveal reveal-delay-${(i % 3) + 1}`}
            key={item.id}
            id={item.id}
          >
            <div className="quality-row-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="quality-row-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className={`quality-details${expanded[item.id] ? ' expanded' : ''}`} aria-hidden={!expanded[item.id]}>
                <h4>{item.detailsTitle}</h4>
                <ul>
                  {item.details.map((d, j) => <li key={j}>✔ {d}</li>)}
                </ul>
              </div>

              <div className="quality-actions">
                <button
                  id={`toggle-${item.id}`}
                  className={`quality-btn${expanded[item.id] ? ' active' : ''}`}
                  onClick={() => toggle(item.id)}
                  aria-expanded={!!expanded[item.id]}
                >
                  {expanded[item.id] ? 'Hide Details' : 'View Details'}
                  <FaChevronDown />
                </button>

                {item.processFlow && (
                  <button
                    className="quality-btn process-flow-btn"
                    onClick={() => setProcessFlowImage(item.processFlow)}
                    id={`flow-${item.id}`}
                  >
                    Process Flow
                    <FaProjectDiagram />
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Safety Commitment Statement – always visible at bottom */}
      <div className="safety-commitment reveal" id={safetyStatement.id}>
        <div className="safety-commitment-image">
          <img src={safetyStatement.image} alt={safetyStatement.title} loading="lazy" />
        </div>
        <div className="safety-commitment-content">
          <h3>{safetyStatement.title}</h3>
          <p>{safetyStatement.text}</p>
        </div>
      </div>

      {/* Process Flow Modal */}
      {processFlowImage && (
        <div className="process-flow-overlay" onClick={() => setProcessFlowImage(null)} role="dialog" aria-label="Process Flow Image">
          <div className="process-flow-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProcessFlowImage(null)} aria-label="Close">
              <FaTimes />
            </button>
            <img src={processFlowImage} alt="Process Flow" />
          </div>
        </div>
      )}
    </section>
  );
}

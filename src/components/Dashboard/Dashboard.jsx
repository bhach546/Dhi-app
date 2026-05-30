import { useEffect, useRef, useState } from 'react';
import {
  FaNetworkWired, FaBroadcastTower, FaUsers, FaCity
} from 'react-icons/fa';
import './Dashboard.css';

const metrics = [
  {
    icon: <FaNetworkWired />,
    value: 2500,
    suffix: '+',
    label: 'KM OFC Backbone Delivered',
    id: 'metric-ofc',
  },
  {
    icon: <FaBroadcastTower />,
    value: 180,
    suffix: '+',
    label: 'Telecom Experts & Engineers',
    id: 'metric-experts',
  },
  {
    icon: <FaUsers />,
    value: 98,
    suffix: '%',
    label: 'Project Completion Efficiency',
    id: 'metric-efficiency',
  },
  {
    icon: <FaCity />,
    value: 30,
    suffix: '+',
    label: 'Coverage Areas Across India',
    id: 'metric-areas',
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function MetricCard({ icon, value, suffix, label, id, started }) {
  const count = useCountUp(value, 1800, started);

  return (
    <div className="metric-card reveal" id={id}>
      <span className="metric-icon">{icon}</span>
      <div className="metric-value">
        {count}<span className="suffix">{suffix}</span>
      </div>
      <p className="metric-label">{label}</p>
    </div>
  );
}

export default function Dashboard() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="dashboard" id="dashboard" ref={sectionRef} aria-label="Key metrics">
      <div className="dashboard-title">
        <h2>Telecom Infrastructure at Scale</h2>
        <p>Enterprise-grade network deployment metrics</p>
      </div>
      <div className="metrics-grid">
        {metrics.map((m) => (
          <MetricCard key={m.id} {...m} started={started} />
        ))}
      </div>
    </section>
  );
}

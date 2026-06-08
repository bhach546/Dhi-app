import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Dashboard.css';



const performanceMetrics = [
  { value: '1000+', label: 'KM OFC Deployed', icon: '🛤' },
  { value: '60+', label: 'Backbone Routes', icon: '📡' },
  { value: '80+', label: 'FTTH Rollout Projects', icon: '🏠' },
  { value: '50+', label: 'HDD Crossings Executed', icon: '🚜' },
  { value: '30+', label: 'Coverage Areas', icon: '📍' },
  { value: '70+', label: 'Skilled Workforce', icon: '👷' },
  { value: '24/7', label: 'Fiber Operations Support', icon: '🔧' },
  { value: '100+', label: 'FTTH Pole Installations', icon: '⚡' },
  { value: '40+', label: 'Last Mile Sites', icon: '🌐' },
  { value: '20+', label: 'Projects Delivered', icon: '✅' },
];


function PerformanceDashboard() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="perf-dashboard reveal" id="dash-performance" ref={ref}>
      <h3>Performance Dashboard</h3>
      <div className="perf-grid">
        {performanceMetrics.map((m, i) => (
          <div
            className={`perf-metric${started ? ' animate' : ''}`}
            key={i}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="perf-icon">{m.icon}</span>
            <span className="perf-value">{m.value}</span>
            <span className="perf-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [showMainDashboard, setShowMainDashboard] = useState(false);

  useEffect(() => {
    setShowMainDashboard(sessionStorage.getItem('showMainDashboard') === 'true');
  }, []);

  if (!showMainDashboard) return null;

  return (
    <section className="dashboard" id="dashboard" aria-label="DH-INFRA Overview" style={{ paddingTop: '20px' }}>
      <PerformanceDashboard />
    </section>
  );
}

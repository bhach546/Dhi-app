import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Services from './components/Services/Services';
import Solutions from './components/Solutions/Solutions';
import Projects from './components/Projects/Projects';
import Infrastructure from './components/Infrastructure/Infrastructure';
import QualitySafety from './components/QualitySafety/QualitySafety';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Scroll reveal using IntersectionObserver
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Services />
        <Solutions />
        <Projects />
        <Infrastructure />
        <QualitySafety />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

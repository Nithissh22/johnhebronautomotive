import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Facilities from './components/Facilities';
import Analytics from './components/Analytics';
import Products from './components/Products';
import Quality from './components/Quality';
import Customers from './components/Customers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    // Intersection observer for fade-up animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = parent?.querySelectorAll('.fade-up') || [];
          const siblingIndex = Array.from(siblings).indexOf(entry.target);
          const delay = siblingIndex >= 0 ? siblingIndex * 100 : i * 100;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Number counter animations
    function animateCounter(element: any, target: number, duration = 2000) {
      let current = 0;
      const increment = target / (duration / 16);
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target;
          clearInterval(interval);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    }

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNum = entry.target.querySelector('.stat-num');
          if (statNum && !statNum.hasAttribute('data-animated')) {
            statNum.setAttribute('data-animated', 'true');
            const text = statNum.textContent;
            const match = text?.match(/\d+/);
            if (match) animateCounter(statNum, parseInt(match[0]));
          }
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.hero-stat-card').forEach(el => statObserver.observe(el));
    
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Facilities />
      <Analytics />
      <Products />
      <Quality />
      <Customers />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;

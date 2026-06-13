

export default function Hero() {
  return (
    <section id="hero">
  <img className="hero-video" src="Pictures%20from%20Hebron/cnc-worker-bg.png" alt="CNC Worker Background" />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <div className="hero-left">
      <div className="hero-badge">
        Established 2019 · Hosur, Tamil Nadu
      </div>
      <h1 className="hero-h1">HEBRON AUTOMOTIVE<br />
        Precision <span className="accent">Die Casting</span><br />
        Excellence in<br />
        Every Component
      </h1>
      <p className="hero-desc">
        Hebron Automotive Products Pvt. Ltd. specialises in Aluminium Pressure Die Casting, Gravity Die Casting, and Powder Coating — delivering world-class quality to automotive & engineering sectors globally.
      </p>
      <div className="hero-certs">
        <span className="hero-cert">IATF 16949:2016</span>
        <span className="hero-cert">ISO 9001:2015</span>
        <span className="hero-cert">ISO 14001:2015</span>
      </div>
      <div className="hero-btns">
        <a href="#contact" className="btn-primary">Get in Touch →</a>
        <a href="#facilities" className="btn-outline">View Facilities</a>
      </div>
    </div>
    <div className="hero-right">
      <div className="hero-stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
        </div>
        <div>
          <div className="stat-num">₹41 Cr</div>
          <div className="stat-label">Annual Turnover</div>
        </div>
      </div>
      <div className="hero-stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        </div>
        <div>
          <div className="stat-num">120+</div>
          <div className="stat-label">Skilled Employees</div>
        </div>
      </div>
      <div className="hero-stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm4-10H8V5h8v2z"/></svg>
        </div>
        <div>
          <div className="stat-num">7+</div>
          <div className="stat-label">PDC & GDC Lines Active</div>
        </div>
      </div>
      <div className="hero-stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
        </div>
        <div>
          <div className="stat-num">3×</div>
          <div className="stat-label">International Certifications</div>
        </div>
      </div>
    </div>
  </div>
  <div className="scroll-ind">
    <span>Scroll</span>
    <div className="scroll-ind-line"></div>
  </div>
</section>
  );
}
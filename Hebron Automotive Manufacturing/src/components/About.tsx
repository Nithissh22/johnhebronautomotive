

export default function About() {
  return (
    <section id="about">
  <div className="container">
    <div className="about-grid">
      <div className="about-img-stack fade-up">
        <div className="about-img-main">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" alt="Manufacturing facility" loading="lazy"/>
        </div>
        <div className="about-img-accent">
          <img src="/Pictures from Hebron/quality-control.png" alt="Quality control" loading="lazy"/>
        </div>
        <div className="about-founded">
          <div className="yr">2019</div>
          <div className="lbl">Founded</div>
        </div>
      </div>
      <div className="fade-up">
        <div className="section-tag">Who We Are</div>
        <h2 className="section-h2">Built on <span className="accent">Precision,</span><br />Driven by Quality</h2>
        <div className="divider"></div>
        <p className="section-desc">Hebron Automotive Products Pvt. Ltd., based in Hosur, Tamil Nadu, is a certified manufacturer of aluminium die casting, gravity die casting, and powder-coated automotive & engineering components. Since 2019, we have grown rapidly into a trusted partner for India's leading automotive OEMs and Tier-1 suppliers.</p>
        <div className="about-kpis">
          <div className="about-kpi">
            <div className="num">₹41 Cr</div>
            <div className="lbl">Annual Turnover</div>
          </div>
          <div className="about-kpi">
            <div className="num">120+</div>
            <div className="lbl">Employees</div>
          </div>
          <div className="about-kpi">
            <div className="num">IATF</div>
            <div className="lbl">16949:2016 Certified</div>
          </div>
          <div className="about-kpi">
            <div className="num">34%</div>
            <div className="lbl">Free Capacity Available</div>
          </div>
        </div>
      </div>
    </div>
    <div className="fade-up" style={{ marginTop: "4rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        <div style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1rem" }}>Our Vision</h3>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>To be the "Best in Class" for the supply of Aluminum Die casting components to the Automobile & General Engineering manufacturing sectors.</p>
        </div>
        <div style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1rem" }}>Our Mission</h3>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>To be a leader by ensuring customer delight through world-class quality and delivery at competitive prices while working in a progressive, innovative, and challenging environment.</p>
        </div>
        <div style={{ background: "var(--gray-50)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--gray-200)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1rem" }}>Quality Policy</h3>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>Total customer satisfaction, prevention of pollution, and minimizing risk as low as possible through continual improvement in products, process delivery, and safety.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
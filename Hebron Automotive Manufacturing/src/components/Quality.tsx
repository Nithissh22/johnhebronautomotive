

export default function Quality() {
  return (
    <section id="quality">
  <div className="container">
    <div className="quality-grid">
      <div className="fade-up">
        <div className="section-tag">Quality Policy</div>
        <h2 className="section-h2">Zero Defect <span className="accent">Mindset</span></h2>
        <div className="divider"></div>
        <p className="section-desc">Our quality management system is built on prevention, continual improvement, and absolute customer satisfaction — underpinned by internationally recognised certifications.</p>
        <div className="quality-list">
          <div className="quality-item">
            <div className="quality-num">01</div>
            <div className="quality-text">
              <h4>Vision</h4>
              <p>To be "Best in Class" for supply of Aluminium Die Casting components to Automobile & General Engineering sectors.</p>
            </div>
          </div>
          <div className="quality-item">
            <div className="quality-num">02</div>
            <div className="quality-text">
              <h4>Mission</h4>
              <p>Lead through customer delight with world-class quality and competitive delivery in a progressive, innovative environment.</p>
            </div>
          </div>
          <div className="quality-item">
            <div className="quality-num">03</div>
            <div className="quality-text">
              <h4>Core Values</h4>
              <p>Personal Integrity, Social Responsibility, Trust, Accountability, Teamwork, Knowledge Enhancement & Value Creation.</p>
            </div>
          </div>
          <div className="quality-item">
            <div className="quality-num">04</div>
            <div className="quality-text">
              <h4>Quality Commitment</h4>
              <p>Total customer satisfaction, pollution prevention, and risk minimisation through continual improvement in products, processes, delivery, and safety.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-up">
        <div className="cert-cards">
          <div className="cert-card">
            <div className="c-icon">🏆</div>
            <div className="c-name">IATF 16949:2016</div>
            <div className="c-sub">Automotive Quality Management</div>
          </div>
          <div className="cert-card">
            <div className="c-icon">✅</div>
            <div className="c-name">ISO 9001:2015</div>
            <div className="c-sub">Quality Management System</div>
          </div>
          <div className="cert-card">
            <div className="c-icon">🌿</div>
            <div className="c-name">ISO 14001:2015</div>
            <div className="c-sub">Environmental Management</div>
          </div>
          <div className="cert-card" style={{ background: "linear-gradient(135deg,#065A82 0%,#1a4fd6 100%)" }}>
            <div className="c-icon">🔬</div>
            <div className="c-name">X-Ray CT Analysis</div>
            <div className="c-sub">Planned March 2026 (DX160/DX225)</div>
          </div>
        </div>
        <div style={{ background: "var(--blue-xpale)", borderRadius: "14px", padding: "28px", marginTop: "20px", border: "1px solid var(--blue-pale)" }}>
          <h4 style={{ fontSize: "1rem", fontWeight: 900, color: "var(--gray-900)", marginBottom: "12px" }}>Material Traceability Flow</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}><span style={{ width: "28px", height: "28px", background: "var(--blue-light)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}>1</span>Raw Material Receipt → Chemical & Mechanical Check</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}><span style={{ width: "28px", height: "28px", background: "var(--blue-light)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}>2</span>Casting & Machining (Trimming, Vibro Deburring)</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}><span style={{ width: "28px", height: "28px", background: "var(--blue-light)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}>3</span>ID Tapping & Bush Assembly</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}><span style={{ width: "28px", height: "28px", background: "var(--blue-light)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}>4</span>Powder Coating Process</div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}><span style={{ width: "28px", height: "28px", background: "var(--blue)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}>5</span>Dispatch with Material Test Reports & Inspection</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
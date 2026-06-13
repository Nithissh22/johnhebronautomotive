

export default function Customers() {
  return (
    <section id="customers">
  <div className="container">
    <div style={{ textAlign: "center" }} className="fade-up">
      <div className="section-tag">Trusted By</div>
      <h2 className="section-h2">Our <span className="accent">Customers</span></h2>
      <div className="divider" style={{ margin: "1.2rem auto" }}></div>
      <p className="section-desc" style={{ margin: "0 auto" }}>We proudly serve leading OEMs and Tier-1 automotive suppliers across India with consistent quality and on-time delivery.</p>
    </div>
    <div className="customers-row fade-up" style={{ justifyContent: "center", marginTop: "2.5rem" }}>
      <div className="cust-chip" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://gabrielindia.com&size=128" alt="Gabriel India" style={{ height: '24px', width: '24px', objectFit: 'contain' }} />
        Gabriel India
      </div>
      <div className="cust-chip" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hitachiastemo.com&size=128" alt="Hitachi Astemo" style={{ height: '24px', width: '24px', objectFit: 'contain' }} />
        Hitachi Astemo
      </div>
      <div className="cust-chip" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hitachi.com&size=128" alt="Rajasthan Brake Systems" style={{ height: '24px', width: '24px', objectFit: 'contain' }} />
        Rajasthan Brake Systems
      </div>
    </div>
    <div style={{ marginTop: "3rem" }} className="fade-up">
      <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--gray-700)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem", textAlign: "center" }}>Our Approved End Customers</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "2.5rem" }}>
        {[
          { name: "TVS Motor", logo: "/Pictures from Hebron/logos/tvs.png" },
          { name: "Honda", logo: "/Pictures from Hebron/logos/honda.png" },
          { name: "Royal Enfield", logo: "/Pictures from Hebron/logos/royal-enfield.png" },
          { name: "Mahindra", logo: "/Pictures from Hebron/logos/mahindra.png" },
          { name: "Ather Energy", logo: "/Pictures from Hebron/logos/ather.svg" },
          { name: "Yamaha", logo: "/Pictures from Hebron/logos/yamaha.png" },
          { name: "Jawa", logo: "/Pictures from Hebron/logos/jawa.png" },
          { name: "Ola Electric", logo: "/Pictures from Hebron/logos/ola.svg" },
        ].map((c) => (
          <div key={c.name} style={{
            background: "white", border: "1px solid var(--gray-200)", borderRadius: "16px",
            padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: "14px", transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            cursor: "default", minHeight: "160px"
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px) scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(37,99,235,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--blue-light)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; (e.currentTarget as HTMLElement).style.borderColor = ""; }}
          >
            <img src={c.logo} alt={c.name} style={{ height: c.name === "Ola Electric" ? "35px" : "70px", maxWidth: c.name === "Ola Electric" ? "100px" : "160px", objectFit: "contain", filter: "grayscale(20%)", transition: "filter 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(20%)")}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--gray-600)", textAlign: "center" }}>{c.name}</span>
          </div>
        ))}
      </div>
      <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--gray-700)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Approved End Customer Plants</h3>
      <div className="end-cust-row">
        <div className="end-cust-chip">Gabriel — Hosur Main Plant</div>
        <div className="end-cust-chip">Gabriel — Satellite Plant, Hosur</div>
        <div className="end-cust-chip">Gabriel — Parwanoo Plant</div>
        <div className="end-cust-chip">Gabriel — Nashik</div>
        <div className="end-cust-chip">Hitachi Astemo — Tumkur</div>
        <div className="end-cust-chip">Rajasthan Brake Systems — Tumkur</div>
      </div>
    </div>
    <div style={{ marginTop: "3rem", background: "linear-gradient(135deg,var(--blue-dark) 0%,var(--blue-light) 100%)", borderRadius: "16px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }} className="fade-up">
      <div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}>Free Production Capacity</div>
        <div style={{ color: "white", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}>34%</div>
        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: "4px" }}>Available for new orders immediately</div>
      </div>
      <a href="#contact" className="btn-primary" style={{ background: "white", color: "var(--blue-dark)" }}>Enquire Now →</a>
    </div>
  </div>
</section>
  );
}
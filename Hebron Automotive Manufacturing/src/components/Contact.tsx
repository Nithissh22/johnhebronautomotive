import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const sendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('femail') as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem('fcompany') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('fphone') as HTMLInputElement).value.trim();
    const type = (form.elements.namedItem('ftype') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('fmessage') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setStatusType('error');
      setStatus('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatusType('');
    setStatus('Sending…');

    const body = `Name: ${name}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\nEnquiry: ${type || 'General'}\n\nMessage:\n${message}`;
    const subject = encodeURIComponent(`Website Enquiry from ${name} — Hebron Automotive`);
    const bodyEnc = encodeURIComponent(body);

    try {
      const res = await fetch('https://formspree.io/f/xeojklnp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, company, phone, enquiry: type, message, _replyto: email })
      });
      if (res.ok) {
        setStatusType('success');
        setStatus('✅ Message sent! We will get back to you shortly.');
        form.reset();
        return;
      }
    } catch(e) {}

    window.location.href = `mailto:hebronautomotive@gmail.com?subject=${subject}&body=${bodyEnc}`;
    setStatusType('success');
    setStatus('✅ Your email client has been opened. Please send the pre-filled message.');
  };

  return (
    <section id="contact">
  <div className="container">
    <div className="fade-up">
      <div className="section-tag">Get In Touch</div>
      <h2 className="section-h2">Let's Work <span style={{ color: "#60a5fa" }}>Together</span></h2>
      <div className="divider"></div>
      <p className="section-desc">Reach out to discuss your component requirements, capacity planning, or partnership opportunities.</p>
    </div>
    <div className="contact-grid">
      <div className="contact-info fade-up">
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div>
            <div className="contact-label">Address</div>
            <div className="contact-val">No. 3/250, Bharathiyar Nagar, Avalapalli Road,<br />Hosur - 635 109, Krishnagiri Dist., Tamil Nadu</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </div>
          <div>
            <div className="contact-label">Phone</div>
            <div className="contact-val"><a href="tel:+919442619772">+91 94426 19772</a><br />Mr. N. Kumar — Managing Director</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-val"><a href="mailto:hebronautomotive@gmail.com">hebronautomotive@gmail.com</a></div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
          </div>
          <div>
            <div className="contact-label">GSTIN</div>
            <div className="contact-val">33AAECH6875K1Z6</div>
          </div>
        </div>
        <div style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "12px", padding: "20px", marginTop: "8px" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Website</div>
          <a href="http://www.hebronautomotive.com" target="_blank" style={{ color: "#93c5fd", fontWeight: 700, textDecoration: "none" }}>www.hebronautomotive.com</a>
        </div>
        <div style={{ marginTop: "16px", borderRadius: "12px", overflow: "hidden", height: "250px", border: "1px solid rgba(37,99,235,0.3)" }}>
          <iframe 
            src="https://maps.google.com/maps?q=Hebron+Automotive,+Hosur,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hebron Automotive Location Map"
          ></iframe>
        </div>
      </div>
      <form className="contact-form fade-up" onSubmit={sendMail}>
        <h3 style={{ color: "white", fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Send us a Message</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" id="fname" placeholder="Your name" required style={{ color: "white", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255, 255, 255, 0.3)" }}/>
          </div>
          <div className="form-group">
            <label>Company</label>
            <input type="text" id="fcompany" placeholder="Your company" style={{ color: "white", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255, 255, 255, 0.3)" }}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" id="femail" placeholder="your@email.com" required/>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" id="fphone" placeholder="+91 XXXXX XXXXX"/>
          </div>
        </div>
        <div className="form-group">
          <label>Enquiry Type</label>
          <select id="ftype">
            <option value="">Select enquiry type</option>
            <option>New Component Requirements</option>
            <option>Capacity & Production Enquiry</option>
            <option>Quality / Certifications</option>
            <option>Partnership / Supplier Registration</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message *</label>
          <textarea id="fmessage" placeholder="Describe your requirements or query in detail..." required></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>
          Send Message →
        </button>
        <div id="form-status" className={statusType} style={{display: status ? "block" : "none"}}>{status}</div>
      </form>
    </div>
  </div>
</section>
  );
}
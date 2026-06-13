import React, { useState } from 'react';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternshipModal({ isOpen, onClose }: InternshipModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Internship Application - ${data.fullName}`;
    const body = `Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Qualification: ${data.qualification}
Year of Passing: ${data.year}
Area of Interest: ${data.interest}

Why intern here?
${data.reason}

*** Please remember to attach your resume file before sending this email! ***
    `;

    window.location.href = `mailto:hebronautomotive@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem', borderRadius: '8px', 
    border: '1px solid var(--gray-200)', background: 'var(--gray-50)', 
    outline: 'none', color: 'black'
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(4px)'
    }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
        background: 'white', padding: '2.5rem', borderRadius: '20px',
        width: '90%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '20px', background: 'transparent',
          border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b'
        }}>×</button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: '1rem' }}>Your Application is submitted successfully!</h3>
            <p style={{ color: 'var(--gray-600)', lineHeight: 1.6 }}>Your email client has been opened. Please attach your resume to the email and send it. Our HR team will review your eligibility and contact you shortly.</p>
            <button onClick={onClose} className="submit-btn" style={{ marginTop: '2rem', width: '100%', padding: '1rem', background: 'var(--blue)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>Close</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: '0.5rem' }}>Internship Application</h3>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Fill out the details below to check your eligibility.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Full Name *</label>
                <input type="text" name="fullName" required style={inputStyle} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Email Address *</label>
                  <input type="email" name="email" required style={inputStyle} />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Phone Number *</label>
                  <input type="tel" name="phone" required style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Educational Qualification *</label>
                  <select name="qualification" required style={inputStyle}>
                    <option value="">Select Degree</option>
                    <option value="B.Tech Mechanical">B.Tech Mechanical</option>
                    <option value="B.Tech Automotive">B.Tech Automotive</option>
                    <option value="B.Tech Industrial">B.Tech Industrial</option>
                    <option value="Diploma in Engineering">Diploma in Engineering</option>
                    <option value="BBA / MBA">BBA / MBA</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Year of Passing *</label>
                  <select name="year" required style={inputStyle}>
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Area of Interest *</label>
                <select name="interest" required style={inputStyle}>
                  <option value="">Select Area</option>
                  <option value="Quality Control">Quality Control</option>
                  <option value="Production & Die Casting">Production & Die Casting</option>
                  <option value="Machining & Tool Room">Machining & Tool Room</option>
                  <option value="Operations Management">Operations Management</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Upload Resume (PDF/Doc) *</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required style={{ ...inputStyle, background: 'white', padding: '0.5rem' }} />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-700)', marginBottom: '0.3rem' }}>Why do you want to intern here? *</label>
                <textarea name="reason" rows={3} required style={{ ...inputStyle, resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="submit-btn" style={{ marginTop: '0.5rem', width: '100%', padding: '1rem', background: 'var(--blue)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', transition: '0.3s' }}>Check Eligibility & Apply</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

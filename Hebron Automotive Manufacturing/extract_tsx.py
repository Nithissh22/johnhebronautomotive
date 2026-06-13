import re
import os

with open('hebron-automotive.html', 'r', encoding='utf-8') as f:
    html = f.read()

def to_jsx(html_str):
    # Basic HTML to JSX conversions
    s = html_str.replace('class=', 'className=')
    s = s.replace('for=', 'htmlFor=')
    # Close unclosed tags
    s = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', s)
    s = re.sub(r'<input(.*?)(?<!/)>', r'<input\1 />', s)
    s = re.sub(r'<circle(.*?)(?<!/)>', r'<circle\1 />', s)
    s = re.sub(r'<path(.*?)(?<!/)>', r'<path\1 />', s)
    # Fix inline styles (very simplistic, might need manual fix)
    s = s.replace('style="text-align:center"', 'style={{ textAlign: "center" }}')
    s = s.replace('style="margin:1.2rem auto 0"', 'style={{ margin: "1.2rem auto 0" }}')
    s = s.replace('style="color:#60a5fa"', 'style={{ color: "#60a5fa" }}')
    s = s.replace('style="background:linear-gradient(135deg,#065A82 0%,#1a4fd6 100%)"', 'style={{ background: "linear-gradient(135deg,#065A82 0%,#1a4fd6 100%)" }}')
    s = s.replace('style="background:var(--blue-xpale);border-radius:14px;padding:28px;margin-top:20px;border:1px solid var(--blue-pale)"', 'style={{ background: "var(--blue-xpale)", borderRadius: "14px", padding: "28px", marginTop: "20px", border: "1px solid var(--blue-pale)" }}')
    s = s.replace('style="font-size:1rem;font-weight:900;color:var(--gray-900);margin-bottom:12px"', 'style={{ fontSize: "1rem", fontWeight: 900, color: "var(--gray-900)", marginBottom: "12px" }}')
    s = s.replace('style="display:flex;flex-direction:column;gap:8px"', 'style={{ display: "flex", flexDirection: "column", gap: "8px" }}')
    s = s.replace('style="display:flex;align-items:center;gap:10px;font-size:0.83rem;color:var(--gray-700)"', 'style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.83rem", color: "var(--gray-700)" }}')
    s = s.replace('style="width:28px;height:28px;background:var(--blue-light);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.75rem;flex-shrink:0"', 'style={{ width: "28px", height: "28px", background: "var(--blue-light)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}')
    s = s.replace('style="width:28px;height:28px;background:var(--blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:0.75rem;flex-shrink:0"', 'style={{ width: "28px", height: "28px", background: "var(--blue)", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", flexShrink: 0 }}')
    s = s.replace('style="margin:1.2rem auto"', 'style={{ margin: "1.2rem auto" }}')
    s = s.replace('style="margin:0 auto"', 'style={{ margin: "0 auto" }}')
    s = s.replace('style="justify-content:center;margin-top:2.5rem"', 'style={{ justifyContent: "center", marginTop: "2.5rem" }}')
    s = s.replace('style="margin-top:3rem"', 'style={{ marginTop: "3rem" }}')
    s = s.replace('style="font-size:1rem;font-weight:800;color:var(--gray-700);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1rem"', 'style={{ fontSize: "1rem", fontWeight: 800, color: "var(--gray-700)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}')
    s = s.replace('style="margin-top:3rem;background:linear-gradient(135deg,var(--blue-dark) 0%,var(--blue-light) 100%);border-radius:16px;padding:40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px"', 'style={{ marginTop: "3rem", background: "linear-gradient(135deg,var(--blue-dark) 0%,var(--blue-light) 100%)", borderRadius: "16px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}')
    s = s.replace('style="color:rgba(255,255,255,0.7);font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;margin-bottom:6px"', 'style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: "6px" }}')
    s = s.replace('style="color:white;font-size:2.4rem;font-weight:900;line-height:1"', 'style={{ color: "white", fontSize: "2.4rem", fontWeight: 900, lineHeight: 1 }}')
    s = s.replace('style="color:rgba(255,255,255,0.75);font-size:0.9rem;margin-top:4px"', 'style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", marginTop: "4px" }}')
    s = s.replace('style="background:white;color:var(--blue-dark)"', 'style={{ background: "white", color: "var(--blue-dark)" }}')
    s = s.replace('style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.3);border-radius:12px;padding:20px;margin-top:8px"', 'style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "12px", padding: "20px", marginTop: "8px" }}')
    s = s.replace('style="color:rgba(255,255,255,0.5);font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px"', 'style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}')
    s = s.replace('style="color:#93c5fd;font-weight:700;text-decoration:none"', 'style={{ color: "#93c5fd", fontWeight: 700, textDecoration: "none" }}')
    s = s.replace('style="color:white;font-size:1.2rem;font-weight:800;margin-bottom:1.5rem"', 'style={{ color: "white", fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem" }}')
    s = s.replace('style="color:white;background:rgba(255,255,255,0.1);border:1px solid rgba(255, 255, 255, 0.3);"', 'style={{ color: "white", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255, 255, 255, 0.3)" }}')
    s = s.replace('style="width:100%;justify-content:center;font-size:1rem"', 'style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}')
    s = s.replace('style="margin-top:8px"', 'style={{ marginTop: "8px" }}')
    s = s.replace('fill-opacity', 'fillOpacity')
    s = s.replace('stroke-width', 'strokeWidth')
    
    # Remove script events (we will wire them up in React)
    s = re.sub(r'onclick=".*?"', '', s)
    s = re.sub(r'onkeypress=".*?"', '', s)
    
    # Fix remaining inputs
    s = s.replace('required>', 'required />')
    return s

os.makedirs('src/components', exist_ok=True)

sections = [
    ("Navbar", r'<!-- NAVBAR -->(.*?)<!-- HERO -->'),
    ("Hero", r'<!-- HERO -->(.*?)<!-- ABOUT -->'),
    ("About", r'<!-- ABOUT -->(.*?)<!-- JOURNEY -->'),
    ("Journey", r'<!-- JOURNEY -->(.*?)<!-- FACILITIES -->'),
    ("Facilities", r'<!-- FACILITIES -->(.*?)<!-- PRODUCTS -->'),
    ("Products", r'<!-- PRODUCTS -->(.*?)<!-- QUALITY -->'),
    ("Quality", r'<!-- QUALITY -->(.*?)<!-- CUSTOMERS -->'),
    ("Customers", r'<!-- CUSTOMERS -->(.*?)<!-- GALLERY -->'),
    ("Gallery", r'<!-- GALLERY -->(.*?)<!-- CONTACT -->'),
    ("Contact", r'<!-- CONTACT -->(.*?)<!-- FOOTER -->'),
    ("Footer", r'<!-- FOOTER -->(.*?)<script>'),
    ("Chatbot", r'<!-- HEBRO CHATBOT -->(.*?)</body>')
]

for name, pattern in sections:
    match = re.search(pattern, html, re.DOTALL)
    if match:
        content = to_jsx(match.group(1).strip())
        
        # Specific component wrap
        if name == "Navbar":
            content = f"""import React, {{ useState, useEffect }} from 'react';

export default function {name}() {{
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {{
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }}, []);

  return (
    <>
      <nav id="navbar" className={{scrolled ? 'scrolled' : ''}}>
        {content.split('<div className="mobile-menu"')[0].replace('<div className="hamburger" id="hamburger" >', '<div className="hamburger" id="hamburger" onClick={() => setIsOpen(!isOpen)}>')}
      </nav>
      <div className={{"mobile-menu " + (isOpen ? "open" : "")}} id="mobileMenu">
        <a href="#about" onClick={{() => setIsOpen(false)}}>About</a>
        <a href="#journey" onClick={{() => setIsOpen(false)}}>Journey</a>
        <a href="#facilities" onClick={{() => setIsOpen(false)}}>Facilities</a>
        <a href="#products" onClick={{() => setIsOpen(false)}}>Products</a>
        <a href="#quality" onClick={{() => setIsOpen(false)}}>Quality</a>
        <a href="#customers" onClick={{() => setIsOpen(false)}}>Customers</a>
        <a href="#gallery" onClick={{() => setIsOpen(false)}}>Gallery</a>
        <a href="#contact" onClick={{() => setIsOpen(false)}}>Contact Us</a>
      </div>
    </>
  );
}}"""
        elif name == "Chatbot":
            content = f"""import React, {{ useState, useRef, useEffect }} from 'react';

export default function {name}() {{
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{{ text: "Hi! I'm Hebro, your virtual assistant. How can I help you today?", isBot: true }}]);
  const [input, setInput] = useState('');
  const msgEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {{
    if (!input.trim()) return;
    setMessages(prev => [...prev, {{ text: input, isBot: false }}]);
    setInput('');
    setTimeout(() => {{
      setMessages(prev => [...prev, {{ text: "Thanks for reaching out! Our team will get back to you shortly. You can also reach us at +91 94426 19772.", isBot: true }}]);
    }}, 1000);
  }};

  useEffect(() => {{
    msgEndRef.current?.scrollIntoView({{ behavior: 'smooth' }});
  }}, [messages, isOpen]);

  return (
    <div id="hebro-chatbot">
      <div id="hebro-chat-window" className={{isOpen ? '' : 'hidden'}}>
        <div className="hebro-header">
          <div className="hebro-title">
            <span className="hebro-avatar">🤖</span> Hebro
          </div>
          <button onClick={{() => setIsOpen(false)}} className="hebro-close">×</button>
        </div>
        <div className="hebro-body" id="hebro-messages">
          {{messages.map((msg, i) => (
            <div key={{i}} className={{`hebro-msg ${{msg.isBot ? 'bot' : 'user'}}`}}>{{msg.text}}</div>
          ))}}
          <div ref={{msgEndRef}} />
        </div>
        <div className="hebro-input-area">
          <input type="text" id="hebro-input" placeholder="Type a message..." value={{input}} onChange={{e => setInput(e.target.value)}} onKeyPress={{e => e.key === 'Enter' && sendMessage()}} />
          <button onClick={{sendMessage}}>Send</button>
        </div>
      </div>
      <button id="hebro-toggle" onClick={{() => setIsOpen(!isOpen)}}>
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
      </button>
    </div>
  );
}}"""
        elif name == "Contact":
             content = f"""import React, {{ useState }} from 'react';

export default function {name}() {{
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const sendMail = async (e: React.FormEvent) => {{
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('femail') as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem('fcompany') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('fphone') as HTMLInputElement).value.trim();
    const type = (form.elements.namedItem('ftype') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('fmessage') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {{
      setStatusType('error');
      setStatus('Please fill in all required fields (Name, Email, Message).');
      return;
    }}

    setStatusType('');
    setStatus('Sending…');

    const body = `Name: ${{name}}\\nCompany: ${{company || 'N/A'}}\\nPhone: ${{phone || 'N/A'}}\\nEnquiry: ${{type || 'General'}}\\n\\nMessage:\\n${{message}}`;
    const subject = encodeURIComponent(`Website Enquiry from ${{name}} — Hebron Automotive`);
    const bodyEnc = encodeURIComponent(body);

    try {{
      const res = await fetch('https://formspree.io/f/xeojklnp', {{
        method: 'POST',
        headers: {{ 'Content-Type': 'application/json', 'Accept': 'application/json' }},
        body: JSON.stringify({{ name, email, company, phone, enquiry: type, message, _replyto: email }})
      }});
      if (res.ok) {{
        setStatusType('success');
        setStatus('✅ Message sent! We will get back to you shortly.');
        form.reset();
        return;
      }}
    }} catch(e) {{}}

    window.location.href = `mailto:johnvijulancodemeshflow@gmail.com?subject=${{subject}}&body=${{bodyEnc}}`;
    setStatusType('success');
    setStatus('✅ Your email client has been opened. Please send the pre-filled message.');
  }};

  return (
    {content.replace('<button className="btn-primary"  style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>', '<button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>').replace('<div id="form-status"></div>', '<div id="form-status" className={statusType} style={{display: status ? "block" : "none"}}>{status}</div>').replace('<div className="contact-form fade-up">', '<form className="contact-form fade-up" onSubmit={sendMail}>').replace('</button>\n        <div id="form-status"', '</button>\n        <div id="form-status"').replace('</div>\n    </div>\n  </div>\n</section>', '</form>\n    </div>\n  </div>\n</section>')}
  );
}}"""
        else:
            content = f"""import React from 'react';

export default function {name}() {{
  return (
    {content}
  );
}}"""
        
        with open(f'src/components/{name}.tsx', 'w', encoding='utf-8') as cf:
            cf.write(content)

print("Created components!")

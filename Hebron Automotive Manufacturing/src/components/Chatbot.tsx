import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! I'm Hebro, your virtual assistant. How can I help you today?", isBot: true }]);
  const [input, setInput] = useState('');
  const msgEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for reaching out! Our team will get back to you shortly. You can also reach us at +91 94426 19772.", isBot: true }]);
    }, 1000);
  };

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  return (
    <div id="hebro-chatbot">
      <div id="hebro-chat-window" className={isOpen ? '' : 'hidden'}>
        <div className="hebro-header">
          <div className="hebro-title">
            <span className="hebro-avatar">🤖</span> Hebro
          </div>
          <button onClick={() => setIsOpen(false)} className="hebro-close">×</button>
        </div>
        <div className="hebro-body" id="hebro-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`hebro-msg ${msg.isBot ? 'bot' : 'user'}`}>{msg.text}</div>
          ))}
          <div ref={msgEndRef} />
        </div>
        <div className="hebro-input-area">
          <input type="text" id="hebro-input" placeholder="Type a message..." value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && sendMessage()} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <button id="hebro-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
      </button>
    </div>
  );
}
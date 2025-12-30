import './StaticPage.css';
import { useState } from 'react';

export default function Contact() {
  const [topic, setTopic] = useState('private');

  return (
    <div className="static-page">
      <div className="container">
        <h1>Kontakt</h1>
        <p className="lead">Hast du Fragen oder möchtest mit uns zusammenarbeiten? Wir freuen uns auf deine Nachricht!</p>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Deine Nachricht wurde gesendet.'); }}>
          <div className="form-group">
            <label className="label">Name *</label>
            <input type="text" className="input" required />
          </div>
          <div className="form-group">
            <label className="label">E-Mail *</label>
            <input type="email" className="input" required />
          </div>
          <div className="form-group">
            <label className="label">Betreff</label>
            <select className="input" value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value="private">Privatanfrage</option>
              <option value="studio">Studio / Praxis</option>
              <option value="retail">Einzelhandel / Wholesale</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label">Nachricht *</label>
            <textarea className="input textarea" required></textarea>
          </div>
          <button type="submit" className="btn btn--primary btn--lg">Absenden</button>
        </form>
      </div>
    </div>
  );
}
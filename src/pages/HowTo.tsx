import './StaticPage.css';

export default function HowTo() {
  const steps = [
    { step: 1, title: 'Reinige dein Gesicht', desc: 'Beginne mit einem sauberen Gesicht. Entferne Make-up und reinige deine Haut gründlich.' },
    { step: 2, title: 'Trage Öl oder Serum auf', desc: 'Massiere großzügig Gesichtsöl oder Serum ein, damit der Gua Sha sanft gleiten kann.' },
    { step: 3, title: 'Starte am Hals', desc: 'Beginne am Hals mit aufwärts streichenden Bewegungen Richtung Kinn.' },
    { step: 4, title: 'Arbeite dich nach oben', desc: 'Massiere Kinn, Wangen, Augenpartie und Stirn – immer von der Mitte nach außen.' },
    { step: 5, title: 'Wiederhole jede Bewegung', desc: 'Führe jede Streichbewegung 3-5 Mal aus für optimale Ergebnisse.' },
  ];

  return (
    <div className="static-page">
      <div className="container">
        <h1>Dein Gua Sha Ritual</h1>
        <p className="lead">Lerne die traditionelle Technik der Gesichtsmassage und bringe deine Haut zum Strahlen.</p>
        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.step} className="step-card">
              <span className="step-number">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
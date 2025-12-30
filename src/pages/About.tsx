import './StaticPage.css';

export default function About() {
  return (
    <div className="static-page">
      <div className="container">
        <h1>Über MYGUASHA</h1>
        <p className="lead">Wir glauben an die Kraft der Slow Beauty und traditioneller Selfcare-Rituale.</p>
        <div className="content-block">
          <h2>Unsere Mission</h2>
          <p>MYGUASHA wurde gegründet, um die jahrtausendealte Tradition des Gua Sha in die moderne Selfcare-Routine zu bringen. Wir sind überzeugt, dass wahre Schönheit von innen kommt – und dass ein tägliches Ritual der Selbstfürsorge der Schlüssel dazu ist.</p>
        </div>
        <div className="content-block">
          <h2>Unsere Werte</h2>
          <ul>
            <li><strong>Qualität:</strong> Nur echte Edelsteine aus ethischen Quellen</li>
            <li><strong>Nachhaltigkeit:</strong> Umweltfreundliche Verpackungen</li>
            <li><strong>Transparenz:</strong> Klare Herkunft aller Materialien</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
import './StaticPage.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="static-page">
      <div className="container">
        <h1>Journal</h1>
        <p className="lead">Tipps, Tricks und Wissenswertes rund um Gua Sha und Selfcare.</p>
        <div className="coming-soon">
          <span>🌿</span>
          <h2>Bald verfügbar</h2>
          <p>Unser Blog wird in Kürze mit spannenden Artikeln gefüllt. Melde dich für unseren Newsletter an, um nichts zu verpassen!</p>
          <Link to="/" className="btn btn--primary">Zur Startseite</Link>
        </div>
      </div>
    </div>
  );
}
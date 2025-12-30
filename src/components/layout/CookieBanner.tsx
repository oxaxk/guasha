import './CookieBanner.css';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie-Einwilligung">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Wir verwenden nur technisch notwendige Cookies, um dir die beste Erfahrung auf unserer Website zu bieten. 
          Mehr Informationen findest du in unserer{' '}
          <a href="/legal/datenschutz">Datenschutzerklärung</a>.
        </p>
        <div className="cookie-banner__actions">
          <button 
            className="btn btn--primary"
            onClick={acceptCookies}
          >
            Akzeptieren
          </button>
          <button 
            className="btn btn--secondary"
            onClick={declineCookies}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}

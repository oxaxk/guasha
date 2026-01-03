import './Home.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import ProductCard from '@/components/shop/ProductCard';
import { mockProducts, mockCollections } from '@/data/mockData';

const benefits = [
  {
    icon: '01',
    title: 'Abgeschwollene Konturen',
    description:
      'Kalte Oberfläche unterstützt den Lymphfluss – besonders morgens an Augen, Kieferlinie und Wangen.',
  },
  {
    icon: '02',
    title: 'Mehr Struktur im Gesicht',
    description:
      'Regelmäßiges Ausstreichen kann Wasseransammlungen reduzieren und Konturen sichtbarer wirken lassen.',
  },
  {
    icon: '03',
    title: 'Routine in unter 5 Minuten',
    description: 'Kurz zwischen Bad und Schreibtisch einplanbar – ohne Geräte, ohne Termin im Studio.',
  },
  {
    icon: '04',
    title: 'Hygienisch & langlebig',
    description: '304 Edelstahl ist porenfrei, lässt sich desinfizieren und übersteht Jahre ohne Abnutzung.',
  },
];

const ritualSteps = [
  {
    step: 1,
    title: 'Haut vorbereiten',
    description:
      'Gesicht sanft reinigen, dann ein leichtes Öl oder Serum auftragen – die Haut muss gut gleiten, nicht ziehen.',
  },
  {
    step: 2,
    title: 'Hals & Kiefer',
    description:
      'Mit wenig Druck von Schlüsselbein und Hals in Richtung Ohr ausstreichen, nicht hin‑und herreiben.',
  },
  {
    step: 3,
    title: 'Wangen & Augenbereich',
    description:
      'Von der Gesichtsmitte nach außen arbeiten, unter dem Auge nur minimalen Druck verwenden und Bahnen wiederholen.',
  },
  {
    step: 4,
    title: 'Stirn & Abschluss',
    description:
      'Von den Brauen hoch zur Haarlinie ziehen, danach Produktreste mit den Händen einarbeiten – fertig.',
  },
];

const reviews = [
  {
    name: 'Mara',
    text: 'Der Edelstahl-Gua-Sha liegt stabil in der Hand und bleibt lange kühl. Nutze ihn jeden Morgen gegen Schwellung.',
    rating: 5,
  },
  {
    name: 'Elif',
    text:
      'Mit Jade-Tool plus E‑Book bin ich gut reingekommen. Die Abläufe sind klar erklärt und realistisch im Alltag einplanbar.',
    rating: 5,
  },
  {
    name: 'Laura',
    text:
      'Ein paar Minuten am Abend mit dem Rosenquarz-Gua-Sha lösen merkbar Spannung im Kiefer. Genau dafür wollte ich das Tool.',
    rating: 5,
  },
];

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);
  const [activeProductSlide, setActiveProductSlide] = useState(0);
  const productsCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollToProductSlide = (targetIndex: number) => {
    const container = productsCarouselRef.current;
    if (!container) return;

    const maxIndex = featuredProducts.length - 1;
    const clampedIndex = Math.min(Math.max(targetIndex, 0), maxIndex);
    const width = container.clientWidth;

    if (!width) return;

    container.scrollTo({
      left: width * clampedIndex,
      behavior: 'smooth',
    });

    setActiveProductSlide(clampedIndex);
  };

  const handleProductsCarouselScroll = () => {
    const container = productsCarouselRef.current;
    if (!container) return;

    const width = container.clientWidth;
    if (!width) return;

    const index = Math.round(container.scrollLeft / width);
    if (index !== activeProductSlide) {
      setActiveProductSlide(index);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__eyebrow">MYGUASHA · KURATIERTES GUA SHA</span>
            <h1 className="hero__title">Definiere. Jede. Kurve.</h1>
            <p className="hero__subtitle">
              Edelstahl, Jade, Rosenquarz – sauber verarbeitet. Für Schwellung, Spannung und klare Konturen.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn--primary btn--lg" aria-label="Zum Shop">
                Zum Shop
              </Link>
              <Link to="/how-to" className="btn btn--secondary btn--lg" aria-label="Zur Anleitung">
                Anleitung
              </Link>
            </div>
            <div className="hero__trust">
              <Link to="/shop#edelstahl-gua-sha" className="hero__trust-badge hero__trust-badge--link">
                Edelstahl Gua Sha
              </Link>
              <Link to="/shop#jade-gua-sha" className="hero__trust-badge hero__trust-badge--link">
                Jade Gua Sha
              </Link>
              <Link to="/shop#rosenquarz-gua-sha" className="hero__trust-badge hero__trust-badge--link">
                Rosenquarz Gua Sha
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img src={heroImage} alt="Gua Sha Tools auf Leinenstoff" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section home-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kleine Auswahl. Klare Entscheidung.</h2>
            <p className="section-subtitle">
              Drei Tools und ein E‑Book. Alles, was du brauchst – ohne Variantenchaos.
            </p>
          </div>

          <div className="home-products__carousel">
            <button
              type="button"
              className="home-products__arrow home-products__arrow--prev"
              onClick={() => scrollToProductSlide(activeProductSlide - 1)}
              aria-label="Vorheriges Produkt"
              disabled={activeProductSlide === 0}
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div
              className="home-products__carousel-track"
              ref={productsCarouselRef}
              onScroll={handleProductsCarouselScroll}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="home-products__carousel-slide">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="home-products__arrow home-products__arrow--next"
              onClick={() => scrollToProductSlide(activeProductSlide + 1)}
              aria-label="Nächstes Produkt"
              disabled={activeProductSlide === featuredProducts.length - 1}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="home-products__dots">
            {featuredProducts.map((product, index) => (
              <button
                key={product.id}
                type="button"
                className={
                  index === activeProductSlide
                    ? 'home-products__dot home-products__dot--active'
                    : 'home-products__dot'
                }
                onClick={() => scrollToProductSlide(index)}
                aria-label={`Zu Produkt ${index + 1} wechseln`}
              />
            ))}
          </div>

          <div className="home-products__cta">
            <Link to="/shop" className="btn btn--secondary btn--lg">
              Alle Produkte
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Was du erwarten kannst</h2>
            <p className="section-subtitle">
              Realistische Effekte, klar beschrieben. Ohne übertriebene Versprechen.
            </p>
          </div>
          <div className="benefits__grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="benefit-card__icon">{benefit.icon}</span>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Teaser Section */}
      <section className="section ritual-teaser">
        <div className="container">
          <div className="ritual-teaser__content">
            <div className="section-header">
              <h2 className="section-title">4 Schritte. 4 Minuten.</h2>
              <p className="section-subtitle">
                Ein Ablauf, den du morgens oder abends durchziehst – ohne Aufwand, ohne Druck.
              </p>
            </div>
            <div className="ritual-teaser__steps">
              {ritualSteps.map((item) => (
                <div key={item.step} className="ritual-step">
                  <span className="ritual-step__number">{item.step}</span>
                  <div className="ritual-step__content">
                    <h4 className="ritual-step__title">{item.title}</h4>
                    <p className="ritual-step__description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/how-to" className="btn btn--primary btn--lg">
              Anleitung öffnen
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Schnell zum passenden Tool</h2>
            <p className="section-subtitle">Tools, Sets, Anleitung. Klar sortiert, schnell gewählt.</p>
          </div>
          <div className="categories__grid">
            {mockCollections.slice(0, 3).map((collection, index) => (
              <Link
                key={collection.id}
                to={`/shop/category/${collection.handle}`}
                className="category-card"
              >
                <div className="category-card__image">
                  <img src={collection.image} alt={collection.title} loading="lazy" />
                </div>
                <div className="category-card__content">
                  <h3 className="category-card__title">{collection.title}</h3>
                  <span className="category-card__link">
                    {index === 0
                      ? 'Alle Tools ansehen'
                      : index === 1
                      ? 'Sets für einen einfachen Start'
                      : 'Anleitungen & E‑Book'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Stimmen aus der Praxis</h2>
          </div>
          <div className="reviews__grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-card__rating">{'★'.repeat(review.rating)}</div>
                <p className="review-card__text">"{review.text}"</p>
                <span className="review-card__author">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter">
        <div className="container">
          <div className="newsletter__content">
            <h2 className="newsletter__title">Restocks & kurze Tipps.</h2>
            <p className="newsletter__subtitle">Seltene Mails. Nur wenn es wirklich relevant ist.</p>
            <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter__input-group">
                <input
                  type="email"
                  className="input newsletter__input"
                  placeholder="Deine E-Mail-Adresse"
                  required
                />
                <button type="submit" className="btn btn--primary">
                  Anmelden
                </button>
              </div>
              <label className="checkbox-wrapper newsletter__consent">
                <input type="checkbox" className="checkbox" required />
                <span className="checkbox-label">
                  Ich stimme dem Erhalt des Newsletters zu und habe die{' '}
                  <Link to="/legal/datenschutz">Datenschutzerklärung</Link> gelesen.
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

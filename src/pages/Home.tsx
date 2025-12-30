import './Home.css';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import ProductCard from '@/components/shop/ProductCard';
import { mockProducts, mockCollections } from '@/data/mockData';

const benefits = [
  {
    icon: '❄️',
    title: 'Abgeschwollene Konturen',
    description: 'Kalte Oberfläche unterstützt den Lymphfluss – besonders morgens an Augen, Kieferlinie und Wangen.',
  },
  {
    icon: '📐',
    title: 'Mehr Struktur im Gesicht',
    description: 'Regelmäßiges Ausstreichen kann Wasseransammlungen reduzieren und Konturen sichtbarer wirken lassen.',
  },
  {
    icon: '🕒',
    title: 'Routine in unter 5 Minuten',
    description: 'Kurz zwischen Bad und Schreibtisch einplanbar – ohne Geräte, ohne Termin im Studio.',
  },
  {
    icon: '🧼',
    title: 'Hygienisch & langlebig',
    description: '304 Edelstahl ist porenfrei, lässt sich desinfizieren und übersteht Jahre ohne Abnutzung.',
  },
];

const ritualSteps = [
  {
    step: 1,
    title: 'Haut vorbereiten',
    description: 'Gesicht sanft reinigen, dann ein leichtes Öl oder Serum auftragen – die Haut muss gut gleiten, nicht ziehen.',
  },
  {
    step: 2,
    title: 'Hals & Kiefer',
    description: 'Mit wenig Druck von Schlüsselbein und Hals in Richtung Ohr ausstreichen, nicht hin‑und herreiben.',
  },
  {
    step: 3,
    title: 'Wangen & Augenbereich',
    description: 'Von der Gesichtsmitte nach außen arbeiten, unter dem Auge nur minimalen Druck verwenden und Bahnen wiederholen.',
  },
  {
    step: 4,
    title: 'Stirn & Abschluss',
    description: 'Von den Brauen hoch zur Haarlinie ziehen, danach Produktreste mit den Händen einarbeiten – fertig.',
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
    text: 'Mit Jade-Tool plus E‑Book bin ich gut reingekommen. Die Abläufe sind klar erklärt und realistisch im Alltag einplanbar.',
    rating: 5,
  },
  {
    name: 'Laura',
    text: 'Ein paar Minuten am Abend mit dem Rosenquarz-Gua-Sha lösen merkbar Spannung im Kiefer. Genau dafür wollte ich das Tool.',
    rating: 5,
  },
];

const blogPosts = [
  {
    title: 'Gua Sha vs. Roller – praktischer Vergleich',
    excerpt: 'Was sich wie anfühlt, wie viel Zeit du brauchst und wann welches Tool sinnvoll ist.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop',
    date: '15. Dez 2024',
  },
  {
    title: 'Wann Gua Sha wirklich etwas bringt',
    excerpt: 'Typische Einsatzzeiten im Alltag – vom Morgen vor dem Laptop bis zum Abend nach dem Training.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
    date: '10. Dez 2024',
  },
  {
    title: 'Fehler, die wir bei Gua Sha oft sehen',
    excerpt: 'Zu viel Druck, falsche Richtung, zu wenig Produkt – so vermeidest du Reizungen und Frust.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=300&fit=crop',
    date: '5. Dez 2024',
  },
];

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__eyebrow">MYGUASHA · KLARE GUA SHA TOOLS</span>
            <h1 className="hero__title">Gua Sha Tools ohne Wellness‑Kitsch.</h1>
            <p className="hero__subtitle">
              Drei Gua Sha Tools aus 304 Edelstahl, Jade und Rosenquarz – präzise geschliffen, sauber verarbeitet, fair verpackt.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn--primary btn--lg">
                Shop entdecken
              </Link>
              <Link to="/how-to" className="btn btn--secondary btn--lg">
                Ritual lernen
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
            <img src={heroImage} alt="Gua Sha Tools auf Leinenstoff" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section home-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sortiment mit Absicht klein gehalten</h2>
            <p className="section-subtitle">Edelstahl-, Jade- und Rosenquarz-Gua Sha plus E‑Book – genug Auswahl, ohne dich in zehn Varianten zu verlieren.</p>
          </div>
          <div className="home-products__grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="home-products__cta">
            <Link to="/shop" className="btn btn--secondary btn--lg">
              Zum Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Warum unsere Tools Sinn machen</h2>
            <p className="section-subtitle">
              Konzentriert auf Effekte, die man sieht und spürt – ohne Versprechen, die nicht haltbar sind.
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
              <h2 className="section-title">Gua Sha in 4 klaren Schritten</h2>
              <p className="section-subtitle">
                Ein Ablauf, den du ohne Vorwissen in den Alltag integrierst – morgens gegen Schwellung, abends zum Runterfahren.
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
              Schritt-für-Schritt-Anleitung
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Einfacher Einstieg statt Produktdschungel</h2>
            <p className="section-subtitle">Einzelne Tools, Sets und E‑Book – ohne zwanzig Varianten, die sich gleich anfühlen.</p>
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
                    {index === 0 ? 'Alle Tools ansehen' : index === 1 ? 'Sets für einen einfachen Start' : 'Anleitungen & E‑Book'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="section blog-teaser">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kurz erklärt statt übertrieben versprochen</h2>
            <p className="section-subtitle">Artikel, die dir helfen, Tools korrekt zu nutzen – ohne Trend- und Wellness-Floskeln.</p>
          </div>
          <div className="blog-teaser__grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-card__image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card__content">
                  <span className="blog-card__date">{post.date}</span>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-teaser__cta">
            <Link to="/blog" className="btn btn--secondary btn--lg">
              Zum Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Rückmeldungen aus dem Alltag</h2>
          </div>
          <div className="reviews__grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-card__rating">
                  {'★'.repeat(review.rating)}
                </div>
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
            <h2 className="newsletter__title">Updates zu Restocks & Anwendung.</h2>
            <p className="newsletter__subtitle">
              Seltene Mails mit Anwendungstipps, Restocks und Produkt-Updates – nur wenn der Inhalt wirklich Mehrwert hat.
            </p>
            <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter__input-group">
                <input 
                  type="email" 
                  className="input newsletter__input"
                  placeholder="Deine E-Mail-Adresse"
                  required
                />
                <button type="submit" className="btn btn--primary">
                  Newsletter anmelden
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

import './Shop.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { mockProducts, mockCollections } from '@/data/mockData';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = activeFilter === 'all' 
    ? mockProducts 
    : mockProducts.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-page__header">
          <h1>Shop</h1>
          <p>Entdecke unsere hochwertigen Gua Sha Tools und Selfcare Produkte</p>
        </div>

        <div className="shop-page__filters">
          <div className="shop-page__chips">
            <button className={`chip ${activeFilter === 'all' ? 'chip--active' : ''}`} onClick={() => setActiveFilter('all')}>Alle</button>
            {mockCollections.map(c => (
              <button key={c.handle} className={`chip ${activeFilter === c.handle ? 'chip--active' : ''}`} onClick={() => setActiveFilter(c.handle)}>{c.title}</button>
            ))}
          </div>
          <select className="input shop-page__sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Beliebtheit</option>
            <option value="new">Neueste</option>
            <option value="price-asc">Preis aufsteigend</option>
            <option value="price-desc">Preis absteigend</option>
          </select>
        </div>

        <div className="shop-page__grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

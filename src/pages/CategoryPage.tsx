import './Shop.css';
import { useParams } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { mockCollections, getProductsByCollection } from '@/data/mockData';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = mockCollections.find(c => c.handle === slug);
  const products = getProductsByCollection(slug || '');

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-page__header">
          <h1>{collection?.title || 'Kategorie'}</h1>
          <p>{collection?.description || 'Produkte in dieser Kategorie'}</p>
        </div>
        <div className="shop-page__grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
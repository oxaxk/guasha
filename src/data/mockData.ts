import type { Product, Collection } from '@/types/shopify';

// Mock product images (using placeholder)
const placeholderImage = 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=600&fit=crop';
const placeholderImage2 = 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop';
const placeholderImage3 = 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop';
const placeholderImage4 = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop';

export const mockProducts: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'edelstahl-gua-sha',
    title: 'Edelstahl Gua Sha',
    description:
      'Hochwertiger Gua Sha aus poliertem, massivem Edelstahl – extra glatt, kühl auf der Haut und besonders hygienisch. Ideal für präzise Konturenarbeit (Kiefer, Wangenknochen, Stirn) und für alle, die ein robustes Tool mit klarer, minimalistischer Ästhetik bevorzugen.',
    price: 44.9,
    currency: 'EUR',
    image: placeholderImage,
    images: [placeholderImage, placeholderImage2],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1',
        title: 'Standard',
        price: 44.9,
        availableForSale: true,
        options: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    options: [{ id: '1', name: 'Größe', values: ['Standard'] }],
    tags: ['bestseller', 'gua-sha'],
    vendor: 'MYGUASHA',
    availableForSale: true,
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'jade-gua-sha',
    title: 'Jade Gua Sha',
    description:
      'Klassischer Jade Gua Sha mit natürlich kühlendem Effekt – sanft zur Haut und perfekt für empfindliche oder leicht gerötete Hauttypen. Unterstützt Lymphdrainage, feine Gesichtskonturen und entspannte Routinen am Abend.',
    price: 34.9,
    currency: 'EUR',
    image: placeholderImage2,
    images: [placeholderImage2, placeholderImage],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/2',
        title: 'Standard',
        price: 34.9,
        availableForSale: true,
        options: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    options: [{ id: '2', name: 'Größe', values: ['Standard'] }],
    tags: ['gua-sha'],
    vendor: 'MYGUASHA',
    availableForSale: true,
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'rose-quartz-gua-sha',
    title: 'Rose Quartz Gua Sha (ausverkauft)',
    description:
      'Signature Gua Sha aus echtem Rosenquarz – beliebt für seine sanfte, glatte Oberfläche und das angenehme Gewicht in der Hand. Aktuell ausverkauft: Trage dich ein, um als Erste:r informiert zu werden, sobald er wieder verfügbar ist.',
    price: 39.9,
    compareAtPrice: 49.9,
    currency: 'EUR',
    image: placeholderImage4,
    images: [placeholderImage4, placeholderImage3],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/3',
        title: 'Standard',
        price: 39.9,
        compareAtPrice: 49.9,
        availableForSale: false,
        options: [{ name: 'Größe', value: 'Standard' }],
      },
    ],
    options: [{ id: '3', name: 'Größe', values: ['Standard'] }],
    tags: ['gua-sha', 'ausverkauft'],
    vendor: 'MYGUASHA',
    availableForSale: false,
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'gua-sha-massage-guide-ebook',
    title: 'MYGUASHA Massage Guide (E-Book, PDF)',
    description:
      'Digitaler Massage-Guide mit Schritt-für-Schritt-Anleitungen für effektive Gua-Sha-Routinen – vom schnellen 5‑Minuten‑Refresh bis zur intensiven Abendroutine. Inklusive Illustrationen, Druckpunkten, Routinen für verschiedene Hauttypen und Pflege-Tipps für deine Tools.',
    price: 14.9,
    currency: 'EUR',
    image: placeholderImage3,
    images: [placeholderImage3],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/4',
        title: 'Digital (PDF)',
        price: 14.9,
        availableForSale: true,
        options: [{ name: 'Format', value: 'PDF' }],
      },
    ],
    options: [{ id: '4', name: 'Format', values: ['PDF'] }],
    tags: ['ebook', 'digital'],
    vendor: 'MYGUASHA',
    availableForSale: true,
  },
];

export const mockCollections: Collection[] = [
  {
    id: 'gid://shopify/Collection/1',
    handle: 'gua-sha',
    title: 'Gua Sha',
    description: 'Unsere drei Signature Gua Sha Tools aus Edelstahl, Jade und Rosenquarz – jeweils mit eigenem Hautgefühl, Gewicht und Einsatzschwerpunkt.',
    image: placeholderImage,
  },
  {
    id: 'gid://shopify/Collection/3',
    handle: 'bestseller',
    title: 'Bestseller',
    description: 'Produkte, die am häufigsten in den Warenkorb wandern – bewährt in echten Routinen und ideal als Einstieg in die Welt von MYGUASHA.',
    image: placeholderImage2,
  },
];

export const getProductsByCollection = (collectionHandle: string): Product[] => {
  const tagMap: Record<string, string[]> = {
    'gua-sha': ['gua-sha'],
    bestseller: ['bestseller'],
  };
  
  const tags = tagMap[collectionHandle] || [];
  if (tags.length === 0) return mockProducts;
  
  return mockProducts.filter(product => 
    product.tags.some(tag => tags.includes(tag))
  );
};

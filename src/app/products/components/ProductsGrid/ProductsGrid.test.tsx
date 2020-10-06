import { Product } from 'api/api.types';
import React from 'react';
import { renderWithRedux } from 'tests';
import ProductsGrid from './ProductsGrid';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Handmade Cotton Towels',
    description: 'Eos cum doloremque reprehenderit consequatur modi veritatis.',
    rating: 5,
    image: 'https://picsum.photos/640/480?random=1412',
    promo: true,
    active: false,
  },
  {
    id: 2,
    name: 'Generic Soft Pants',
    description: 'Quo quo hic exercitationem provident.',
    rating: 3,
    image: 'https://picsum.photos/640/480?random=812',
    promo: true,
    active: true,
  },
  {
    id: 3,
    name: 'Rustic Rubber Car',
    description: 'Repellat quae dolor quisquam possimus modi voluptas.',
    rating: 2,
    image: 'https://picsum.photos/640/480?random=8274',
    promo: false,
    active: false,
  },
];

describe('Products Grid', () => {
  test('displays some products', async () => {
    const { container, getByText } = renderWithRedux(<ProductsGrid products={mockProducts} />);
    mockProducts.forEach((mock) => {
      expect(getByText(mock.name)).toBeInTheDocument();
    });
    expect(container.querySelector('.MuiPagination-root')).toBeInTheDocument();
  });

  test('displays some products', async () => {
    const { container, getByText } = renderWithRedux(<ProductsGrid products={[]} />);
    expect(getByText("Ooops... It's empty here")).toBeInTheDocument();
    expect(container.querySelector('.MuiPagination-root')).toBeUndefined;
  });
});

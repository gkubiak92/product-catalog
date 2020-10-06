import { Product } from 'api/api.types';
import React from 'react';
import { renderWithRedux } from 'tests';
import ProductCard from './ProductCard';

let mockProduct: Product;

describe('Product Card', () => {
  beforeEach(() => {
    mockProduct = {
      id: 1,
      name: 'Handmade Cotton Towels',
      description: 'Eos cum doloremque reprehenderit consequatur modi veritatis.',
      rating: 5,
      image: 'https://picsum.photos/640/480?random=1412',
      promo: false,
      active: true,
    };
  });

  test('Should render product card name and description', async () => {
    const { getByText } = renderWithRedux(<ProductCard product={mockProduct} />);
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
  });

  test('Promo product should have promo badge', async () => {
    mockProduct.promo = true;
    const { getByText } = renderWithRedux(<ProductCard product={mockProduct} />);
    expect(getByText('Promo')).toBeInTheDocument();
  });

  test('Active product should have enabled Show Details button', async () => {
    mockProduct.active = true;
    const { getByText } = renderWithRedux(<ProductCard product={mockProduct} />);
    expect(getByText('Show details').parentNode).toBeEnabled();
  });

  test('Inactive product should have disabled button with unavailable text', async () => {
    mockProduct.active = false;
    const { getByText } = renderWithRedux(<ProductCard product={mockProduct} />);
    expect(getByText('Unavailable').parentNode).toBeDisabled();
  });

  test('3 stars product should display 3 filled stars and 2 empty', async () => {
    mockProduct.rating = 3;
    const { container } = renderWithRedux(<ProductCard product={mockProduct} />);
    expect(container.querySelectorAll('.MuiRating-iconFilled').length).toBe(3);
    expect(container.querySelectorAll('.MuiRating-iconEmpty').length).toBe(2);
  });
});

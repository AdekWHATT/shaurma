export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts(products) {
    return {
      type: FETCH_PRODUCTS,
      payload: products,
    };
  }
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsFromFirebase } from './firebase';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await getProductsFromFirebase();
    return products;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

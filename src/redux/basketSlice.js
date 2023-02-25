import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === newItem.id
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromBasket(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === itemId
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    clearBasket(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;

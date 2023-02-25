import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Если товар уже есть в корзине, увеличим его количество на 1
        existingItem.quantity++;
      } else {
        // Если товара нет в корзине, добавим его в количестве 1
        state.items.push({ ...newItem, quantity: 1 });
      }

      // Обновляем общее количество и цену
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromBasket(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === itemId);
      const existingItem = state.items[existingItemIndex];

      if (existingItem.quantity === 1) {
        // Если количество товара равно 1, удаляем его из корзины
        state.items.splice(existingItemIndex, 1);
      } else {
        // Если количество товара больше 1, уменьшаем его количество на 1
        existingItem.quantity--;
      }

      // Обновляем общее количество и цену
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    clearBasket(state) {
      // Очищаем корзину и сбрасываем общее количество и цену
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

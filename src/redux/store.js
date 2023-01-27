import { createStore } from 'redux';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
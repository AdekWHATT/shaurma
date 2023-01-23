import { createStore } from 'redux';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
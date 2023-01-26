import { createStore } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
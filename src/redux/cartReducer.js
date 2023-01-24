import { ADD_TO_CART } from './cartActions';

const initialState = { cartItems: [], cartCount: 0 };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        // ...state,
        cartItems: [...state.cartItems, action.payload],
        cartCount: state.cartCount + 1
        
      };
    default:
      return state;
  }
}
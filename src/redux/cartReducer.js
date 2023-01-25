import {ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_BASKET, SEND_ORDER} from './cartActions';

const initialState = { cartItems: [], cartCount: 0 };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartCount: state.cartCount + 1
      };
      case REMOVE_FROM_BASKET:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id === action.payload.itemId),
          cartCount: state.cartCount - 1
        };
      case CLEAR_BASKET:
        return {
          ...state,
          cartItems: [],
          cartCount: 0
        };
      case SEND_ORDER:
        return {
          ...state
        }
      default:
        return state;
    }
}
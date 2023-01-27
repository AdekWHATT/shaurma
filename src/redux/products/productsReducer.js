import {FETCH_PRODUCTS} from './productsActions';

const initialState = { products: []};
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
      default:
        return state;
    }
}
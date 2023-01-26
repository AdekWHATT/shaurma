const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_PRODUCTS_START':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_PRODUCTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case 'REMOVE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
      case 'UPDATE_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  
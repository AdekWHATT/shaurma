export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const SEND_ORDER = 'SEND_ORDER';

// action creators
export function addToBasket(itemId) {
  return {
    type: ADD_TO_BASKET,
    payload: itemId,
  };
}

export function removeFromBasket(itemId) {
  return {
    type: REMOVE_FROM_BASKET,
    payload: itemId,
  };
}

export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}

// export function sendOrder() {
//   return async (dispatch) => {
//     const response = await fetch('/api/order', {
//       method: 'POST',
//       body: JSON.stringify({ items: basketItems }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if(response.ok){
//         dispatch({ type: SEND_ORDER });
//     }
//   };
// }
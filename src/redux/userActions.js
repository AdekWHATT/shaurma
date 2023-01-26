export const USER_AUTH = 'USER_AUTH';

// action creators
export function userAuth(itemId) {
  return {
    type: USER_AUTH,
    payload: itemId,
  };
}

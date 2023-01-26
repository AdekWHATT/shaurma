import {USER_AUTH} from './userActions';

const initialState = { userName: '', userBasket: [] , userAuth: false};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
      };
      default:
        return state;
    }
}
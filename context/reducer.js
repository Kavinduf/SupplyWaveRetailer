import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_USER,
  UPDATE_CART,
  UPDATE_USER,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          if (index === action.payload.index) {
            return action.payload;
          }
          return item;
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;

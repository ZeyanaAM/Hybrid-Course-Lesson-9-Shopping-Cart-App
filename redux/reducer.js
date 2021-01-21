import { ADD_ITEM, REMOVE_ITEM, CHECK_OUT } from './actionTypes';

export function reducerFunction(state = { cartItems: [] }, action) {
  console.log('** reducer function was called **');
  const { cartItems } = state;
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      console.log('adding item: ', newItem);
      console.log('array after adding item: ', [...cartItems, newItem]);
      return { cartItems: [...cartItems, newItem] };
    case REMOVE_ITEM:
      const idToRemove = action.payload;
      let updatedCartItems = cartItems.filter((item) => item.id !== idToRemove);
      console.log('array after removing item: ', updatedCartItems);
      return { cartItems: updatedCartItems };
    case CHECK_OUT:
      return { cartItems: [] };
    default:
      return state;
  }
}

export const getCartItems = (state) => state.cartItems;

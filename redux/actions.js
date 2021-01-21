import { REMOVE_ITEM } from './actionTypes';

export const removeItem = (idToRemove) => ({
  type: REMOVE_ITEM,
  payload: idToRemove,
});

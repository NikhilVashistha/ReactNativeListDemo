import ActionTypes from "../ActionTypes";

export const setListItemDetails = itemDetails => {
  return {
    type: ActionTypes.SET_LIST_ITEM_DETAILS,
    payload: itemDetails
  };
};

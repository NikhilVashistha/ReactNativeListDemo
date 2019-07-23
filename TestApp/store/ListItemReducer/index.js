import { combineReducers } from "redux";
import ActionTypes from "../ActionTypes";

const INITIAL_STATE = {
  itemDetails: {}
};

const ListItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_LIST_ITEM_DETAILS: {
      return {
        ...state,
        itemDetails: action.payload
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  listItem: ListItemReducer
});

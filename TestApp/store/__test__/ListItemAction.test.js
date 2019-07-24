import ActionTypes from "../ActionTypes";
import { setListItemDetails } from "../ListItemAction";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const itemDetails = {
      id: 1,
      title: "This is test"
    };

    const expectedAction = {
      type: ActionTypes.SET_LIST_ITEM_DETAILS,
      payload: itemDetails
    };
    expect(setListItemDetails(itemDetails)).toEqual(expectedAction);
  });
});

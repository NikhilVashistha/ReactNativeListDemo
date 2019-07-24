import ListItemReducer from "../ListItemReducer";
import ActionTypes from "../ActionTypes";

describe("ListItemReducer", () => {
  const INITIAL_STATE = {
    listItem: {
      itemDetails: {}
    }
  };
  it("should return the initial state", () => {
    expect(ListItemReducer(INITIAL_STATE, {})).toEqual({
      listItem: {
        itemDetails: {}
      }
    });
  });

  it("should handle SET_LIST_ITEM_DETAILS", () => {
    expect(
      ListItemReducer(INITIAL_STATE, {
        type: ActionTypes.SET_LIST_ITEM_DETAILS,
        payload: {
          id: 1,
          title: "This is test"
        }
      })
    ).toEqual({
      listItem: {
        itemDetails: {
          id: 1,
          title: "This is test"
        }
      }
    });
  });

  expect(
    ListItemReducer(
      {
        listItem: {
          itemDetails: {
            id: 2,
            title: "This is test 2"
          }
        }
      },
      {}
    )
  ).toEqual({
    listItem: {
      itemDetails: {
        id: 2,
        title: "This is test 2"
      }
    }
  });
});

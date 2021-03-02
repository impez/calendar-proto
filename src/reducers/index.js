import { combineReducers } from "redux";

export const pickedDatesReducer = (state = [], action) => {
  switch (action.type) {
    case "APPEND_PICKED_DATES":
      return [...state, ...action.payload];

    case "DELETE_PICKED_DATE":
      return state.filter((date) => {
        return date !== action.payload;
      });

    default:
      return state;
  }
};

export const flagReducer = (state = false, action) => {
  switch (action.type) {
    case "ACTIVATE_SELECT_FLAG":
      return true;
    case "DEACTIVATE_SELECT_FLAG":
      return false;
    default:
      return state;
  }
};

export const indexReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_INDEX":
      return action.payload;
    default:
      return state;
  }
};

export const datesReducer = (
  state = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  dates: datesReducer,
  pickedDates: pickedDatesReducer,
  flag: flagReducer,
  index: indexReducer,
});

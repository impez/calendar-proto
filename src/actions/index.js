export const activateSelectFlag = () => {
  return {
    type: "ACTIVATE_SELECT_FLAG",
    payload: {},
  };
};

export const deactivateSelectFlag = () => {
  return {
    type: "DEACTIVATE_SELECT_FLAG",
    payload: {},
  };
};

export const setIndex = (index) => {
  return {
    type: "SET_INDEX",
    payload: index,
  };
};

export const appendPickedDates = (dates) => {
  return {
    type: "APPEND_PICKED_DATES",
    payload: dates,
  };
};

export const deletePickedDate = (date) => {
  return {
    type: "DELETE_PICKED_DATE",
    payload: date,
  };
};

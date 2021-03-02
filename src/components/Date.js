import React from "react";
import { connect } from "react-redux";
import {
  setIndex,
  activateSelectFlag,
  deactivateSelectFlag,
  appendPickedDates,
  deletePickedDate,
} from "../actions/index";

const Date = ({
  id,
  dates,
  pickedDates,
  flag,
  index,
  setIndex,
  activateSelectFlag,
  deactivateSelectFlag,
  appendPickedDates,
  deletePickedDate,
  highlight,
}) => {
  const handleClick = () => {
    if (flag) {
      connectDates(index, id);
      deactivateSelectFlag();
      setIndex(null);
      return;
    }

    if (pickedDates.includes(id)) {
      deletePickedDate(id);
      return;
    }
    {
      activateSelectFlag();
      setIndex(id);
    }
  };

  const connectDates = (from, to) => {
    // Tutaj trzebaby iterować po
    // tablicy obiektów dat - tutaj jest to mocno uproszczone
    if (from > to) return;
    if (from === to) {
      appendPickedDates([from]);
      return;
    }

    const locallyPicked = [];

    for (let i = from; i <= to; i++) {
      locallyPicked.push(i);
    }

    appendPickedDates(locallyPicked);
  };

  const getClassName = () => {
    if (highlight) return "date selected";
    else return "date";
  };

  return (
    <div onClick={handleClick} className={getClassName()}>
      {id}
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  setIndex,
  activateSelectFlag,
  deactivateSelectFlag,
  appendPickedDates,
  deletePickedDate,
})(Date);

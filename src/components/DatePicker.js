import React from "react";
import { connect } from "react-redux";
import Date from "./Date";

const DatePicker = (props) => {
  const dates = props.dates.map((date) => {
    return (
      <Date key={date} id={date} highlight={props.pickedDates.includes(date)} />
    );
  });

  return <div className="date-picker">{dates}</div>;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DatePicker);

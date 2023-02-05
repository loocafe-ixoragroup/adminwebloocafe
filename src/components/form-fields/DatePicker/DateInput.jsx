import React from "react";
import "./DatePicker.css";
import { LabelComp } from "../simple-input/SimpleInput";

const DateInput = ({ name, error }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LabelComp name={name} error={error} />
      <div className="datepicker-container">
        <input type="date" name="" id="" />
      </div>
    </div>
  );
};

export default DateInput;

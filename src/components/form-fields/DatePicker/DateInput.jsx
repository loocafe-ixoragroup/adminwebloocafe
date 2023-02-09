import React from "react";
import "./DatePicker.css";
import { LabelComp } from "../simple-input/SimpleInput";

const DateInput = ({ name, error, label, register }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LabelComp name={label} error={error} />
      <div className="datepicker-container">
        <input type="date" name={name} id={name} {...register} />
      </div>
    </div>
  );
};

export default DateInput;

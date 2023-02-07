import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";

const Dropdown = ({ name, error }) => {
  return (
    <div className="select">
      <LabelComp name={name} error={error} />
      <select>
        <option>option1</option>
        <option>option1</option>
        <option>option1</option>
      </select>
    </div>
  );
};

export default Dropdown;

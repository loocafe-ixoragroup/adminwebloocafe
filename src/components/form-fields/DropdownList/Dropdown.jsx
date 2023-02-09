import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";

const Dropdown = ({ label, name, error, register }) => {
  return (
    <div className="select">
      <LabelComp name={label} error={error} />
      <select name={name} {...register}>
        <option value="type1">Type1</option>
        <option value="type2">Type2</option>
        <option value="type3">Type3</option>
      </select>
    </div>
  );
};

export default Dropdown;

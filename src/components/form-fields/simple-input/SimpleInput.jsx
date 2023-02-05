import React from "react";
import "./SimpleInput.css";
import { IconInfo } from "../../../assets/icons";

const SimpleInput = ({ name, error, type }) => {
  return (
    <div className="si_div">
      <LabelComp name={name} error={error} />
      <input type={type} className="si_input" />
    </div>
  );
};

export const LabelComp = ({ name, error }) => {
  return (
    <div className="si_label">
      <span className="si_label_name">{name}</span>
      <img src={IconInfo} alt="" />
      <span className="si_error">{error && error}</span>
    </div>
  );
};

export default SimpleInput;

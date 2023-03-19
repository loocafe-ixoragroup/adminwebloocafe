import React, { forwardRef } from "react";
import "./SimpleInput.css";
import { IconAsterisk } from "../../../assets/icons";

const SimpleInput = ({ label, error, register, ...props }) => {
  return (
    <div className="si_div">
      <LabelComp name={label} error={error} />
      <input className="si_input" {...props} {...register} />
    </div>
  );
};
export const LabelComp = ({ name, error }) => {
  return (
    <div className="si_label">
      <span className="si_label_name">{name}</span>
      <img src={IconAsterisk} alt="" />
      <span className="si_error">{error && error}</span>
    </div>
  );
};

export default SimpleInput;

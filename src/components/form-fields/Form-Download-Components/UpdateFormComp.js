import React from "react";
import "./UpdateFormComp.css";
const UpdateFormComp = ({ label, editDetails, onChange, name }) => {
  return (
    <div className="update-formcomp">
      <p className="update_label1">{label}</p>
      <input
        className="update_name1"
        defaultValue={editDetails}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default UpdateFormComp;

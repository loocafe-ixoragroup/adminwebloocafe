import React from "react";
import "./UpdateFormComponents.css";
const UpdateFormComponents = ({ label, editDetails }) => {
  return (
    <div>
      <div className="update-form-fields2">
        <p className="update_label2">{label}</p>
        <input className="update_name2" defaultValue={editDetails} />
      </div>
    </div>
  );
};

export default UpdateFormComponents;

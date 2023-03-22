import React from "react";
import "./UpdateFormComp.css";
const UpdateFormComp = ({ label, editDetails }) => {
  return (
    <div className="update-formcomp">
      <p className="update_label1">{label}</p>
      <input className="update_name1" defaultValue={editDetails} />
    </div>
  );
};

export default UpdateFormComp;

import React from "react";
import { useSelector } from "react-redux";
import { LabelComp } from "../simple-input/SimpleInput";

const Dropdown = ({ label, name, error, register }) => {
  const { supervisor } = useSelector((state) => state.supervisor);
  return (
    <div className="select">
      <LabelComp name={label} error={error} />
      {name === "supervisorID" ? (
        <select name={name} {...register}>
          {supervisor.length > 0 ? (
            supervisor.map((supervisor) => (
              <option value={supervisor._id}>{supervisor.name}</option>
            ))
          ) : (
            <option>No supervisors found</option>
          )}
        </select>
      ) : (
        <select name={name} {...register}>
          <option value="Mini loocafe">Mini loocafe</option>
          <option value="Pink loocafe">Pink loocafe</option>
          <option value="Large loocafe">Large loocafe</option>
        </select>
      )}
    </div>
  );
};

export default Dropdown;

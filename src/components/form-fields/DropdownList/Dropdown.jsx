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
            <option>jajkjakpoi</option>
          )}
        </select>
      ) : (
        <select name={name} {...register}>
          <option value="type1">Type1</option>
          <option value="type2">Type2</option>
          <option value="type3">Type3</option>
        </select>
      )}
    </div>
  );
};

export default Dropdown;

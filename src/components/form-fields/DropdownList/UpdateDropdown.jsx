import React from "react";
import { useSelector } from "react-redux";
//import UpdateFormComponents from '../Form-Download-Components/UpdateFormComponents';
import "./StateCity.css";
const UpdateDropdown = ({
  label,
  name,
  defaultValue,
  defaultSup,
  onChange,
}) => {
  // console.log(defaultValue);
  const { supervisor } = useSelector((state) => state.supervisor);

  // console.log(supervisor);

  return (
    <div className="download-form-fields2">
      <p className="download_label2">{label}</p>
      {label === "Assigned Supervisor" ? (
        <select
          onChange={onChange}
          className="update-select"
          name={name}
          defaultValue={defaultSup ? defaultSup : ""}
        >
          {supervisor.length > 0 ? (
            supervisor.map((supervisor) => (
              <option value={supervisor._id}>{supervisor.name}</option>
            ))
          ) : (
            <option>No supervisors found</option>
          )}
        </select>
      ) : (
        <select
          className="update-select"
          onChange={onChange}
          name={name}
          defaultValue={defaultValue ? defaultValue : ""}
        >
          <option value="Mini loocafe">Mini loocafe</option>
          <option value="Pink loocafe">Pink loocafe</option>
          <option value="Large loocafe">Large loocafe</option>
        </select>
      )}
    </div>
  );
};

export default UpdateDropdown;

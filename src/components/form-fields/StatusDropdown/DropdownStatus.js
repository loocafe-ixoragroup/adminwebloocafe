import React from "react";
import "./DropdownStatus.css";
const DropdownStatus = ({ value }) => {
  // console.log(value);
  return (
    <div className="Status-dropdown">
      <select>
        {value ? (
          <option value={value}>{value}</option>
        ) : (
          <>
            <option value="live">Live</option>
            <option value="maintainance">Maintainance</option>
            <option value="removed">Removed</option>
          </>
        )}
      </select>
    </div>
  );
};

export default DropdownStatus;

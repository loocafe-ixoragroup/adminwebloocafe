import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateFunctionalStatus } from "../../../apis/Api";
import "./DropdownStatus.css";
const DropdownStatus = ({ value, id, onChange }) => {
  // const [status, setStatus] = useState("");
  const navigate = useNavigate();

  // console.log(value);
  return (
    <div className="Status-dropdown">
      <select onChange={onChange} value={value}>
        <option value="live">Live</option>
        <option value="maintenance">Maintenance</option>
        <option value="removed">Removed</option>
      </select>
    </div>
  );
};

export default DropdownStatus;

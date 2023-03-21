import React from "react";
import { ViewButton } from "../form-fields";
import "./SupervisorCard.css";
import { IconLocation, IconUnit } from "../../assets/icons";

const SupervisorCard = ({ loocafe }) => {
  return (
    <div className="supervisor-card">
      <div className="card-body"></div>
      <div className="card-footer">
        <div className="block-1">
          <p>{loocafe?.name}</p>
        </div>
        <div className="block-5">
          <div className="block-4">
            <div className="block-2">
              <img src={IconLocation} alt="location" />
              <p>{loocafe?.location?.city}</p>
            </div>
            <div className="block-3">
              <img src={IconUnit} alt="unit" />
              <p>{loocafe?.id}</p>
            </div>
          </div>
          <ViewButton name={"View Loocafe"} />
        </div>
      </div>
    </div>
  );
};

export default SupervisorCard;

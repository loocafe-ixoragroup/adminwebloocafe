import React from "react";
import "./SupervisorsList.css";
//import { City, State } from "country-state-city";
import {
  StateCity,
  SimpleInput,
  BlackButton,
  LightButton,
} from "../../components/form-fields";
import SupervisorCard from "../../components/SupervisorCard/SupervisorCard";
const SupervisorsList = () => {
  var cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id:4
    },
    {
      id:5
    },
    {
      id:6
    }
  ];
  return (
    <div className="supervisors-list-main">
      <div className="supervisors-list-sub">
        <h3>List of Supervisors</h3>
        {/* <LightButton name={"Add Assigned Loocafe"}/> */}
        <button className="add-supervisor-btn">Add Assigned Loocafe</button>
      </div>
      <div>
        <SimpleInput label={"LooCafe name"} />
        <SimpleInput label={"LooCafe Unit No"} />
      </div>
      <div className="buttons">
        <BlackButton name={"Show List"} />
        <LightButton name={"Add Supervisor"} />
      </div>
      <div> 
        {cards.map((e) => {
          return <SupervisorCard />;
        })}
      </div>

      {/* <StateCity names={"State"}/> */}
    </div>
  );
};

export default SupervisorsList;

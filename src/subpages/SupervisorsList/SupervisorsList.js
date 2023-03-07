import React, { useState } from "react";
import "./SupervisorsList.css";
import { City, State } from "country-state-city";
import { useTrait } from "../../hooks/useTrait";
import {
  StateCity,
  SimpleInput,
  BlackButton,
  LightButton,
} from "../../components/form-fields";
import SupervisorCard from "../../components/SupervisorCard/SupervisorCard";
import { useNavigate } from "react-router-dom";
const SupervisorsList = () => {
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
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
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  const onChangeState = (e) => {
    setCities(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    // console.log(defaultCity.get());
  };
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
        <StateCity
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          city={cities}
          states={states}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        />
      </div>
      <div className="buttons">
        <BlackButton name={"Show List"} />
        <LightButton
          name={"Add Supervisor"}
          handleClick={() => navigate("/add-supervisor")}
        />
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

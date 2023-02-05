import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import "./StateCity.css";
import { City, Country, State } from "country-state-city";

const StateCity = () => {
  const states = State.getStatesOfCountry("IN");
  const cities = City.getCitiesOfState("IN", "GJ");
  return (
    <>
      <div className="dropdown_container">
        <div className="select">
          <LabelComp name={"State"} error={""} />
          <select name="state">
            {states.map((state) => (
              <option value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <LabelComp name={"City"} error={""} />
          <select name="state">
            {cities.map((state) => (
              <option value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default StateCity;

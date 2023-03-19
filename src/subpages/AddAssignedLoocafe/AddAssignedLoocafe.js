import React, { useState } from "react";
import "./AddAssignedLoocafe.css";
import { City, State } from "country-state-city";
import {
  SimpleInput,
  BlackButton,
  StateCity,
} from "../../components/form-fields";
import { useTrait } from "../../hooks/useTrait";
const AddAssignedLoocafe = () => {
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [cities, setCities] = useState([]);
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
    <div className="add-assigned-loocafe-main">
      <h3>Add Assigned Loocafe</h3>
      {/* <div className="add-assigned-loocafe-sub"> */}
        <div className="simple-inputs-sub">
        <SimpleInput label={"LooCafe name"} />
        <SimpleInput label={"LooCafe Unit No"} />
        </div>
        <div className="state-city-sub">
        <StateCity
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          city={cities}
          states={states}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        />
        </div>
        <div className="add-btn">
          <BlackButton name={"Add"} />
        </div>
      </div>
    // </div>
  );
};

export default AddAssignedLoocafe;

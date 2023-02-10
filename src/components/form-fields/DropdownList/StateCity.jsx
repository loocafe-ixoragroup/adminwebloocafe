import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import "./StateCity.css";

const StateCity = ({
  namec,
  names,
  errorc,
  errors,
  registerc,
  registers,
  city,
  // onChange,
  onChangeState,
  onChangeCity,
  states,
  defaultState,
  defaultCity,
}) => {
  // console.log(states, city);
  return (
    <>
      <div className="dropdown_container">
        <div className="select">
          <LabelComp name={"State"} error={errors} />
          <select name={names} {...registers} onChange={onChangeState}>
            <option value="">
              {defaultState !== "" ? defaultState : "--select--"}
            </option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="select">
          <LabelComp name={"City"} error={errorc} />
          <select name={namec} {...registerc} onChange={onChangeCity}>
            <option value="">
              {defaultCity !== "" ? defaultCity : "--select--"}
            </option>
            {city.map((city) => (
              <option key={city.isoCode} value={city.isoCode}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default StateCity;

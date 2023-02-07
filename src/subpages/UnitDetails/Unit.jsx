import React from "react";
import {
  BlackButton,
  Dropdown,
  LightButton,
  SimpleInput,
  StateCity,
} from "../../components/form-fields";
import "./Unit.css";

const Unit = () => {
  return (
    <div className="unit_main">
      <h3>Loocafe Unit Details</h3>
      <SimpleInput name={"Unit Name"} error={""} type={"text"} />
      <SimpleInput name={"Unit Address"} error={""} type={"text"} />
      <StateCity />
      <SimpleInput name={"Pincode"} error={""} type={"number"} />
      <div className="flexDiv">
        <SimpleInput name={"Latitude"} error={""} type={"number"} />
        <SimpleInput name={"Longitude"} error={""} type={"number"} />
      </div>
      <div className="flexDiv">
        <SimpleInput name={"Electric Bill No"} error={""} type={"text"} />
        <SimpleInput name={"Water Bill No"} error={""} type={"text"} />
      </div>
      <div className="flexDiv">
        <Dropdown name={"Type of LooCafe"} error={""} />
        <Dropdown name={"Assigned Supervisor"} error={""} />
      </div>
      <div className="flexDiv">
        <SimpleInput
          name={"Timing of LooCafe (From)"}
          error={""}
          type={"time"}
        />
        <SimpleInput name={"Timing of LooCafe (To)"} error={""} type={"time"} />
      </div>
      <div className="buttons">
        <BlackButton />
        <LightButton />
      </div>
    </div>
  );
};

export default Unit;

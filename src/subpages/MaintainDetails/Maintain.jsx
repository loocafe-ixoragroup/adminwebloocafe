import React from "react";
import {
  BlackButton,
  LightButton,
  Phoneinput,
  SimpleInput,
} from "../../components/form-fields";
import "./Maintain.css";

const Maintain = () => {
  return (
    <div className="maintain_main">
      <h3>LooCafe Maintaining Partner</h3>
      <SimpleInput name={"Partner Name"} error={""} />
      <div className="mobileno">
        <Phoneinput name={"Mobile No."} error={""} />
        <Phoneinput name={"Alternative Mobile No."} error={""} />
      </div>
      <div className="buttons">
        <BlackButton name={"Submit"}/>
        <LightButton name={"Back"}/>
      </div>
    </div>
  );
};

export default Maintain;

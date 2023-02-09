import React, { useState } from "react";
import {
  BlackButton,
  Phoneinput,
  SimpleInput,
  PhotoUpload,
  StateCity,
} from "../../components/form-fields";
import { City, State } from "country-state-city";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./Supervisor.css";

const schema = yup.object({
  sup_city: yup.string().required("Required!"),
  sup_state: yup.string().required("Required!"),
});
const Supervisor = ({ setPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);
  const handleSave = () => {
    setPage((prev) => prev - 1);
  };
  const onChange = (e) => {
    setCity(City.getCitiesOfState("IN", e.target.value));
  };
  return (
    <div className="supervisor_main">
      <h3>Add Supervisor</h3>
      <div className="UploadPhoto">
        <PhotoUpload />
      </div>
      <SimpleInput label={"Applicant's Name"} error={""} />
      <div className="mobile_no">
        <Phoneinput label={"Mobile No."} error={""} />
        <Phoneinput label={"Alternative Mobile No."} error={""} />
      </div>
      <StateCity
        errorc={errors.sup_city?.message}
        namec={"sup_city"}
        registerc={{ ...register("sup_city") }}
        errors={errors.sup_state?.message}
        names={"sup_state"}
        registers={{ ...register("sup_state") }}
        onChange={onChange}
        city={city}
        states={states}
      />
      <SimpleInput label={"Create User Id"} error={""} />
      <SimpleInput label={"Create Password"} error={""} type="password" />
      <SimpleInput label={"Confirm Password"} error={""} type="password" />
      <div className="buttons">
        <BlackButton name={"Submit"} handleClick={handleSave} />
      </div>
    </div>
  );
};

export default Supervisor;

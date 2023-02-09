import { yupResolver } from "@hookform/resolvers/yup";
import { City, State } from "country-state-city";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BlackButton,
  Dropdown,
  LightButton,
  SimpleInput,
  StateCity,
} from "../../components/form-fields";
import "./Unit.css";
import * as yup from "yup";
import { addKycForm } from "../../apis/Api";
import { object } from "prop-types";

const schema = yup.object({
  loocafe_name: yup.string().required("Required"),
  loocafe_address: yup
    .string()
    .min(5, "Address is too short")
    .required("Required"),
  loocafe_type: yup.string().required("Required"),
  electricity_unit_no: yup.string().required("Required"),
  water_bill_unit_no: yup.string().required("Required"),
  latitude: yup.string().required("Required"),
  longitude: yup.string().required("Required"),
  pincode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("Required!"),
  city: yup.string().required("Required!"),
  state: yup.string().required("Required!"),
  supervisorID: yup.string().required("Required"),
  timing_from: yup.string().required("Required"),
  timing_to: yup.string().required("Required"),
});

const Unit = ({ setPage, setValues, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleNext = async (data) => {
    console.log(data);
    setValues({ ...values, ...data });

    var formData = new FormData();
    var cnt = 1;
    for (var key in values) {
      formData.append(key, values[key]);
      cnt++;
    }
    // formData.append("rental_start_date", "2020-10-20");
    console.log(cnt);

    addKycForm(formData);

    // clearTimeout();

    // console.log(values);
    // setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);
  // const loocafetype = ["type1", "type2", "type3"];
  const onChange = (e) => {
    // console.log(e.target.value);
    setCity(City.getCitiesOfState("IN", e.target.value));
  };
  return (
    <div className="unit_main">
      <h3>Loocafe Unit Details</h3>
      <SimpleInput
        label={"Unit Name"}
        type={"text"}
        error={errors.loocafe_name?.message}
        name={"loocafe_name"}
        register={{ ...register("loocafe_name") }}
      />
      <SimpleInput
        label={"Unit Address"}
        type={"text"}
        name={"loocafe_address"}
        error={errors.loocafe_address?.message}
        register={{ ...register("loocafe_address") }}
      />
      <StateCity
        errorc={errors.city?.message}
        namec={"city"}
        registerc={{ ...register("city") }}
        errors={errors.state?.message}
        names={"state"}
        registers={{ ...register("state") }}
        onChange={onChange}
        city={city}
        states={states}
      />
      <SimpleInput
        label={"Pincode"}
        type={"number"}
        name={"pincode"}
        error={errors.pincode?.message}
        register={{ ...register("pincode") }}
      />
      <div className="flexDiv">
        <SimpleInput
          label={"Latitude"}
          type={"number"}
          name={"latitude"}
          error={errors.latitude?.message}
          register={{ ...register("latitude") }}
        />
        <SimpleInput
          label={"Longitude"}
          type={"number"}
          name={"longitude"}
          error={errors.longitude?.message}
          register={{ ...register("longitude") }}
        />
      </div>
      <div className="flexDiv">
        <SimpleInput
          label={"Electric Bill No"}
          name={"electricity_unit_no"}
          error={errors.electricity_unit_no?.message}
          register={{ ...register("electricity_unit_no") }}
          type={"text"}
        />
        <SimpleInput
          label={"Water Bill No"}
          name={"water_bill_unit_no"}
          error={errors.water_bill_unit_no?.message}
          register={{ ...register("water_bill_unit_no") }}
          type={"text"}
        />
      </div>
      <div className="flexDiv">
        <Dropdown
          label={"Type of LooCafe"}
          name={"loocafe_type"}
          error={errors.loocafe_type?.message}
          register={{ ...register("loocafe_type") }}
        />
        <Dropdown
          label={"Assigned Supervisor"}
          name={"supervisorID"}
          error={errors.supervisorID?.message}
          register={{ ...register("supervisorID") }}
        />
      </div>
      <div className="flexDiv">
        <SimpleInput
          label={"Timing of LooCafe (From)"}
          type={"time"}
          name={"timing_from"}
          error={errors.timing_from?.message}
          register={{ ...register("timing_from") }}
        />
        <SimpleInput
          label={"Timing of LooCafe (To)"}
          name={"timing_to"}
          error={errors.timing_to?.message}
          register={{ ...register("timing_to") }}
          type={"time"}
        />
      </div>
      <div className="buttons">
        <BlackButton name={"Submit"} handleClick={handleSubmit(handleNext)} />
        <LightButton name={"Back"} handleClick={handlePrev} />
      </div>
    </div>
  );
};

export default Unit;

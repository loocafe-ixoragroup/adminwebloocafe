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
import { useData } from "../../context/KycContext";
import Confirm from "../../components/Popup/Confirm";

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

const Unit = ({ setPage }) => {
  const { setValues, data } = useData();
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    defaultValues: {
      loocafe_name: data.loocafe_name,
      loocafe_address: data.loocafe_address,
      loocafe_type: data.loocafe_type,
      electricity_unit_no: data.electricity_unit_no,
      water_bill_unit_no: data.water_bill_unit_no,
      latitude: data.latitude,
      longitude: data.longitude,
      pincode: data.pincode,
      city: data.city,
      state: data.state,
      supervisorID: data.supervisorID,
      timing_from: data.timing_from,
      timing_to: data.timing_to,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleNext = async (d) => {
    setValues(d);
    // console.log(data);
    setShow(true);
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
      <Confirm show={show} setShow={setShow} onClose={onClose} />
    </div>
  );
};

export default Unit;

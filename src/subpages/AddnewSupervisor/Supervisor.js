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
import { addSupervisor } from "../../apis/Api";
import { useTrait } from "../../hooks/useTrait";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Required!"),
  username: yup.string().required("Required!"),
  phone: yup.string().required("Required!"),
  alternate_phone: yup.string().required("Required!"),
  city: yup.string().required("Required!"),
  state: yup.string().required("Required!"),
  password: yup
    .string()
    .min(5, "password should be atleast 5 charcter long.")
    .max(10, "password should be atleast 5 charcter long.")
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  file: yup.mixed().test("file", "You need to provide a file", (value) => {
    if (value.length > 0) {
      return true;
    }
    return false;
  }),
});
const Supervisor = ({ setPage }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [city1, setCity1] = useState([]);
  const navigate = useNavigate();
  const handleNext = (data) => {
    // console.log(data);

    const formData = new FormData();
    const entries = Object.entries(data).filter(
      (entry) => typeof entry[1] !== "object"
    );

    if (data.file) {
      Array.from(data.file).forEach((file) => {
        formData.append("file", file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    addSupervisor(formData);

    setTimeout(() => {
      navigate("/list-all-supervisor");
    }, 5000);
  };

  const onChangeState = (e) => {
    setCity1(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    //  console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    //  console.log(defaultCity.get());
  };
  return (
    <div className="supervisor_main">
      <h3>Add Supervisor</h3>
      <div className="UploadPhoto">
        <PhotoUpload
          name={"file"}
          error={errors.file?.message}
          register={{ ...register("file") }}
        />
      </div>
      <SimpleInput
        label={"Applicant's Name"}
        type={"text"}
        error={errors.name?.message}
        name={"name"}
        register={{ ...register("name") }}
      />
      <div className="mobile_no">
        <Phoneinput
          label={"Mobile No."}
          error={errors.phone?.message}
          name={"phone"}
          register={{ ...register("phone") }}
          handlePhoneNumberChange={(value) =>
            setValue("phone", value, {
              shouldDirty: true,
              shouldValidate: submitCount > 0,
            })
          }
        />
        <Phoneinput
          label={"Alternative Mobile No."}
          error={errors.alternate_phone?.message}
          name={"alternate_phone"}
          register={{ ...register("alternate_phone") }}
          handlePhoneNumberChange={(value) =>
            setValue("alternate_phone", value, {
              shouldDirty: true,
              shouldValidate: submitCount > 0,
            })
          }
        />
      </div>
      <StateCity
        errorc={errors.city?.message}
        namec={"city"}
        registerc={{ ...register("city") }}
        errors={errors.state?.message}
        names={"state"}
        registers={{ ...register("state") }}
        // onChange={onChange}
        city={city1}
        states={states}
        onChangeState={onChangeState}
        onChangeCity={onChangeCity}
        defaultState={defaultState.get()}
        defaultCity={defaultCity.get()}
      />
      <SimpleInput
        label={"Create User Id"}
        type={"text"}
        error={errors.username?.message}
        name={"username"}
        register={{ ...register("username") }}
      />
      <SimpleInput
        label={"Create Password"}
        error={errors.password?.message}
        name={"password"}
        register={{ ...register("password") }}
        type="password"
      />
      <SimpleInput
        label={"Confirm Password"}
        error={errors.confirm_password?.message}
        name={"confirm_password"}
        register={{ ...register("confirm_password") }}
        type="password"
      />
      <div className="buttons">
        <BlackButton name={"Submit"} handleClick={handleSubmit(handleNext)} />
      </div>
    </div>
  );
};

export default Supervisor;

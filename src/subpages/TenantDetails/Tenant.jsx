import React, { useState } from "react";
import {
  BlackButton,
  DateInput,
  Phoneinput,
  PhotoUpload,
  SimpleInput,
  StateCity,
  UploadInput,
} from "../../components/form-fields";
import { useForm } from "react-hook-form";
import { City, State } from "country-state-city";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Tenant.css";
import { useData } from "../../context/KycContext";
import { useTrait } from "../../hooks/useTrait";

const schema = yup.object({
  cleaner_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .required("Required field"),
  cleaner_phone: yup.string().required("Required!"),
  cleaner_alternate_phone: yup.string(),
  relative_name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .required("Required field"),
  email: yup.string().email("Please enter valid email").required("Required!"),
  street_address: yup.string().min(5, "Address is too short"),
  cleaner_city: yup.string().required("Required!"),
  cleaner_state: yup.string().required("Required!"),
  cleaner_pincode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("Required!"),
  dob: yup.string().required("Required!"),
  cleaner_aadhar: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
  cleaner_pan: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
  electricity_bill: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
  cheque: yup.mixed().test("file", "You need to provide a file", (value) => {
    if (value.length > 0) {
      return true;
    }
    return false;
  }),
  cleaner_photo: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
});

const Tenant = ({ setPage }) => {
  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    setValue,
  } = useForm({
    defaultValues: {
      cleaner_name: data.cleaner_name,
      cleaner_phone: data.cleaner_phone,
      relative_name: data.relative_name,
      email: data.email,
      street_address: data.street_address,
      cleaner_alternate_phone: data.cleaner_alternate_phone,
      cleaner_city: data.city,
      cleaner_pincode: data.cleaner_pincode,
      cleaner_state: data.cleaner_state,
      dob: data.dob,
      electricity_bill: data.electricity_bill,
      cheque: data.cheque,
      cleaner_pan: data.cleaner_pan,
      cleaner_aadhar: data.cleaner_aadhar,
      cleaner_photo: data.cleaner_photo,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleClick = (data) => {
    setValues(data);
    setPage((prev) => prev + 1);
  };

  // console.log(data);
  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);

  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const onChangeState = (e) => {
    setCity(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    // console.log(defaultCity.get());
  };

  return (
    <div className="tenant_main">
      <h3>Tenant Details</h3>
      <div className="tenant_form">
        <div className="form_part1">
          <SimpleInput
            label={"Applicant Name"}
            type={"text"}
            error={errors.cleaner_name?.message}
            name={"cleaner_name"}
            register={{ ...register("cleaner_name") }}
          />
          <SimpleInput
            label={"Father's/Spouse Name"}
            type={"text"}
            error={errors.relative_name?.message}
            name={"relative_name"}
            register={{ ...register("relative_name") }}
          />
          <SimpleInput
            label={"Email ID"}
            type={"email"}
            error={errors.email?.message}
            name={"email"}
            register={{ ...register("email") }}
          />
          <div className="mobileno">
            <Phoneinput
              label={"Mobile No."}
              error={errors.cleaner_phone?.message}
              name={"cleaner_phone"}
              phone={data.cleaner_phone}
              register={{ ...register("cleaner_phone") }}
              handlePhoneNumberChange={(value) =>
                setValue("cleaner_phone", value, {
                  shouldDirty: true,
                  shouldValidate: submitCount > 0,
                })
              }
            />
            <Phoneinput
              label={"Alternative Mobile No."}
              error={errors.cleaner_alternate_phone?.message}
              name={"cleaner_alternate_phone"}
              phone={data.cleaner_alternate_phone}
              register={{ ...register("cleaner_alternate_phone") }}
              handlePhoneNumberChange={(value) =>
                setValue("cleaner_alternate_phone", value, {
                  shouldDirty: true,
                  shouldValidate: submitCount > 0,
                })
              }
            />
          </div>
          <SimpleInput
            label={"Street Adress"}
            type={"text"}
            error={errors.street_address?.message}
            name={"street_address"}
            register={{ ...register("street_address") }}
          />
          <StateCity
            errorc={errors.cleaner_city?.message}
            namec={"cleaner_city"}
            registerc={{ ...register("cleaner_city") }}
            errors={errors.cleaner_state?.message}
            names={"cleaner_state"}
            registers={{ ...register("cleaner_state") }}
            onChangeCity={onChangeCity}
            onChangeState={onChangeState}
            city={city}
            states={states}
          />
          <div className="flex-div">
            <SimpleInput
              label={"Pincode"}
              error={errors.cleaner_pincode?.message}
              name={"cleaner_pincode"}
              register={{ ...register("cleaner_pincode") }}
            />
            <DateInput
              label={"Date of Birth"}
              error={errors.dob?.message}
              name={"dob"}
              register={{ ...register("dob") }}
            />
          </div>
          <UploadInput
            label={"Electricity Bill"}
            error={errors.electricity_bill?.message}
            name={"electricity_bill"}
            file={data.electricity_bill}
            register={{ ...register("electricity_bill") }}
          />
          <UploadInput
            label={"PAN No"}
            error={errors.cleaner_pan?.message}
            name={"cleaner_pan"}
            file={data.cleaner_pan}
            register={{ ...register("cleaner_pan") }}
            // onChange={(e) => setValues({""})}
          />
          <UploadInput
            label={"Aadhar No"}
            error={errors.cleaner_aadhar?.message}
            file={data.cleaner_aadhar}
            name={"cleaner_aadhar"}
            register={{ ...register("cleaner_aadhar") }}
          />
          <UploadInput
            label={"Cheque"}
            error={errors.cheque?.message}
            file={data.cheque}
            name={"cheque"}
            register={{ ...register("cheque") }}
          />
        </div>
        <PhotoUpload
          name={"cleaner_photo"}
          error={errors.cleaner_photo?.message}
          file={data.cleaner_photo}
          register={{ ...register("cleaner_photo") }}
        />
      </div>
      <div className="btn-div">
        <BlackButton name={"Next"} handleClick={handleSubmit(handleClick)} />
      </div>
    </div>
  );
};

export default Tenant;

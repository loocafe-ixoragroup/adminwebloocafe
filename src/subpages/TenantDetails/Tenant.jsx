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

const schema = yup.object({
  cleaner_name: yup.string().required("Required!"),
  cleaner_phone: yup.string().required("Required!"),
  cleaner_alternate_phone: yup.string(),
  relative_name: yup.string().required("Required!"),
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
});

const Tenant = ({ setPage, values, setValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    setValue,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleClick = (data) => {
    console.log(data);
    setValues((prevData) => ({ ...prevData, ...data }));
    setPage((prev) => prev + 1);
  };

  console.log(values);
  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);

  const onChange = (e) => {
    // console.log(e.target.value);
    setCity(City.getCitiesOfState("IN", e.target.value));
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
            onChange={onChange}
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
            label={"Adress Proof"}
            error={!values.address_proof && "Required!"}
            value={values.address_proof}
            name={"address_proof"}
            // register={{ ...register("address_proof", { required: true }) }}
            onChange={(e) =>
              setValues({ ...values, ["address_proof"]: e.target.files[0] })
            }
          />
          <UploadInput
            label={"PAN No"}
            error={!values.cleaner_pan && "Required!"}
            value={values.cleaner_pan}
            name={"cleaner_pan"}
            // register={{ ...register("cleaner_pan", { required: true }) }}
            onChange={(e) =>
              setValues({ ...values, ["cleaner_pan"]: e.target.files[0] })
            }
          />
          <UploadInput
            label={"Adhar No"}
            error={!values.cleaner_aadhar && "Required!"}
            value={values.cleaner_aadhar}
            name={"cleaner_aadhar"}
            // register={{ ...register("cleaner_aadhar", { required: true }) }}
            onChange={(e) =>
              setValues({ ...values, ["cleaner_aadhar"]: e.target.files[0] })
            }
          />
        </div>
        <PhotoUpload
          name={"cleaner_photo"}
          error={!values.cleaner_photo && "Required!"}
          value={values.cleaner_photo}
          // register={{ ...register("cleaner_photo", { required: true }) }}
          onChange={(e) =>
            setValues({ ...values, ["cleaner_photo"]: e.target.files[0] })
          }
        />
      </div>
      <div className="btn-div">
        <BlackButton name={"Next"} handleClick={handleSubmit(handleClick)} />
      </div>
    </div>
  );
};

export default Tenant;

import React, { useState } from "react";
import {
  BlackButton,
  DateInput,
  FileUpload,
  LightButton,
  MultiImage,
  Phoneinput,
  PhotoUpload,
  SimpleInput,
} from "../../components/form-fields";
import "./Rental.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "../../context/KycContext";

const schema = yup.object({
  tenant_name: yup.string().required("Required!"),
  previous_tenant: yup.string().required("Required!"),
  rental_phone: yup.string().required("Required!"),
  agreement_start: yup.string().required("Required!"),
  agreement_end: yup.string().required("Required!"),
  unit_start_date: yup.string().required("Required!"),
  rental_start_date: yup.string().required("Required!"),
  rental_electricity: yup.string().required("Required!"),
  rental_water: yup.string().required("Required!"),
  monthly_rent: yup
    .number("Rent must be a number")
    .positive("Rent must be a positive value")
    .required("Required!"),
  security_deposit: yup
    .number("Rent must be a number")
    .positive("Rent must be a positive value")
    .required("Required!"),
  rental_photo: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
  rental_agreement: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
});

const Rental = ({ setPage }) => {
  const { setValues, data } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    setValue,
  } = useForm({
    defaultValues: {
      tenant_name: data.tenant_name,
      previous_tenant: data.previous_tenant,
      rental_phone: data.rental_phone,
      agreement_start: data.agreement_start,
      agreement_end: data.agreement_end,
      unit_start_date: data.unit_start_date,
      rental_start_date: data.rental_start_date,
      rental_electricity: data.rental_electricity,
      rental_water: data.rental_water,
      monthly_rent: data.monthly_rent,
      security_deposit: data.security_deposit,
      rental_photo: data.rental_photo,
      rental_agreement: data.rental_agreement,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  // const [imgObj, setImgObj] = useState();
  // // const imgArr = useTrait();

  // const deleteImg = (i) => {
  //   const s = imgObj.filter((item, index) => index !== i);
  //   setImgObj(s);
  //   // console.log(s);
  // };

  const handleNext = (data) => {
    // console.log(data);
    setValues(data);
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  // console.log(errors);

  return (
    <div className="rental_main">
      <h3>LooCafe Rental Details</h3>
      <SimpleInput
        label={"Tenant Name"}
        type={"text"}
        name={"tenant_name"}
        register={{ ...register("tenant_name") }}
        error={errors.tenant_name?.message}
      />
      <Phoneinput
        label={"Whatsapp Number"}
        error={errors.rental_phone?.message}
        name={"rental_phone"}
        phone={data.rental_phone}
        register={{ ...register("rental_phone") }}
        handlePhoneNumberChange={(value) =>
          setValue("rental_phone", value, {
            shouldDirty: true,
            shouldValidate: submitCount > 0,
          })
        }
      />
      <div className="unitNoFlex">
        <SimpleInput
          label={"Electricity Unit Number"}
          type={"number"}
          name={"rental_electricity"}
          register={{ ...register("rental_electricity") }}
          error={errors.rental_electricity?.message}
        />
        <SimpleInput
          label={"Water Bill Unit Number"}
          type={"number"}
          name={"rental_water"}
          register={{ ...register("rental_water") }}
          error={errors.rental_water?.message}
        />
      </div>
      <SimpleInput
        label={"Previous Tenant Name"}
        type={"text"}
        name={"previous_tenant"}
        register={{ ...register("previous_tenant") }}
        error={errors.previous_tenant?.message}
      />
      <SimpleInput
        label={"Security Deposit"}
        type={"number"}
        name={"security_deposit"}
        register={{ ...register("security_deposit") }}
        error={errors.security_deposit?.message}
      />
      <SimpleInput
        label={"Monthly rent"}
        type={"number"}
        name={"monthly_rent"}
        register={{ ...register("monthly_rent") }}
        error={errors.monthly_rent?.message}
      />
      <div className="unitNoFlex">
        <DateInput
          label={"Agreement Start Date"}
          name={"agreement_start"}
          register={{ ...register("agreement_start") }}
          error={errors.agreement_start?.message}
        />
        <DateInput
          label={"Agreement End Date"}
          name={"agreement_end"}
          register={{ ...register("agreement_end") }}
          error={errors.agreement_end?.message}
        />
      </div>
      <div className="unitNoFlex">
        <DateInput
          label={"Unit Start Date"}
          name={"unit_start_date"}
          register={{ ...register("unit_start_date") }}
          error={errors.unit_start_date?.message}
        />
        <DateInput
          label={"Rental Start Date"}
          name={"rental_start_date"}
          register={{ ...register("rental_start_date") }}
          error={errors.rental_start_date?.message}
        />
      </div>
      <MultiImage
        name={"rental_photo"}
        label={"Add Photos"}
        files={data.rental_photo}
        error={errors.rental_photo?.message}
        // val={values.rental_photo}
        register={{ ...register("rental_photo") }}
      />

      <FileUpload
        label={"Upload Agreement File"}
        error={errors.rental_agreement?.message}
        name={"rental_agreement"}
        file={data.rental_agreement}
        register={{ ...register("rental_agreement") }}
      />
      <div className="buttons">
        <BlackButton name={"Next"} handleClick={handleSubmit(handleNext)} />
        <LightButton name={"Back"} handleClick={handlePrev} />
      </div>
    </div>
  );
};

export default Rental;

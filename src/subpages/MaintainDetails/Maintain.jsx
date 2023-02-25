import React from "react";
import {
  BlackButton,
  LightButton,
  Phoneinput,
  SimpleInput,
} from "../../components/form-fields";
import "./Maintain.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../context/KycContext";
import { useNavigate } from "react-router-dom";

const Maintain = ({ setPage }) => {
  const schema = yup.object({
    partner_name: yup.string().required("Required!"),
    partner_phone: yup.string().required("Required!"),
    partner_alternate_phone: yup.string(),
  });

  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    setValue,
  } = useForm({
    defaultValues: {
      partner_name: data.partner_name,
      partner_phone: data.partner_phone,
      partner_alternate_phone: data.partner_alternate_phone,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleNext = (data) => {
    setValues(data);
    // console.log(data);
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  return (
    <div className="maintain_main">
      <h3>LooCafe Maintaining Partner</h3>
      <SimpleInput
        label={"Partner Name"}
        register={{ ...register("partner_name") }}
        error={errors.partner_name?.message}
      />
      <div className="mobileno">
        <Phoneinput
          label={"Mobile No."}
          register={{ ...register("partner_phone") }}
          phone={data.partner_phone}
          error={errors.partner_phone?.message}
          handlePhoneNumberChange={(value) =>
            setValue("partner_phone", value, {
              shouldDirty: true,
              shouldValidate: submitCount > 0,
            })
          }
        />
        <Phoneinput
          label={"Alternative Mobile No."}
          register={{ ...register("partner_alternate_phone") }}
          error={errors.partner_alternate_phone?.message}
          phone={data.partner_alternate_phone}
          handlePhoneNumberChange={(value) =>
            setValue("partner_alternate_phone", value, {
              shouldDirty: true,
              shouldValidate: submitCount > 0,
            })
          }
        />
      </div>
      <div className="buttons">
        <BlackButton name={"Next"} handleClick={handleSubmit(handleNext)} />
        <LightButton name={"Back"} handleClick={handlePrev} />
      </div>
    </div>
  );
};

export default Maintain;

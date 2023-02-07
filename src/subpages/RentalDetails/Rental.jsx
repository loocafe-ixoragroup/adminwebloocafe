import React from "react";
import {
  BlackButton,
  DateInput,
  FileUpload,
  LightButton,
  MultiImage,
  Phoneinput,
  SimpleInput,
} from "../../components/form-fields";
import "./Rental.css";

const Rental = () => {
  return (
    <div className="rental_main">
      <h3>LooCafe Rental Details</h3>
      <SimpleInput name={"Tenant Name"} error={""} type={"text"} />
      <Phoneinput name={"Whatsapp Number"} error={""} />
      <div className="unitNoFlex">
        <SimpleInput
          name={"Electricity Unit Number"}
          error={""}
          type={"number"}
        />
        <SimpleInput
          name={"Water Bill Unit Number"}
          error={""}
          type={"number"}
        />
      </div>
      <SimpleInput name={"Previous Tenant Name"} error={""} type={"text"} />
      <SimpleInput name={"Security Deposit"} error={""} type={"number"} />
      <SimpleInput name={"Monthly rent"} error={""} type={"number"} />
      <div className="unitNoFlex">
        <DateInput name={"Agreement Start Date"} error={""} />
        <DateInput name={"Agreement End Date"} error={""} />
      </div>
      <DateInput name={"Unit Start Date"} error={""} />
      <MultiImage name={"Add Photos"} error={""} />
      <FileUpload name={"Upload Agreement File"} error={""} />
      <div className="buttons">
        <BlackButton />
        <LightButton />
      </div>
    </div>
  );
};

export default Rental;

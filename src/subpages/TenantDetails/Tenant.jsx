import React from "react";
import {
  BlackButton,
  DateInput,
  Phoneinput,
  PhotoUpload,
  SimpleInput,
  StateCity,
  UploadInput,
} from "../../components/form-fields";
import "./Tenant.css";

const Tenant = () => {
  return (
    <div className="tenant_main">
      <h3>Tenant Details</h3>
      <div className="tenant_form">
        <div className="form_part1">
          <SimpleInput name={"Applicant Name"} error={""} type={"text"} />
          <SimpleInput name={"Father's/Spouse Name"} error={""} type={"text"} />
          <SimpleInput name={"Email ID"} error={""} type={"email"} />
          <div className="mobileno">
            <Phoneinput name={"Mobile No."} error={""} />
            <Phoneinput name={"Alternative Mobile No."} error={""} />
          </div>
          <SimpleInput name={"Street Adress"} error={""} type={"text"} />
          <StateCity />
          <div className="flex-div">
            <SimpleInput name={"Pincode"} error={""} />
            <DateInput name={"Date of Birth"} error="" />
          </div>
          <UploadInput name={"Adress Proof"} error="" />
          <UploadInput name={"PAN No"} error="" />
          <UploadInput name={"Adhar No"} error="" />
        </div>
        <PhotoUpload />
      </div>
      <div className="btn-div">
        <BlackButton name={"Submit"} />
      </div>
    </div>
  );
};

export default Tenant;

import React, { useState } from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import "./UploadInput.css";
import { IconUpload1 } from "../../../assets/icons";

const UploadInput = ({ name, error, label, value, onChange }) => {
  // const [file, setFile] = useState("");
  // console.log(value.name);
  return (
    <>
      <LabelComp name={label} error={error} />
      <div className="upload_container">
        <input
          type="file"
          name="upload"
          id={name}
          accept="image/png, application/pdf"
          // {...register}
          required
          onChange={onChange}
        />
        <span>{value && value.name}</span>
        <label htmlFor={name}>
          <img src={IconUpload1} alt="" />
          <span>Upload PNG/PDF</span>
        </label>
      </div>
    </>
  );
};

export default UploadInput;

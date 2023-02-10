import React, { useState } from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import "./UploadInput.css";
import { IconUpload1 } from "../../../assets/icons";
// import { Controller } from "react-hook-form";

const UploadInput = ({ name, error, label, register, file }) => {
  const [uploadedFile, setUplodedFile] = useState((file && file[0]) || "");
  // console.log(file && file[0]);
  return (
    <>
      <LabelComp name={label} error={error} />
      <div className="upload_container">
        <input
          type="file"
          name={name}
          id={name}
          accept="image/png, application/pdf"
          {...register}
          onChange={(e) => setUplodedFile(e.target.files[0])}
        />
        <span>{uploadedFile && uploadedFile.name}</span>
        <label htmlFor={name}>
          <img src={IconUpload1} alt="" />
          <span>Upload PNG/PDF</span>
        </label>
      </div>
    </>
  );
};

export default UploadInput;

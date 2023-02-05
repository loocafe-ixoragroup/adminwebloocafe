import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import "./UploadInput.css";
import { IconUpload1 } from "../../../assets/icons";

const UploadInput = ({ name, error }) => {
  return (
    <>
      <LabelComp name={name} error={error} />
      <div className="upload_container">
        <input type="file" name="upload" id="file" />
        <span>File</span>
        <label htmlFor="file">
          <img src={IconUpload1} alt="" />
          <span>Upload PNG/PDF</span>
        </label>
      </div>
    </>
  );
};

export default UploadInput;

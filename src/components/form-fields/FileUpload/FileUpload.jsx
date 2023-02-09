import React, { useState } from "react";
import { IconUpload3 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./FileUpload.css";

const FileUpload = ({ label, name, error, value, onChange }) => {
  const [file, setFile] = useState("");
  return (
    <>
      <LabelComp name={label} error={error} />
      <input
        type="file"
        name="upload-file"
        id={name}
        accept="application/pdf"
        // {...register}
        required
        className="file-input"
        onChange={onChange}
      />
      <div className="label-flex">
        <label htmlFor={name}>
          <img src={IconUpload3} alt="" />
          <span>Add File</span>
        </label>
        <span>{value && value.name}</span>
      </div>
    </>
  );
};

export default FileUpload;

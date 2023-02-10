import React, { useState } from "react";
import { IconUpload3 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./FileUpload.css";

const FileUpload = ({ label, name, error, register, file }) => {
  const [uplodedFile, setUplodedFile] = useState((file && file[0]) || "");
  // console.log(uplodedFile);
  return (
    <>
      <LabelComp name={label} error={error} />
      <input
        type="file"
        name={name}
        id={name}
        accept="application/pdf"
        {...register}
        className="file-input"
        onChange={(e) => setUplodedFile(e.target.files[0])}
      />
      <div className="label-flex">
        <label htmlFor={name}>
          <img src={IconUpload3} alt="" />
          <span>Add File</span>
        </label>
        <span>{uplodedFile && uplodedFile.name}</span>
      </div>
    </>
  );
};

export default FileUpload;

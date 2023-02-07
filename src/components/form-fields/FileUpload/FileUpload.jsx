import React from "react";
import { IconUpload3 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./FileUpload.css";

const FileUpload = ({ name, error }) => {
  return (
    <>
      <LabelComp name={name} error={error} />
      <input type="file" name="" id="agreement-file" className="file-input" />
      <div className="label-flex">
        <label htmlFor="agreement-file">
          <img src={IconUpload3} alt="" />
          <span>Add File</span>
        </label>
        <span>file</span>
      </div>
    </>
  );
};

export default FileUpload;

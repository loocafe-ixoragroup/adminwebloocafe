import React from "react";
import { addKycForm } from "../../apis/Api";
import { useData } from "../../context/KycContext";
import { BlackButton, LightButton } from "../form-fields";
import "./Confirm.css";

const Confirm = ({ show, onClose }) => {
  const { data } = useData();

  const finalSubmit = () => {
    const entries = Object.entries(data).filter(
      (entry) => typeof entry[1] !== "object"
    );
    const files = Object.entries(data).filter(
      (entry) => typeof entry[1] === "object"
    );

    const formData = new FormData();
    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    files.forEach((fileList) => {
      // console.log(fileList[1]);
      Array.from(fileList[1]).forEach((file) => {
        formData.append(fileList[0], file, file.name);
      });
    });

    addKycForm(formData);
    onClose();
  };

  // console.log(data);
  return (
    <div className={show ? "smodal__container show" : "smodal__container"}>
      <div className="smodal__content">
        <span>Are you sure you want to submit?</span>
        <div className="btns">
          <BlackButton name={"Submit"} handleClick={finalSubmit} />
          <LightButton name={"Cancel"} handleClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Confirm;

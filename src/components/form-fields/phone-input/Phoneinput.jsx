import React from "react";
import { LabelComp } from "../simple-input/SimpleInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
const Phoneinput = ({ name, error }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LabelComp name={name} error={error} />
      <PhoneInput
        country={"in"}
        inputStyle={{
          border: "1.2px solid #7b7b7b",
          borderRadius: "10px",
          fontSize: " 15px",
          width: "100%",
        }}
        buttonStyle={{
          border: "1.2px solid #7b7b7b ",
          borderRadius: "10px 0 0 10px",
        }}
        containerStyle={{
          minWidth: "340px",
          maxWidth: "600px",
        }}
      />
    </div>
  );
};

export default Phoneinput;

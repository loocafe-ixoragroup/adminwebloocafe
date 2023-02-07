import React from "react";
import "./Button.css";
function BlackButton({ handleClick, name, type }) {
  return (
    <button className="btn-dark" onClick={handleClick} type={type}>
      {name || "Submit"}
    </button>
  );
}

function LightButton() {
  return <button className="btn-light">Back</button>;
}

export { BlackButton, LightButton };

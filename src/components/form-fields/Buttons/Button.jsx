import React from "react";
import "./Button.css";
function BlackButton() {
  return <button className="btn-dark">Submit</button>;
}

function LightButton() {
  return <button className="btn-light">Back</button>;
}

export { BlackButton, LightButton };

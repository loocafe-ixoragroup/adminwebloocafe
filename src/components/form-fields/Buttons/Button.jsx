import React from "react";
import "./Button.css";
function BlackButton({ handleClick, name, type }) {
  return (
    <button className="btn-dark" onClick={handleClick} type={type}>
      {name}
    </button>
  );
}

function LightButton({ name, handleClick }) {
  return (
    <button className="btn-light" onClick={handleClick}>
      {name}
    </button>
  );
}
function ViewButton({ name, handleClick }) {
  return (
    <button className="btn-view" onClick={handleClick}>
      {name}
    </button>
  );
}

export { BlackButton, LightButton, ViewButton };

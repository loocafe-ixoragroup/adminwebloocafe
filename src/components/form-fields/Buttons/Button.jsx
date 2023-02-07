import React from "react";
import "./Button.css";
function BlackButton({name}) {
  return <button className="btn-dark">{name}</button>;
}

function LightButton({name}) {
  return <button className="btn-light">{name}</button>;
}
function ViewButton({name}){
  return <button className="btn-view">{name}</button>
}

export { BlackButton, LightButton, ViewButton };

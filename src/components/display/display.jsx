import React from "react";
import "./display.css";

export default function display(props) {
  return <div className="display">{props.value}</div>;
}

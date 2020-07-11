import React from "react";
import "./style.css";

const Switch = () => (
  <aside className="switch__container">
    <label htmlFor="switch" className="switch__label">
      Night Mode
    </label>
    <input className="switch" type="checkbox" id="switch" />
    <label className="switch__toggle" htmlFor="switch"></label>
  </aside>
);

export default Switch;
import React from "react";
import "./style.css";

const Switch = ({value, type, event}) => (

    <aside className="switch">
      <label htmlFor="switch" className="switch__label">
        Night Mode
    </label>
      <button
        className={type}
        id="switch"
        value={value}
        onClick={event}
      />
      <label className="switch__toggle" htmlFor="switch"></label>
    </aside>
  );

export default Switch;
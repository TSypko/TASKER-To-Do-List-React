import React, { useState } from "react";
import "./style.css";

const Switch = () => {
  const [theme, setTheme] = useState(false)
  const onThemeChange = ({ target }) => setTheme(() => {
    if (target.checked) {
      document.body.setAttribute("data-theme", "night");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }
  );
  return (
    <aside className="switch__container">
      <label htmlFor="switch" className="switch__label">
        Night Mode
    </label>
      <input
        className="switch"
        type="checkbox"
        id="switch"
        value={theme}
        onChange={onThemeChange}
      />
      <label className="switch__toggle" htmlFor="switch"></label>
    </aside>
  )
};

export default Switch;
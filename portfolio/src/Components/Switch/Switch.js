import React from "react";

import "./Switch.css";

const Switch = ({ handleToggle, dimensions }) => {
  let width = dimensions / 2;
  let height = dimensions / 4;
  let buttonwidth = (0.9 * dimensions) / 4;

  return (
    <>
      <input
        className="react-switch-checkbox"
        name="darkMode"
        id="react-switch-new"
        type="checkbox"
        onChange={handleToggle}
        checked={!(document.body.className == "light-theme")}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ width: width, height: height }}
      >
        <span
          className={`react-switch-button`}
          style={{
            width: buttonwidth,
            height: buttonwidth,
            borderRadius: buttonwidth,
          }}
        />
      </label>
    </>
  );
};

export default Switch;

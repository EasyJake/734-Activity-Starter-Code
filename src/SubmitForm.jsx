import React, { useContext } from "react";
import StylesContext from "./StylesContext";
import RequestFormButton from './RequestFormButton';

const SubmitForm = () => {
  const labelStyle = {
    color: "#FEE001",
    fontFamily: "Luminari, fantasy",
    fontSize: 18,
    textShadow: "1px 1px 2px red",
    display: "block",
    marginBottom: "10px"
  };

  return (
    <div style={{ display: "flex" }}>
      <form style={{ display: "inline-block" }}>
        <div style={{ display: "block", marginBottom: "10px" }}>
          <label style={labelStyle}>
            Name of Comic:
            <input type="text" />
          </label>
        </div>
        <div style={{ display: "block", marginBottom: "10px" }}>
          <label style={labelStyle}>
            Year of Release:
            <input type="text" />
          </label>
        </div>
        <div style={{ display: "block", marginBottom: "10px" }}>
          <label style={labelStyle}>
            Your Email:
            <input type="text" />
          </label>
        </div>
        <RequestFormButton />
      </form>
    </div>
  );
};

export default SubmitForm;

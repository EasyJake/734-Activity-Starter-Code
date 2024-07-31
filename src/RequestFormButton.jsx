import React, { useContext } from "react";
import StylesContext from "./StylesContext";

const RequestFormButton = () => {
  const buttonStyling = useContext(StylesContext);

  return (
    <div>
      <button style={buttonStyling}>Submit your request</button>
    </div>
  );
};

export default RequestFormButton;

import React, { useContext } from "react";
import StylesContext from "./StylesContext";

const CollectorButton = () => {
  const buttonStyling = useContext(StylesContext);

  return (
    <div>
      <button style={buttonStyling}>Are you a collector?</button>
    </div>
  );
};

export default CollectorButton;

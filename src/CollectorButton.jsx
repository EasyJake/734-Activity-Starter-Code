import React, { useContext } from "react";
import StylesContext from "./StylesContext";

const CollectorButton = () => {
  const styles = useContext(StylesContext);

  return (
    <button style={styles}>Click Here!</button>
  );
};

export default CollectorButton;

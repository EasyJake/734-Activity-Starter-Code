// src/StylesContext.js
import React from 'react';

// Create and export the context

const StylesContext = React.createContext({
    background: "#1ECD97",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15
});

export default StylesContext;

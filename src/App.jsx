import React from 'react';
import './App.css';
import UserInterface from "./UserInterface";
import StylesContext from "./StylesContext";

function App() {
  const stylin = {
    background: "#1ECD97",
    display: "block",
    width: 150,
    height: 70,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15
  };

  const headerStyle = {
    color: "#FEE001",
    fontFamily: "Luminari, fantasy",
    fontSize: 50,
    textShadow: "1px 1px 2px red"
  };

  const textStyle = {
    color: "#FEE001",
    fontFamily: "Luminari, fantasy",
    fontSize: 24,
    textShadow: "1px 1px 2px red",
    textAlign: "center"
  };

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundImage: 'url("https://images.unsplash.com/photo-1587270613291-b5c7042fc104?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
    height: "700px",
    margin: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  return (
    <main style={containerStyle}>
      <StylesContext.Provider value={stylin}>
        <h1 style={headerStyle}>
          Welcome to Comics Galore!
        </h1>
        <p style={textStyle}>
          We carry the latest and greatest editions of your favorite comic books!<br />
          Are you a collector?
        </p>
        <UserInterface />
      </StylesContext.Provider>
    </main>
  );
}

export default App;

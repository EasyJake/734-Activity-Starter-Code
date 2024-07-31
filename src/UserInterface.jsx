import React from 'react';
import CollectorButton from './CollectorButton';
import SubmitForm from './SubmitForm';

const UserInterface = () => {
  const textStyle = {
    color: "#FEE001",
    fontFamily: "Luminari, fantasy",
    fontSize: 24,
    textShadow: "1px 1px 2px red",
    textAlign: "center",
    marginBottom: "20px"
  };

  return (
    <div>
      <CollectorButton />
      <p style={textStyle}>
        Have a special request? Click here to fill out our form
      </p>
      <SubmitForm />
    </div>
  );
};

export default UserInterface;

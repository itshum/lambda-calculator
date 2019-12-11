import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={() => props.addNumber(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props 
      Add button tag and create .text props*/}
      {props.text}
    </button>
  );
};

export default NumberButton;

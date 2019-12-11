import React from "react";

const OperatorButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props 
      Using props we're tapping into operator.char from data file. */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;

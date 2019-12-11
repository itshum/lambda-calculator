import React, { useState } from "react";
import NumberButton from "./NumberButton"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state. Setup useState for button Numbers and attch default value of useState as numbers. 
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component
       .map gives us back expressions/array
       using .map over buttonNumber array, we're taking in number and returning all other buttons
       -- Then you plug in .text props as key w/ value of Number in {} */}
    {buttonNumbers.map(number => {
      return <NumberButton  key={number}
                            text ={number}
                            addNumber={props.addNumber}/>;
    })}
  </div>
  );
};

export default Numbers; 

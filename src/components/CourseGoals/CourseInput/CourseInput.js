import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim() !== "") {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() === "") {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
       {/* brackets for dymanic data */}
      <div className={`form-control ${!isValidInput? 'invalid' : ''}`}>
        <label >
          Course Goal
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

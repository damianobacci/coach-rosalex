import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  // List of states for the form
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlySavings, setYearlySavings] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [duration, setDuration] = useState(10);

  //List of handlers for the form
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  // To reset the form
  const formResetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");
    props.onReset();
  };

  // When the form is submitted

  const formHandler = (event) => {
    event.preventDefault();
    let userInput = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": expectedReturn,
      duration: duration,
    };
    calculateHandler(userInput);
  };

  // Function used to calculate the data based on the input

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavingsSum = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavingsSum * expectedReturn;
      currentSavingsSum += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        initial: +currentSavings,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsSum,
        yearlyContribution: yearlyContribution,
      });
    }
    //send data UP to the App Component
    props.onSentData(yearlyData);
  };

  return (
    <form className={styles.form} onSubmit={formHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSavings}
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlySavings}
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={expectedReturn}
            id="expected-return"
            onChange={expectedReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={duration}
            id="duration"
            onChange={durationHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={formResetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;

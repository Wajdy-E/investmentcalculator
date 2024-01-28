import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    duration: 5,
    expectedReturn: 6,
  });
  
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  const inputIsValid = userInput.duration >= 1;
  

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Enter duration greater than zero.</p>}
      { inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;

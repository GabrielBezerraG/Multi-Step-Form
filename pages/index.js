import React from "react";
import Main from "../src/components/Main";
import MobileSidebar from "../src/components/MobileSidebar";
import validateInput from "../src/functions/validateInput";
import data from "../data.json";


export default function Home() {

  const addOnsArray = Object.keys(data.addOns);
  const plansArray = Object.keys(data.plans);

  const addOnsInitialState = {
    [addOnsArray[0]]: true,
    [addOnsArray[1]]: true,
    [addOnsArray[2]]: false
  };

  const [currentStep, setCurrentStep] = React.useState(1);
  const [monthly, setMonthly] = React.useState(true);
  const [plan, setPlan] = React.useState(plansArray[0]);
  const [addOns, setAddOns] = React.useState(addOnsInitialState);

  const [nameInput, setNameInput] = React.useState({ value: "", error: false });
  const [emailInput, setEmailInput] = React.useState({ value: "", error: false });
  const [phoneInput, setPhoneInput] = React.useState({ value: "", error: false });


  function nextStep() {
    const step = currentStep;
    if (step === 1) {
      const inputValues = [nameInput.value, emailInput.value, phoneInput.value];
      if (inputValues.every(value => value !== '')) {
        setCurrentStep(step + 1);
      } else {
        validateInput(setNameInput);
        validateInput(setEmailInput);
        validateInput(setPhoneInput);
      }

    } else if (step < 5) {
      setCurrentStep(step + 1);
    }
  }

  function previousStep() {
    const step = currentStep;
    if (step > 0) {
      setCurrentStep(step - 1);
    }
  }

  const store = {
    currentStep: currentStep,
    setCurrentStep: setCurrentStep,
    monthly: monthly,
    setMonthly: setMonthly,
    plan: plan,
    setPlan: setPlan,
    addOns: addOns,
    setAddOns: setAddOns,
    nameInput: nameInput,
    setNameInput: setNameInput,
    emailInput: emailInput,
    setEmailInput: setEmailInput,
    phoneInput: phoneInput,
    setPhoneInput: setPhoneInput,

    nextStep: nextStep,
    previousStep: previousStep
  }


  return (
    <div className="main-container">
      <MobileSidebar store={store} />
      <Main store={store} />
    </div>
  )
}

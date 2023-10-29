import { useState } from "react";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Stepper from "./Stepper.jsx";
import Submit from "./Submit.jsx";
import { STEPS } from "./constants.js";

const AddGameForm = () => {

  const [activeStep, setActiveStep] = useState(STEPS.STEP1);

  const handleSumbit = (event) => {
    event.preventDefault();
    setActiveStep(activeStep + 1);
  }

  return (
    <>
      <Stepper activeStep={activeStep} />
      <div className="mt-7 mb-20">
        {activeStep === STEPS.STEP1 && <Step1 />}
        {activeStep === STEPS.STEP2 && <Step2 />}
        {activeStep === STEPS.STEP3 && <Step3 />}
        <div className="fixed left-0 bottom-0 w-full">
          <Submit setActiveStep={setActiveStep} activeStep={activeStep} />
        </div>
      </div>
    </>
  )
}

export default AddGameForm

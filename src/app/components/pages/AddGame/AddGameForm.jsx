import { useState } from "react";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Stepper from "./Stepper.jsx";
import Submit from "./Submit.jsx";
import { STEPS } from "./constants.js";
import { useAddGameFormStore } from "../../../store/addGameForm.js";

const AddGameForm = () => {
  const activeStep = useAddGameFormStore(state => state.activeStep);
  const gameData = useAddGameFormStore(state => state.game);
  const setGameData = useAddGameFormStore(state => state.setGameData);
  const setActiveStep = useAddGameFormStore(state => state.setActiveStep);

  const handleSumbit = () => {
    //TODO: change submit text in 3 step
    setActiveStep(activeStep + 1);
    if (activeStep === STEPS.STEP3) {
      // TODO: validation all form completed
      // TODO: call createGame API
      console.log('FINAL GAME DATA', gameData);
      // TODO: redirect to index.astro page

    }
  }

  return (
    <>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="mt-7 mb-20">
        {activeStep === STEPS.STEP1 && <Step1 client:load setGameData={setGameData} />}
        {activeStep === STEPS.STEP2 && <Step2 client:load setGameData={setGameData} />}
        {activeStep === STEPS.STEP3 && <Step3 client:load setGameData={setGameData} />}
        <div className="fixed left-0 bottom-0 w-full">
          <Submit onSubmit={handleSumbit}  />
        </div>
      </div>
    </>
  )
}

export default AddGameForm

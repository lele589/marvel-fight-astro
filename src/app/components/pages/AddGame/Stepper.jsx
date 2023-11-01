import { STEPS } from "./constants.js";

const Stepper = ({ activeStep, setActiveStep }) => {

  return (
    <ul className="steps w-full">
        <li className={`step ${activeStep === STEPS.STEP1 ? 'step-primary' : ''}`}>
          <button 
            className="btn no-animation" 
            onClick={() => setActiveStep(STEPS.STEP1)}>Héroe</button>
        </li>
        <li className={`step ${activeStep === STEPS.STEP2 ? 'step-primary' : ''}`}>
          <button 
            className="btn no-animation" 
            onClick={() => setActiveStep(STEPS.STEP2)}>Villano</button>
        </li>
        <li className={`step ${activeStep === STEPS.STEP3 ? 'step-primary' : ''}`}>
          <button 
            className="btn no-animation" 
            onClick={() => setActiveStep(STEPS.STEP3)}>Más info</button>
        </li>
    </ul>
  )
}

export default Stepper
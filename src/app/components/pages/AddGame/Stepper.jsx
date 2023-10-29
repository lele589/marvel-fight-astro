import { STEPS } from "./constants.js";

const Stepper = ({ activeStep }) => {
  return (
    <ul className="steps w-full">
        <li className={`step ${activeStep === STEPS.STEP1 ? 'step-primary' : ''}`}>Héroe</li>
        <li className={`step ${activeStep === STEPS.STEP2 ? 'step-primary' : ''}`}>Villano</li>
        <li className={`step ${activeStep === STEPS.STEP3 ? 'step-primary' : ''}`}>Más info</li>
    </ul>
  )
}

export default Stepper
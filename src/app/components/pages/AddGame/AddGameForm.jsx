import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Stepper from "./Stepper.jsx";
import Submit from "./Submit.jsx";

const AddGameForm = () => {
  return (
    <>
        <Stepper />
		<form class="mt-7">
			<Step1 />
			<Step2 />
			<Step3 />
            <Submit />
		</form>
    </>
  )
}

export default AddGameForm

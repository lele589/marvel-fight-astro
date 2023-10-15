import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Stepper from "./Stepper.jsx";
import Submit from "./Submit.jsx";

const AddGameForm = () => {
  return (
    <>
        <Stepper />
		<form className="mt-7 mb-20">
      <div className="fixed left-0 bottom-0 w-full">
        <Submit onSubmit={handleSubmit} />
      </div>
		</form>
    </>
  )
}

export default AddGameForm

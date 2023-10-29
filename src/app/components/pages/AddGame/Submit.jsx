import { useState } from "react";
import IconSpinner from "../../shared/icons/IconSpinner";

const Submit = ({ setActiveStep, activeStep }) => {
    const [isLoading, setIsLoading] = useState(false);

    
    const handleSubmit = () => {
        setIsLoading(true);
        setActiveStep(activeStep + 1);
        setIsLoading(false);
    };
    
    
    // TODO: fix click styles
    return (
        <button
            className="btn btn-primary btn-lg rounded-none w-full"
            onClick={() => handleSubmit()}
            disabled={isLoading}
        >
            {isLoading ? (
            <IconSpinner />
            ) : 'Siguiente'}
        </button> 
    );
    }

export default Submit
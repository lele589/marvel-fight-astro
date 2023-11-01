import { useState } from "react";
import IconSpinner from "../../shared/icons/IconSpinner";

const Submit = ({ onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);

    
    const handleSubmit = () => {
        setIsLoading(true);
        onSubmit();
        setIsLoading(false);
    };
    
    
    // TODO: fix click styles
    return (
        <button
            type="button"
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
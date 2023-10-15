import { useState } from "react";

const Submit = ({ onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async () => {
        setIsLoading(true);
        await onSubmit();
    };
    
    // TODO: fix click styles
    return (
        <button
            className="btn btn-primary btn-lg rounded-none w-full"
            onClick={handleSubmit}
            disabled={isLoading}
        >
            {isLoading ? (
            <Spinner />
            ) : 'Siguiente'}
        </button>
    );
    }

export default Submit
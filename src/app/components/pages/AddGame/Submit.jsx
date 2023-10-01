import { useState } from "react";

const Submit = ({ game, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async () => {
        setIsLoading(true);
        await onSubmit(game);
    };
    
    return (
        <div className="submit">
        <button
            className="btn btn-primary btn-lg w-full"
            onClick={handleSubmit}
            disabled={isLoading}
        >
            {isLoading ? (
            <Spinner />
            ) : 'Siguiente'}
        </button>
        </div>
    );
    }

export default Submit
import { createContext } from "react";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // Define any state or functions to share via the context
    const contextValue = {
        // Add properties or functions to pass to children here
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} {/* Render child components */}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

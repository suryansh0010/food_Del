import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets"; // Check this import to make sure it's correct

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // If you're fetching the food_list from an API, make sure it's fetched correctly
    const [foodData, setFoodData] = useState([]);

    // Simulating data fetch from the assets for example purposes
    useEffect(() => {
        // Ensure food_list has valid data or fetch it from an API
        setFoodData(food_list); 
    }, []);

    const contextValue = {
        food_list: foodData // Ensure that this value contains food items
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

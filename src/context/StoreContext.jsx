import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItem] = useState({});
    
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }; 

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 1) {
            
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } else {
           
            const updatedCart = { ...cartItems };
            delete updatedCart[itemId];
            setCartItem(updatedCart);
        }
    };

    const [foodData, setFoodData] = useState([]);
    
    useEffect(() => {
        setFoodData(food_list); 
    }, []);

    const contextValue = {
        food_list: foodData,    
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

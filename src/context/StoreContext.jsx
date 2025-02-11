import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets"; // Ensure this import is correct

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    setFoodData(food_list); // Ensure foodData is set properly
  }, []);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = foodData.find((product) => product._id === item);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list: foodData,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
  
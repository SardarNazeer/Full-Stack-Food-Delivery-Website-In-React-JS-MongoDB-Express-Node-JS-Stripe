import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // 🛒 Add to Cart
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // ❌ Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updated = { ...prev };
        delete updated[itemId]; // agar quantity 0 ho jaye to item remove kar do
        return updated;
      }
    });
  };

  // 🧮 Subtotal calculation
  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = food_list.find((food) => food._id === itemId);
      if (item) {
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  };

  // 🚚 Delivery Fee
  const getDeliveryFee = () => {
    const subtotal = getTotalCartAmount();
    return subtotal > 0 ? 2 : 0; // e.g. fixed $2 fee
  };

  // 💰 Final total = subtotal + delivery fee
  const getFinalTotal = () => {
    return getTotalCartAmount() + getDeliveryFee();
  };

  useEffect(() => {
    console.log("🧾 Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee,
    getFinalTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

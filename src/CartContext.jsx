import { createContext, useState } from "react";
import { useReducer } from "react";
export const CartContext = createContext();

const reducer = (state,action) =>{
    switch(action.type){
      case "ADD_TO_CART":{
        const existing = state.find((item)=> item.id === action.payload.id);
        if (existing){
          return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        }
         return [...state, { ...action.payload, quantity: 1 }];
      }
      case "Increment_Qty":
  return state.map(item =>
    item.id === action.payload
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
case "Decrement_Qty":
  return state
    .map(item =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0);

      case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);
      
      default:
      return state;
    }
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);

  // const addToCart = (product) => {
  //   setCart((prev) => {
  //     const exists = prev.some(item => item.id === product.id);
  //     if (exists) return prev;  
  //     return [...prev, product];
  //   });
  // };

  // const removeCart = (productName) => {
  //   setCart((prev) =>
  //     prev.filter(item => item.name !== productName)
  //   );
  // };

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

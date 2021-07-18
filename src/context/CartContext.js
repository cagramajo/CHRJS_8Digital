import React, {createContext, useState} from "react";
import useCartState from "../hooks/useCartState";

const CartContext = createContext();

const CartProvider = (props) => {
    const initialCartState = useCartState()
    return (
        <CartContext.Provider value={initialCartState}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartProvider}
export default CartContext;


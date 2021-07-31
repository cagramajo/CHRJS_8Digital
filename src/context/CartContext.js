import React, {createContext} from "react";
import useCartState from "../hooks/useCartState";

const CartContext = createContext();

const CartProvider = (props) => {
    const cartState = useCartState()
    return (
        <CartContext.Provider value={cartState}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartProvider}
export default CartContext;


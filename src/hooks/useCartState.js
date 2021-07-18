import { useState } from "react";
import initialCartState from "../InitialCartState";

const useCartState = () =>{

    const [state, setState] = useState(initialCartState);

    const addToCart = payload => {

        const items = state.itemsCart;
        console.log(items);
        console.log(payload);
        const existe = !(items.find(item => item.product.IdProduct == payload.product.IdProduct)); 
        console.log(existe);
        setState({
                    ...state,
                    itemsCart: [...state.itemsCart, payload]
                })
      
    }

    return{
        addToCart,
        state,
    }
}

export default useCartState;
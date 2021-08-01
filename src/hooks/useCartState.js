import { useState } from "react";
import {db} from '../firebase'
//import initialCartState from "../InitialCartState";

const useCartState = () =>{

    const initialCartState = {
        itemsCart: [],
        orderId: 0,
    };

    const [state, setState] = useState(initialCartState);

    const addToCart = payload => {

        //const items = state.itemsCart;
        //const existe = !(items.find(item => item.product.IdProduct === payload.product.IdProduct)); 
        setState({
                    ...state,
                    itemsCart: [...state.itemsCart, payload]
                })      
    }

    const newOrder = (order) => {
        let salida = 0;
        const orders = db.collection('orders');
        orders.add(order)
            .then((ref) => {
                console.log('Orden registrada: ', ref.id);
                salida = ref.id;
                setState({
                    ...state,
                    orderId: salida,
                })
            })
            .catch((e) => {
                console.error(e);
                return salida;
            });
    } 

    return{
        addToCart,
        newOrder,
        state,
    }
}

export default useCartState;
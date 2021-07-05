import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext'
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../Loading/Loading";
import { Container } from "@material-ui/core";
import "./ItemDetailContainer.css";

function ItemDetailContainer({ match }) {

    let IdProduct = match.params.IdProduct;
    let itemCart = {
        itemArticle:{},
        quantity:0,
    }
    let auxItems = [];

    const [items, setItems] = useContext(CartContext);
    const [Item, setItem] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    useEffect(() => {
        fetch(`https://my.api.mockaroo.com/product/${IdProduct}.json?key=e244da50`)
        .then((response) => {
            if (!response.ok) {
            throw Error("Connecting Error");
            }
            return response.json();
        })
        .then((product) => {
            setItem(product);
            setIsPending(false);
            setError(false);
        })
        .catch((error) => {
            setIsPending(false);
            setError(error.message);
        });
        console.log('useEffect')
    }, [IdProduct]);

    const onAdd = (quantity) => {
        setSelectedQuantity(quantity);
        itemCart.itemArticle = Item;
        itemCart.quantity = quantity;
        auxItems = items;
        console.log(auxItems);
        auxItems.push(itemCart);
        console.log(itemCart);
        console.log(auxItems);
        /* console.log(`Agregamos ${quantity} unidades del producto id: ${Item.IdProduct} al carrito`); */
    }

    const renderActionComponent = () => {

        let out = null
        if ((selectedQuantity > 0)) {
            out = (
                <Link to = '/cart'>
                    <button className="ui primary button" /* onClick={() => onAdd(quantity)} */>Terminar mi compra</button>
                </Link>
                )
        }
        else if (Item != null){
            out = (<ItemCount 
                    stock = {Item.Stock}
                    initial = {1}
                    onAdd = {onAdd}/>)
        }
        return out;
    }


    return (
        <div className="ItemDetailContainer">
        {isPending && <Loading />}
        {error && <div className="Error">{error}</div>}
        {!error && !isPending && (
            <Container>
                <ItemDetail
                    key={Item.IdProduct}
                    Photo={Item.UrlPhoto}
                    AltPhoto={Item.AltPhoto}
                    NameProduct={Item.NameProduct}
                    Description={Item.LongDescription}
                    Price={Item.Price}
                    Category={Item.Category}
                />
            </Container>
        )}
        {renderActionComponent()}
        </div>
    );
}

export default ItemDetailContainer;

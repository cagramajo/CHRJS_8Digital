import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import ProductContext from "../../context/ProductContext";
import CartContext from '../../context/CartContext'
import { Container } from "@material-ui/core";
import "./ItemDetailContainer.css";

function ItemDetailContainer({ match }) {

    let IdProduct = match.params.IdProduct;

    const productsState = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const product = productsState.products.find(product => product.IdProduct == IdProduct);
    
    const handleAddToCar = (quantity) => {
        let itemCart = {
            product : product,
            quantity: quantity,
        }
        addToCart(itemCart);
        setSelectedQuantity(quantity);
    }

    const renderActionComponent = () => {
        let out = null
        if ((selectedQuantity > 0)) {
            out = (
                <Link to = '/cart'>
                    <button className="ui primary button" >Terminar mi compra</button>
                </Link>
                )
        }
        else if (product != null){
            out = (<ItemCount 
                    stock = {product.Stock}
                    initial = {1}
                    onAdd = {handleAddToCar}/>)
        }
        return out;
    }


    return (
        <div className="ItemDetailContainer">
            <Container>
                <ItemDetail
                    key={product.IdProduct}
                    Photo={product.UrlPhoto}
                    AltPhoto={product.AltPhoto}
                    NameProduct={product.NameProduct}
                    Description={product.LongDescription}
                    Price={product.Price}
                    Category={product.Category}
                />
            </Container>
        {renderActionComponent()}
        </div>
    );
}

export default ItemDetailContainer;

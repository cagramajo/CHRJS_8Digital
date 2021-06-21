import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    const [Item, setItem] = useState({});

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/product/123.json?key=e244da50')
        .then(response => response.json())
        .then(product => setItem(product));
    }, []);

    return (
        <div className = 'ItemDetailContainer'>
            <ItemDetail
                key = {Item.IdProduct}
                Photo = {Item.UrlPhoto}
                AltPhoto = {Item.AltPhoto}
                NameProduct = {Item.NameProduct}
                Desciption = {Item.Desciption}
                Price = {Item.Price}
            />
            <ItemCount 
                stock = {Item.Stock}
                initial = {1}
            />
        </div>
    )
}

export default  ItemDetailContainer
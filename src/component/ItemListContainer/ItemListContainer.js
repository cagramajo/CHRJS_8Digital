import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer() {

    const [productsState, setproductsState] = useState([]);
    useEffect(() => {
        fetch('https://my.api.mockaroo.com/products.json?key=e244da50')
        .then(response => response.json())
        .then(products => setproductsState(products));       
    }, []);

    return (
        <div className='ItemListContainer'>
            <ItemList list={productsState} />
        </div>
    )
}

export default ItemListContainer

/*
<ItemCount  stock ='5'
            initial = "1"
            onAdd = {onAdd}/>
<div>{props.title}</div>
*/
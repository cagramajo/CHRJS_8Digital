import React from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer(props) {

    const onAdd = (quantity) => {
        console.log('Agregar al carrito', quantity);
    }
    
    return (
        <div className='ItemListContainer'>
            <ItemList />
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
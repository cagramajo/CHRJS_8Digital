import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'


function ItemListContainer(props) {

    const onAdd = (quantity) => {
        console.log('Agregar al carrito', quantity);
    }
    

    return (
        <div className='ItemListContainer'>
            <ItemCount  stock ='5'
                        initial = "1"
                        onAdd = {onAdd}/>
            <div>{props.title}</div>
        </div>
    )
}

export default ItemListContainer

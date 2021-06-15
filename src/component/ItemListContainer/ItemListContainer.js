import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'


function ItemListContainer(props) {
    return (
        <div className='ItemListContainer'>
            <ItemCount />
            <button className="ui primary button">{props.title}</button>
        </div>
    )
}

export default ItemListContainer

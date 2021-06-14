import React, { Component } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

class ItemListContainer extends Component {
    render() {
        return (
            <div className='ItemListContainer'>
                <ItemCount />
                <button className="ui primary button">Comprar!</button>
            </div>
        )
    }
}

export default ItemListContainer;


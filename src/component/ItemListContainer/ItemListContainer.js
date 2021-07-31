import React, {useContext} from 'react'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading'
import ProductContext from '../../context/ProductContext';

import './ItemListContainer.css'

function ItemListContainer({ match }) {

    const productsState = useContext(ProductContext);
    const selectedCategory = match.params.CategoryName
    const {pending} = productsState;
    const {error} = productsState;

    const products = (!selectedCategory) ? 
        (productsState.products)
        :
        (productsState.products.filter(product => product.Category === selectedCategory));

    return (
        <div className='ItemListContainer'>
            {pending && <Loading/>}
            {error && <div className='Error'>{error}</div>}
            {(!error) && (!pending) && <ItemList list={products} />}
        </div>
    )
}

export default ItemListContainer
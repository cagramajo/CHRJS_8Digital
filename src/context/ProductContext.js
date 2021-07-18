import React, {createContext, useState} from 'react';
import useProductsState from '../hooks/useProductsState';

const ProductContext = createContext();

const ProductProvider = (props) => {
    const initialProductState = useProductsState();
    return(
        <ProductContext.Provider value={initialProductState}>
            {props.children}
        </ProductContext.Provider>
    )
}
export {ProductProvider};
export default ProductContext;
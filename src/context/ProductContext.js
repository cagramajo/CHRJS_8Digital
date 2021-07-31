import React, {createContext} from 'react';
import useProductsState from '../hooks/useProductsState';

const ProductContext = createContext();

const ProductProvider = (props) => {
    const productState = useProductsState();
    return(
        <ProductContext.Provider value={productState}>
            {props.children}
        </ProductContext.Provider>
    )
}
export {ProductProvider};
export default ProductContext;
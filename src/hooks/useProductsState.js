import {useState, useEffect} from 'react';
import initialProductsState from '../InitialProductsState';

const useProductsState = () => {
    const [state, setState] = useState(initialProductsState)
    const URL = 'https://my.api.mockaroo.com/products.json?key=e244da50'

    useEffect(() => {
        fetch(URL)
            .then(res => {
                if(!res.ok) {
                    throw Error('Connecting Error')
                }
                return res.json();
            })
            .then(products => {
                setState({
                    ...state,
                    products: products,
                    categories : products.map((item) => {return item.Category}).reduce((acc,item)=>{
                        if(!acc.includes(item)){
                            acc.push(item);
                        }
                        return acc;
                      },[]),
                    pending: false,
                })
            })
            .catch(err => {
                setState({
                    ...state,
                    pending: false,
                    error: err.message,
                })
            })
    }, [URL])
    return state;
};

export default useProductsState;
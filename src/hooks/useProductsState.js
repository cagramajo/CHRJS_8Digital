import {useState, useEffect} from 'react';
//import initialProductsState from '../InitialProductsState';
import {db} from '../firebase'

const useProductsState = () => {
    
    const initialProductsState = {
        products:[],
        categories:[],
        pending: true,
        error: null,
    };

    const [state, setState] = useState(initialProductsState);
    //const URL = 'https://my.api.mockaroo.com/products.json?key=e244da50'

    useEffect(() => {
        const itemCollection = db.collection('products');
        itemCollection.get()
            .then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('Sin resultados');
                };
                const productsObtained = querySnapshot.docs.map(doc => ({
                    IdProduct: doc.id,
                    ...doc.data(),
                }));
                setState({
                    ...state,
                    products: productsObtained,
                    categories : productsObtained.map((item) => {return item.Category}).reduce((acc,item)=>{
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
            });
    }, []);
   
    return state;
};

export default useProductsState;
import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'
import './ItemDetailContainer.css'

function ItemDetailContainer({match}) {

    let IdProduct = match.params.IdProduct;

    const [Item, setItem] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    console.log(IdProduct);
    console.log(`https://my.api.mockaroo.com/product/${IdProduct}.json?key=e244da50`);

    useEffect(() => {
        fetch(`https://my.api.mockaroo.com/product/${IdProduct}.json?key=e244da50`)
            .then(response => {
                if(!response.ok){
                    throw Error('Connecting Error');
                }
                return response.json();
            })
            .then(product => {
                setItem(product);
                console.log(product);
                setIsPending(false);
                setError(false);
            })
            .catch(error => {
                setIsPending(false);
                setError (error.message);
            });
    }, [IdProduct]);

    return (
        <div className = 'ItemDetailContainer'>
            {isPending && <Loading/>}
            {error && <div className='Error'>{error}</div>}
            {(!error) && (!isPending) &&
                (<ItemDetail
                    key = {Item.IdProduct}
                    Photo = {Item.UrlPhoto}
                    AltPhoto = {Item.AltPhoto}
                    NameProduct = {Item.NameProduct}
                    Desciption = {Item.Desciption}
                    Price = {Item.Price}
                    stock = {Item.Stock}
                />)}
        </div>
    )
}

export default  ItemDetailContainer
import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading'
import './ItemListContainer.css'

function ItemListContainer({ match }) {

    let selectedCategory = match.params.CategoryName
    let url = ''
    
    const [products, setproducts] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, seterror] = useState(null)

    useEffect(() => {

        if (selectedCategory) {
            url = `https://my.api.mockaroo.com/products/category/${selectedCategory}.json?key=e244da50`
        }
        else {
            url = 'https://my.api.mockaroo.com/products.json?key=e244da50'
        }

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Connecting ERROR')
                }
                return res.json();
            })
            .then(products => {
                setproducts(products);
                setIsPending(false);
                seterror(false);
            })
            .catch(err => {
                setIsPending(false);
                seterror(err.message);
            });       
    }, [selectedCategory]);

    console.log(selectedCategory);

    return (
        <div className='ItemListContainer'>
            {isPending && <Loading/>}
            {error && <div className='Error'>{error}</div>}
            {(!error) && (!isPending) && <ItemList list={products} />}
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
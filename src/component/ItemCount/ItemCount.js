import React from "react";
import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

  //let quantity = 5;
  const [quantity, updateQuantity] = useState(0);
  const handleClickAdd = () => {
    updateQuantity((quantity < stock) ?  quantity +1 : quantity )
  };
  const handleClickSubtract = () =>{
    updateQuantity((quantity >= initial) ? quantity -1 : quantity)
  }

    
  return (
    <div className='ItemCount'>
      <div>
        <button className="ui red button" onClick={handleClickSubtract}>-</button>
        <div className="ui input ">
          <input className='CountBox' type="text" placeholder={quantity}/>
        </div>
        <button className="ui green button" onClick={handleClickAdd}>+</button>
      </div>
      <button className="ui primary button" onClick={(onAdd)}>Me llevo {quantity}!!</button>
    </div>
  );
};

export default ItemCount;

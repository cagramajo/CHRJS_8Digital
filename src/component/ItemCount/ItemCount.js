import React from "react";
import './ItemCount.css'
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

  //let quantity = 5;
  const [quantity, updateQuantity] = useState(initial);
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
      <button className={quantity == 0 ? "ui disabled button" : "ui primary button"} onClick={() => onAdd(quantity)}>Me llevo {quantity}!!</button>
    </div>
  );
};

export default ItemCount;

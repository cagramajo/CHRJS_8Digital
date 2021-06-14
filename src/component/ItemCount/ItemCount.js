import React from "react";
import './ItemCount.css'

const ItemCount = () => {
  return (
    <div>
      <div>
        <button className="ui red button">-</button>
        <div className="ui input ">
          <input className='CountBox' type="text" placeholder="0" />
        </div>
        <button className="ui green button">+</button>
      </div>
    </div>
  );
};

export default ItemCount;

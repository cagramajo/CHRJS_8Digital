import React from "react";
import Item from "../Item/Item";
import {Link} from 'react-router-dom'

export default function ItemList({list}) {

  return (
    <div >
        {list.map(item =>
            <div key = {item.IdProduct} className = 'ItemList'>
                <Link to = {`/product/${item.IdProduct}`}>
                    <Item
                        Photo={item.UrlPhoto}
                        AltPhoto={item.AltPhoto}
                        NameProduct={item.NameProduct}
                        LittleDesciption={item.LittleDesciption}
                        Price={item.Price}
                    />
                </Link>
            </div>
            )}
    </div>
  );
}

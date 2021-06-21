import React from "react";
import Item from "../Item/Item";

export default function ItemList({list}) {

  return (
    <div >
        {list.map(item =>
            <Item
                key={item.IdProduct}
                Photo={item.UrlPhoto}
                AltPhoto={item.AltPhoto}
                NameProduct={item.NameProduct}
                LittleDesciption={item.LittleDesciption}
                Price={item.Price}
            />
            )}
    </div>
  );
}

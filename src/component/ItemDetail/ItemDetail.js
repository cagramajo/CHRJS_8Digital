import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({Photo, AltPhoto, NameProduct, Description, Price, Stock}) {
  return (
    <div className = "ItemDetail"> 
        <div className="ui card">
            <div className="image">
                <img src={Photo} alt={AltPhoto} />
            </div>
            <div className="content">
            <div className="header">{NameProduct}</div>
            <div className="meta">Categoria_Producto</div>
                <div className="description">{Description}</div>
            </div>
            <div className="extra content">
                <i aria-hidden="true" className="usd icon"></i>{Price}
            </div>
            <ItemCount 
                stock = {Stock}
                initial = {1}       
            />
        </div>
    </div>
  );
}

export default ItemDetail;

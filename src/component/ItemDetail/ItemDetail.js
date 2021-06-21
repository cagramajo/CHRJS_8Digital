import React from "react";

function ItemDetail({Photo, AltPhoto, NameProduct, Description, Price}) {
  return (
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
    </div>
  );
}

export default ItemDetail;

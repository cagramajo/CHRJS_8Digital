import React from "react";

function Item({Photo, AltPhoto, NameProduct, LittleDesciption, Price}) {
  return (
    <div className="ui card">
    	<div className="image">
        	<img src={Photo} alt={AltPhoto}/>
      	</div>
		<div className="content">
			<div className="header">{NameProduct}</div>
			<div className="description">{LittleDesciption}</div>
		</div>
		<div className="extra content">
			<i aria-hidden="true" className="usd icon"></i>{Price}
		</div>
    </div>
  );
}

export default Item

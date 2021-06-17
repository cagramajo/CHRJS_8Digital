import React from "react";

export default function Item({Photo, AltPhoto, NameProduct, LittleDesciption, Price}) {
  return (
    <div class="ui card">
      <div class="image">
        <img src={Photo} alt={AltPhoto}/>
      </div>
      <div class="content">
        <div class="header">{NameProduct}</div>
        <div class="description">{LittleDesciption}</div>
      </div>
      <div class="extra content">
        <i aria-hidden="true" class="usd icon"></i>{Price}
      </div>
    </div>
  );
}

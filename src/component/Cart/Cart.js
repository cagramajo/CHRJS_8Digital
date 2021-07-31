import React, {useContext} from 'react';
import './Cart.css'
import CartContext from '../../context/CartContext';

export default function Cart() {

  const {state} = useContext(CartContext);
  const itemsCart = state.itemsCart;
  console.log(itemsCart);

  let total = 0

  itemsCart.map(item => total = total + item.quantity * item.product.Price);

  return(
    <div className = 'Cart'>
      <div className = 'ui center aligned container'>

        {itemsCart.map(item =>
          <div className="ui grid center aligned container" key = {itemsCart.indexOf(item)}>
            <div className="two wide column">
              <img src={item.product.UrlPhoto} alt={item.product.AltPhoto} className="ui small rounded image"/>
            </div>
            <div className="eight wide column">
              <h4 className="ui header">
                <div className="content">
                  {item.product.NameProduct}
                  <div className="sub header">
                    {item.product.LittleDesciption}
                  </div>
                </div>
              </h4>   
            </div>
            <div className="three wide column">{item.quantity}</div>
            <div className="three wide column">{item.quantity * item.product.Price}</div>
          </div>
          )}
        <div className="ui center aligned container">
          <h2>{`Total $  ${total}`}</h2>
        </div>

        <form className = 'ui form Form' >
          <div className="field">
            <label>Name:</label>
            <input name="empty" type="text"/>
          </div>
          <div className="field">
            <label>Phone Number:</label>
            <input name="empty" type="text"/>
          </div>
          <div className="field">
            <label>e-mail:</label>
            <input name="empty" type="text"/>
          </div>
          <div className="field">
            <label>Repeate e-mail:</label>
            <input name="empty" type="text"/>
          </div>
          <div>
            <button className="ui purple button">Confirm Buy</button>
          </div>
        </form>
      </div>
    </div>
  )
}


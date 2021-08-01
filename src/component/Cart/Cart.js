import React, {useContext, useState} from 'react';
import './Cart.css'
import CartContext from '../../context/CartContext';
import {db} from '../../firebase';

export default function Cart() {

  const initialClientData = {
    nameAndSurname:'',
    phoneNumber:'',
    email:'',
    mailValidation:'',
  };

  const [clientData, setClientData] = useState(initialClientData);
  const [completed, setcompleted] = useState(false);
  const {state} = useContext(CartContext);
  const itemsCart = state.itemsCart;
  const {newOrder} = useContext(CartContext);
  const orderId = state.orderId;

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    const auxClientData = {...clientData, [name]:value};
    const auxMailValidation = '';
    setClientData(auxClientData);
    fullDataVerification(auxClientData);    
  }

  const fullDataVerification = (auxClientData, auxMailValidation) => {
    setcompleted(()=>{
      if((auxClientData.nameAndSurname!='')&&(auxClientData.email!='')&&(auxClientData.phoneNumber!='')&&(auxClientData.email == auxClientData.mailValidation)){
        return true;
      }
      return false;
    })
  }

  const handleOnSubmit = async (e) => {
    console.log(completed);
    console.log(clientData);
    const auxOrder = {
      itemsCart: itemsCart,
      clientData: clientData,
    };
    newOrder(auxOrder);
  }

  const renderOrderSection = () => {
    console.log(orderId);
    let out = null;
    if(orderId==0){
      out = (
        <div>
          <button className='ui purple button' type='button' disabled={!completed}  onClick = {handleOnSubmit}>Confirm Buy</button>
        </div>
      )}
    else {
      out = (
        <div>
          <h3>Su identificador de orden es: {orderId}</h3>
        </div>
      )}
    return out;
  }

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
        <div className='ui center aligned container'>
          <h2>{`Total $  ${total}`}</h2>
        </div>

        <form className = 'ui form' >
          <div className='field'>
            <input name='nameAndSurname' type='text' placeholder='Name and Surname' value={clientData.nameAndSurname} onChange={handleOnChange}/>
          </div>
          <div className='field'>
            <input name='phoneNumber' type='text' placeholder='Phone Number' value={clientData.phoneNumber} onChange={handleOnChange}/>
          </div>
          <div className='field'>
            <input name='email' type='text' placeholder='e-mail' value={clientData.email} onChange={handleOnChange}/>
          </div>
          <div className='field'>
            <input name='mailValidation' type='text' placeholder='repeate e-mail' value={clientData.mailValidation} onChange={handleOnChange}/>
          </div>
          {renderOrderSection()}
        </form>
      </div>
    </div>
  )
}


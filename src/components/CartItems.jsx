import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
    const cartItems = useSelector((state)=>state.cart.itemsList);
  return (
    <div className="cart-container">
      <div>
       
          {cartItems.map(item =>(
             <div key={item.id}>
           <CartItem quantity={item.quantity} id={item.id} price={item.price} total={item.totalPrice} name={item.name} /></div> 
          ))}
        
      </div>
    </div>
  );
};

export default CartItems;
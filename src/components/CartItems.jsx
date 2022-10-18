import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
    const cartItems = useSelector((state)=>state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Products</h2>
      <ul>
       
          {cartItems.map(item =>(
             <li key={item.id}>
           <CartItem quantity={item.quantity} id={item.id} price={item.price} total={item.totalPrice} name={item.name} /></li> 
          ))}
        
      </ul>
    </div>
  );
};

export default CartItems;
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CartItems from './CartItems';
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Temporary.css";
import { cartActions } from "../store/cart-clice";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Temporary() {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      let total = 0;
      const itemsList = useSelector(state => state.cart.itemsList);
    
      itemsList.forEach(item=>{
        total += item.totalPrice;
      })
      const quantity = useSelector((state)=>state.cart.totalQuantity);
      const dispatch = useDispatch();
      const showCart= ()=>{
        dispatch(cartActions.setShowCart());
     }

  return (
    <div>
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button className='Temporary-btn' onClick={toggleDrawer(anchor, true,showCart)}> <h2>{quantity}</h2><ShoppingBasketIcon sx={{ fontSize: 40 }} className="Tem-icon"/></Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
  {showCart&&<CartItems/>}
  <div className="total-price">
          <h3>Total: ${total}</h3>
        </div>
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  )
}

import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cart-clice";
import '../Styles/CartItem.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem =()=>{
dispatch(cartActions.addToCart({
  name,
  id,
  price,
}))
  }
  const decrementCartItems=()=>{
    dispatch(cartActions.removeFromCart(id));
  }
  return (
    <div className="cartItem">

      <Card className="Card-size">
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {name}
        </Typography>
        <Typography  variant="h5"  color="text.secondary">
        ${price}
        </Typography>
        <Typography  variant="h5"  color="text.secondary">
        Total ${total}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  className="Card-button" onClick={decrementCartItems} size="small">-</Button>
        <h5>x{quantity}</h5>
        <Button className="Card-button" onClick={incrementCartItem}>+</Button>
      </CardActions>
    </Card>



      
    </div>
  );
};

export default CartItem;
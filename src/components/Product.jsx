import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-clice";
import "../Styles/Product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ name, id, imgURL, price }) => {
  
    const dispatch = useDispatch();
    const addToCart = ()=>{
        dispatch(cartActions.addToCart({
            name,
            id,
            price,

        }))
    }
  return (
    <div className="Card-product">
       <Card className="Card-size">
      <CardMedia
        component="img"
        height="140"
        image={imgURL}
        alt={name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography  variant="h5"  color="text.secondary">
        Price: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={addToCart} size="small">ADD</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Product;
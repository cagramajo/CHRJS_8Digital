import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import {ShoppingBasket} from '@material-ui/icons'
import {
  makeStyles,
  IconButton,
  Badge,
} from "@material-ui/core";
import { stat } from "fs";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const CartWidget = () => {
  const classes = useStyles();
  const {state} = useContext(CartContext);
  const {itemsCart} = state;

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <Badge badgeContent={itemsCart.length} color="secondary">
        <ShoppingBasket fontSize="large"/>
      </Badge>
    </IconButton>
  );
};

export default CartWidget;

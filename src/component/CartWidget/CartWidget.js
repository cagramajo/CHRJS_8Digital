import React from "react";
import {ShoppingBasket} from '@material-ui/icons'
import {
  makeStyles,
  IconButton,
  Badge,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const CartWidget = () => {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <Badge badgeContent={9} color="secondary">
        <ShoppingBasket fontSize="large"/>
      </Badge>
    </IconButton>
  );
};

export default CartWidget;

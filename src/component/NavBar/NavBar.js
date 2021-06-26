import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";
import "./NavBar.css";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Badge,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Menu />
          <Typography variant="h3" className={classes.title}>
            Mi e-commerce
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

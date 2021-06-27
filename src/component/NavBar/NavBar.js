import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "../Menu/Menu";
import {Link} from 'react-router-dom'
import "./NavBar.css";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
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
            <Link to = {'/'} className = "Link" >
              Mi e-commerce
            </Link>  
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

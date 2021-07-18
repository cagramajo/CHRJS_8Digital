import React, {useState, useEffect, useContext} from "react";
import {Link} from 'react-router-dom'
import ProductContext from "../../context/ProductContext";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, IconButton, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function SimpleMenu() {

    const {categories} = useContext(ProductContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories.map(category =>
                    <Link key={category} to = {`/category/${category}`}>
                        <MenuItem onClick={handleClose}>{category}</MenuItem>    
                    </Link>
                    )}
            </Menu>
        </div>
    );
}

import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, IconButton, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function SimpleMenu() {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [categories, setCategories] = useState([])
    const classes = useStyles();

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/categories.json?key=e244da50')
        .then((response) => {
            if (!response.ok) {
            throw Error("Connecting Error");
            }
            return response.json();
        })
        .then(categories => {
            setCategories(categories); 
        })
        .catch(error => {
            console.log(error.message);
        });
    }, [])

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
                    <Link key={category.id} to = {`/category/${category.CategoryName}`}>
                        <MenuItem onClick={handleClose}>{category.CategoryName}</MenuItem>    
                    </Link>
                    )}
            </Menu>
        </div>
    );
}

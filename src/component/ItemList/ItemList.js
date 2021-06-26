import React from "react";
import Item from "../Item/Item";
import {Link} from 'react-router-dom'
import {makeStyles, Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function ItemList({list}) {
  const classes = useStyles();

  return (
    <div >
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            {list.map(item =>
              <Grid key={item.IdProduct} item>
                <Link to = {`/product/${item.IdProduct}`}>
                    <Item
                        Photo={item.UrlPhoto}
                        AltPhoto={item.AltPhoto}
                        NameProduct={item.NameProduct}
                        LittleDesciption={item.LittleDesciption}
                        Price={item.Price}
                    />
                </Link>
              </Grid>
              )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

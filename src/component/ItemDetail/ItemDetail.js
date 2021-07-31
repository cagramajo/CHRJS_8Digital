import React from "react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    justifyContent: "center",
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: "60%", // 16:9
  },
}));

function ItemDetail({
  Photo,
  AltPhoto,
  NameProduct,
  Description,
  Price,
  Category,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={NameProduct} subheader={Category} />
      <CardMedia className={classes.media} image={Photo} title={AltPhoto} />
      <CardContent>
        <Typography>{Description}</Typography>
      </CardContent>
      <CardHeader title={`ARS ${Price}`} />
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
export default ItemDetail;

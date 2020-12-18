import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddToCompare from "../AddToCompare/AddToCompare";
import AddToCart from "../AddToCart/AddToCart";
import AddToFavorite from "../AddToFavorite/AddToFavorite";
import Detail from "../Detail/Detail";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./iphone12.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Iphone 12
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Iphone 12 là hàng xịn
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddToCart />
        <AddToCompare />
        <AddToFavorite />
        <Detail />
      </CardActions>
    </Card>
  );
}

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

interface Props {
  item: {
    image: string;
    name: string;
    description: string;
  };
}

const useStyles = makeStyles({
  root: {
    width: 345,
    marginLeft: 40,
  },
  media: {
    height: 140,
  },
});

export default function CardItem(props: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
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

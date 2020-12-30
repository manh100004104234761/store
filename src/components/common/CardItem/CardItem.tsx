import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddToCompare from "./components/AddToCompare/AddToCompare";
import AddToCart from "./components/AddToCart/AddToCart";
import AddToFavorite from "./components/AddToFavorite/AddToFavorite";
import Detail from "./components/Detail/Detail";
import { IProductDetail } from "src/shared/type/product.type";

interface Props {
  item: IProductDetail;
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
            {props.item.product_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AddToCart product_id={props.item.product_id} />
        <AddToCompare />
        <AddToFavorite product_id={props.item.product_id} />
        <Detail product_id={props.item.product_id} />
      </CardActions>
    </Card>
  );
}

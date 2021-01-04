import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { ICartItem } from "src/shared/type/cart.type";

interface Props {
  userName: string;
  cart: ICartItem[];
  cartTotal: string;
  shipping: {
    phone: string;
    street: string;
    city: string;
  };
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function OrderForm(props: Props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.cart.map((product) => (
          <ListItem className={classes.listItem} key={product.product_name}>
            <ListItemText
              primary={product.product_name}
              secondary={product.description}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.cartTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.userName}</Typography>
          <div>
            <Typography gutterBottom>{props.shipping.phone}</Typography>
            <Typography gutterBottom>{props.shipping.street}</Typography>
            <Typography gutterBottom>{props.shipping.city}</Typography>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./components/AddressForm/AddressForm";
import OrderForm from "./components/OrderForm/OrderForm";
import { makeOderReq } from "src/shared/type/user.type";
import { thanhtoan } from "src/redux/action/user.action";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { ICartItem } from "src/shared/type/cart.type";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

interface Props {
  match: any;
}

const steps = ["Shipping address", "Review your order"];

interface IcartI {
  cartInfo: ICartItem[];
  cartTotal: string;
}

export default function Checkout(props: Props) {
  const classes = useStyles();
  const location = useLocation();
  const cartId = props.match.params.cartId;
  const [activeStep, setActiveStep] = React.useState(0);
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const { cartInfo, cartTotal } = location.state as IcartI;

  const history = useHistory();
  const dispatch = useDispatch();

  const [form, setData] = useState<makeOderReq>({
    city: user.user?.city! || "",
    phone: user.user?.phone! || "",
    street: user.user?.street! || "",
  } as makeOderReq);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleCheckOut = async () => {
    let checkOutReq = {
      cart_id: cartId,
      shipping: {
        phone: form.phone,
        street: form.street,
        city: form.city,
      },
    };
    console.log(checkOutReq);
    const result = (await dispatch(thanhtoan(checkOutReq))) as any;
    console.log(result);
    if (result.status) {
      console.log("Ok");
      history.push("/");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
              </>
            ) : (
              <>
                {activeStep === 0 ? (
                  <AddressForm values={form} setValues={setData} />
                ) : (
                  <OrderForm
                    userName={user.user?.username!}
                    cart={cartInfo}
                    cartTotal={cartTotal}
                    shipping={{
                      phone: form.phone,
                      city: form.city,
                      street: form.street,
                    }}
                  />
                )}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      !(activeStep === steps.length - 1)
                        ? handleNext
                        : handleCheckOut
                    }
                    className={classes.button}
                  >
                    {!(activeStep === steps.length - 1) ? "Next" : "Checkout"}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </main>
    </>
  );
}

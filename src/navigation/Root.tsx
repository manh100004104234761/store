import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { SignIn, SignUp, Account } from "../components/common";
import { ItemDetail, Cart, Home, Checkout, Search } from "../components/web";
import { FreeRoute, PrivateRoute } from "./RouteLayout";
import { createBrowserHistory } from "history";
import App from "../App";
import New from "src/components/web/New/New";
// import { ListOrder, ListUser } from "src/components/cms";

interface Props {}
const browserHistory = createBrowserHistory();

export const Root: React.FunctionComponent = (props: Props) => {
  return (
    <Router history={browserHistory}>
      <App>
        <Switch>
          {/* Auth */}
          <Route exact path="/auth/sign-in" component={SignIn} />
          <Route exact path="/auth/sign-up" component={SignUp} />
          {/* Guest */}
          <FreeRoute exact path="/" component={Home} />
          <FreeRoute
            exact
            path="/product-detail/:productId"
            component={ItemDetail}
          />
          <FreeRoute exact path="/news" component={New} />
          <FreeRoute
            exact
            path="/search-product/:searchName"
            component={Search}
          />
          {/* <FreeRoute exact path="/list-orders" component={ListOrder} />
          <FreeRoute exact path="/list-users" component={ListUser} /> */}

          {/* User PrivateRoute */}
          <FreeRoute exact path="/account" component={Account} />
          <FreeRoute exact path="/cart" component={Cart} />
          <FreeRoute exact path="/checkout" component={Checkout} />
        </Switch>
      </App>
    </Router>
  );
};

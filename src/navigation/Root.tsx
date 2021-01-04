import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { SignIn, SignUp, Account } from "../components/common";
import {
  ItemDetail,
  Cart,
  Home,
  Checkout,
  Search,
  Compare,
  HistoryOrder,
} from "../components/web";
import { FreeRoute, PrivateRoute } from "./RouteLayout";
import { createBrowserHistory } from "history";
import App from "../App";
import New from "src/components/web/New/New";
import WishList from "src/components/web/WishList/WishList";
import Category from "src/components/web/Category/Category";
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
          <FreeRoute exact path="/category/:categoryId" component={Category} />
          <FreeRoute exact path="/compare" component={Compare} />
          {/* <FreeRoute exact path="/list-orders" component={ListOrder} />
          <FreeRoute exact path="/list-users" component={ListUser} /> */}

          {/* User PrivateRoute */}
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/wishlist" component={WishList} />
          <PrivateRoute exact path="/checkout/:cartId" component={Checkout} />
          <PrivateRoute exact path="/history-orders" component={HistoryOrder} />
        </Switch>
      </App>
    </Router>
  );
};

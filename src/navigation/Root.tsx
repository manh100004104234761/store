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
import { AdminRoute, FreeRoute, PrivateRoute } from "./RouteLayout";
import { createBrowserHistory } from "history";
import App from "../App";
import New from "src/components/web/New/New";
import WishList from "src/components/web/WishList/WishList";
import Category from "src/components/web/Category/Category";
import ManagerProducts from "src/components/Admin/ManagerProducts/ManagerProducts";
import AdminSignIn from "src/components/common/SignIn/AdminSignIn";
import ProductDetail from "src/components/Admin/ProductDetail/ProductDetail";
import EditProduct from "src/components/Admin/EditProduct/EditProduct";
import ManagerNews from "src/components/Admin/ManagerNews/ManagerNews";
import ManagerOrders from "src/components/Admin/ManagerOrders/ManagerOrders";
import OrderDetail from "src/components/Admin/OrderDetail/OrderDetail";
import ManagerUser from "src/components/Admin/ManagerUser/ManagerUser";
import UserDetail from "src/components/Admin/UserDetail/UserDetail";
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
          <Route exact path="/admin/sign-in" component={AdminSignIn} />
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

          <AdminRoute
            exact
            path="/admin/manager-products"
            component={ManagerProducts}
          />
          <AdminRoute
            exact
            path="/admin/products/:productId"
            component={ProductDetail}
          />
          <AdminRoute
            exact
            path="/admin/edit-product/:productId"
            component={EditProduct}
          />
          <AdminRoute
            exact
            path="/admin/orders/:orderId"
            component={OrderDetail}
          />
          <AdminRoute
            exact
            path="/admin/manager-news"
            component={ManagerNews}
          />
          <AdminRoute
            exact
            path="/admin/manager-orders"
            component={ManagerOrders}
          />
          <AdminRoute
            exact
            path="/admin/manager-users"
            component={ManagerUser}
          />
          <AdminRoute
            exact
            path="/admin/users/:userId"
            component={UserDetail}
          />
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

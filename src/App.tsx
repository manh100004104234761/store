import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartDetail,
  getOrders,
  getUserInfo,
  getWishList,
  persistToken,
} from "./redux/action/user.action";
import { IUserState } from "./redux/reducer/user.reducer";
import { StoreState } from "./redux/store/store";

interface Props {
  children: React.ReactNode;
}

function App(props: Props) {
  const { children } = props;
  // React Hook Function
  const dispatch = useDispatch();
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  useEffect(() => {
    if (!user.loadedInfo) {
      dispatch(persistToken());
    }
  }, [user.loadedInfo]);

  useEffect(() => {
    if (user.isLoggedIn) {
      dispatch(getUserInfo());
      dispatch(getCartDetail());
      dispatch(getWishList());
      dispatch(getOrders());
    }
  }, [user.isLoggedIn]);

  return <div className="App-wrapper">{children}</div>;
}

export default App;

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
import { ISuccessState } from "./redux/reducer/success.reducer";
import SuccessNoti from "./components/common/SuccessNoti/SuccessNoti";
import { clearSuccessNoti } from "./redux/action/success.action";
import { IErrorState } from "./redux/reducer/error.reducer";
import { ErrNoti } from "./components/common";
import { clearError } from "./redux/action/error.action";

interface Props {
  children: React.ReactNode;
}

function App(props: Props) {
  const { children } = props;
  // React Hook Function
  const dispatch = useDispatch();
  const user = useSelector<StoreState, IUserState>((state) => state.user);
  const errorState = useSelector<StoreState, IErrorState>(
    (state) => state.error
  );
  const successState = useSelector<StoreState, ISuccessState>(
    (state) => state.success
  );

  useEffect(() => {
    if (!user.loadedInfo) {
      dispatch(persistToken());
    }
  }, [user.loadedInfo]);

  useEffect(() => {
    if (user.isLoggedIn) {
    }
  }, [user.isLoggedIn]);

  return (
    <div className="App-wrapper">
      {errorState.error && (
        <ErrNoti
          error={errorState.error}
          onClose={() => dispatch(clearError())}
        />
      )}
      {successState.status && (
        <SuccessNoti
          messages={successState.message}
          onClose={() => dispatch(clearSuccessNoti())}
          open={successState.status}
        />
      )}
      {children}
    </div>
  );
}

export default App;

import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { MainLayout } from "src/components/layout";
import { IUserState } from "src/redux/reducer/user.reducer";
import { StoreState } from "src/redux/store/store";
import { isAuthenticated } from "src/selector/user.selectors";

interface Props {
  component: any;
  path: string;
  exact?: boolean;
}

export const PrivateRoute: React.FC<Props> = (props: Props) => {
  const { component: Component, ...rest } = props;
  const history = useHistory();

  const user = useSelector<StoreState, IUserState>((state) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn) {
      history.push("/auth/sign-in");
    }
  }, [user]);

  // true replace by isAuthenticated()
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isAuthenticated() ? (
          <MainLayout>
            <Component {...matchProps} />
          </MainLayout>
        ) : (
          <Redirect to={{ pathname: "/auth/sign-in" }} />
        )
      }
    />
  );
};

export const FreeRoute: React.FC<Props> = (props: Props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

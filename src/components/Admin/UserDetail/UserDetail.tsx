import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Title from "../../common/Title/Title";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { IUser } from "src/shared/type/user.type";

interface Props {
  match: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginLeft: 40,
    },
  })
);

interface IUserDetail {
  userDetail: IUser;
}

export default function UserDetail(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { userDetail } = location.state as IUserDetail;

  const orderId = props.match.params.userId;
  console.log(location);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Title title="Chi tiết người dùng" subTitle="Chi tiết người dùng" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 50 }}>
          <div>
            {Object.entries(userDetail).map(([key, value]) => (
              <div>
                <div>{key}</div>
                <div>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

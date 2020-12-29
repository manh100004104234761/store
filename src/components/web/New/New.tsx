import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import { INewState } from "src/redux/reducer/new.reducer";

const useStyles = makeStyles((theme) => ({
  new: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
}));

const New = () => {
  const classes = useStyles();
  const news = useSelector<StoreState, INewState>((state) => state.new);

  //
  return (
    <div className={classes.new}>
      {news.news.map((item) => {
        return (
          <>
            <div className={classes.new}>
              <Typography variant="h5">{item.title}</Typography>
              <div>{item.short_content}</div>
              <div>{item.content}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default New;

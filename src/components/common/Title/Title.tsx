import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 24,
  },
}));

const Title = (props: any) => {
  const { className, title, subTitle, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        {title}
      </Typography>
      <Typography component="h2" variant="h5">
        {subTitle}
      </Typography>
    </div>
  );
};

export default Title;

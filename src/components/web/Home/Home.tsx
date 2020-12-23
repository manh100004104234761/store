import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "../../common/CardItem/CardItem";

interface IMockup {
  image: string;
  name: string;
  description: string;
}

const mockup: IMockup[] = [
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone1",
    description: "Day la iphone1",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone2",
    description: "Day la iphone2",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone3",
    description: "Day la iphone3",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone4",
    description: "Day la iphone4",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone5",
    description: "Day la iphone5",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone6",
    description: "Day la iphone6",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone7",
    description: "Day la iphone7",
  },
  {
    image:
      "C:Users/miu10/Desktop/Workspace/my-app/src/components/CardItem/iphone12.png",
    name: "iphone8",
    description: "Day la iphone8",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {mockup.map((product) => {
          return (
            <Grid item xs={12} sm={4}>
              <CardItem item={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

interface IMockup {
  link: string;
  short_content: string;
  content: string;
}
interface Props {}

const mockup: IMockup[] = [
  {
    link: "asdasd",
    short_content: "asdasd",
    content: "asdasd",
  },
  {
    link: "asdasd1",
    short_content: "asdasdsadasdasdasdasd aasd asda sd",
    content: "asdasd",
  },
  {
    link: "asdasd2",
    short_content: "asadasdasdasdasdasd",
    content: "asdasd",
  },
];

const useStyles = makeStyles((theme) => ({
  new: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
}));

const New = (props: Props) => {
  const classes = useStyles();
  //
  return (
    <div className={classes.new}>
      {/* <Link color="inherit" href={props.link}>
        {props.link}
      </Link> */}
      {mockup.map((item) => {
        return (
          <>
            <div>{item.content}</div>
            <div>{item.link}</div>
            <div>{item.short_content}</div>
          </>
        );
      })}
    </div>
  );
};

export default New;

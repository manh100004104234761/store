import React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, Dialog, DialogContent, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { IErrorState } from "src/redux/reducer/error.reducer";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: colors.green[600],
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  boxError: {
    backgroundColor: "#fce0ca",
    padding: 20,
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

interface Props {
  onClose: any;
  error: null | { messages: string; infoMessage: Array<any> };
}

const ErrNoti = (props: Props) => {
  const { error, onClose = () => {} } = props;
  const classes = useStyles();

  if (!error) {
    return <div />;
  }
  let infoValues = null;

  if (error.infoMessage && error.infoMessage.length > 0) {
    infoValues = error.infoMessage[0] && Object.values(error.infoMessage[0]);
  }
  return (
    <Dialog onClose={onClose} open={true} maxWidth="sm" fullWidth>
      <DialogContent className={classes.boxError}>
        <div className={classes.flexBox}>
          <ClearIcon color="error" fontSize="large" />
          <Typography>{error.messages}</Typography>
        </div>
        {infoValues &&
          infoValues.map((info: any, index: number) => (
            <Typography key={`key_${info}_${index}`}>
              {info.toString()}
            </Typography>
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default ErrNoti;

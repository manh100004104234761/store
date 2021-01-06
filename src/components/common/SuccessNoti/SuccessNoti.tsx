import React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({}));

interface Props {
  onClose: any;
  messages: string;
  open: boolean;
}

const SuccessNoti = (props: Props) => {
  const { messages, open, onClose = () => {} } = props;
  const position: any = {
    vertical: "top",
    horizontal: "center",
  };

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: position.vertical,
        horizontal: position.horizontal,
      }}
      key={position.vertical + position.horizontal}
    >
      <Alert severity="success" onClose={onClose}>
        {messages}
      </Alert>
    </Snackbar>
  );
};

export default SuccessNoti;

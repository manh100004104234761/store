import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  Divider,
  TextField,
  colors,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "src/redux/action/user.action";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { UpdatePasswordReq } from "src/shared/type/user.type";
import { setSuccessNoti } from "src/redux/action/success.action";

const useStyles = makeStyles((theme) => ({
  root: {},
  saveButton: {
    color: "white",
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900],
    },
  },
}));
interface Props {}

const SecurityField = [
  {
    label: "Old Password",
    name: "old_password",
  },
  {
    label: "New Password",
    name: "new_password",
  },
  {
    label: "New Password Confirm",
    name: "confirm_password",
  },
];

interface IStateValue {
  new_password: string;
  old_password: string;
  confirm_password: string;
}

const Security = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const [values, setValues] = useState<IStateValue>({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const valid =
    values.new_password && values.new_password === values.confirm_password;

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdatePassword = async () => {
    try {
      const valueSubmit: UpdatePasswordReq = {
        ...values,
      };
      const result = await dispatch(updatePassword(valueSubmit));
      console.log(
        "🚀 ~ file: Security.tsx ~ line 82 ~ handleUpdatePassword ~ result",
        result
      );
      if (Boolean(result)) {
        await dispatch(setSuccessNoti("Cập nhật mật khẩu thành công"));
      }
    } catch (er) {}
  };
  return (
    <Card>
      <CardHeader title="Change password" />
      <Divider />
      <CardContent>
        <form>
          <Grid container spacing={3}>
            {SecurityField.map((field) => (
              <Grid key={field.name} item xs={12}>
                <TextField
                  fullWidth
                  {...field}
                  onChange={handleChange}
                  type="password"
                  value={values[field.name as keyof IStateValue]}
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.saveButton}
          variant="contained"
          disabled={!valid}
          onClick={handleUpdatePassword}
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default Security;

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
    label: "Password",
    name: "password",
  },
  {
    label: "Password Confirm",
    name: "password_confirm",
  },
];

interface IStateValue {
  password: string;
  password_confirm: string;
}

const Security = (props: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState<IStateValue>({
    password: "",
    password_confirm: "",
  });

  const valid = values.password && values.password === values.password_confirm;

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Card>
      <CardHeader title="Change password" />
      <Divider />
      <CardContent>
        <form>
          <Grid container spacing={3}>
            {SecurityField.map((field) => (
              <Grid key={field.name} item md={6} sm={6} xs={12}>
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
        >
          Save changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default Security;
